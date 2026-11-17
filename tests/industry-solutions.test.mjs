import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const modules = new Map();
function loadData(relativePath) {
  const file = path.resolve(root, relativePath);
  if (modules.has(file)) return modules.get(file).exports;
  const module = { exports: {} };
  modules.set(file, module);
  const source = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const require = specifier => {
    assert.ok(specifier.startsWith('.'), `Industry content must remain local data: ${specifier}`);
    return loadData(path.resolve(path.dirname(file), `${specifier}.ts`));
  };
  runInNewContext(source, { module, exports: module.exports, require });
  return module.exports;
}

const { homeIndustries } = loadData('src/data/home-industries.ts');
const industries = [
  ['insurance', 'insurancePresentation', 1],
  ['securities', 'securitiesPresentation', 2],
  ['government', 'governmentPresentation', 3],
  ['state-owned', 'stateOwnedPresentation', 4],
];

test('solution discovery retains the supported industries, general business and appliance routes', () => {
  const directory = path.join(root, 'src/features/solutions');
  const entries = readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && existsSync(path.join(directory, entry.name, 'content.ts')))
    .map(entry => loadData(`src/features/solutions/${entry.name}/content.ts`).default);
  assert.deepEqual(entries.map(entry => entry.slug).sort(), ['appliance', 'banking', 'general', 'government', 'insurance', 'securities', 'state-owned']);
  for (const locale of ['zh', 'en']) {
    assert.deepEqual(Object.keys(homeIndustries[locale]).sort(), ['banking', 'government', 'insurance', 'securities', 'state-owned']);
    for (const entry of entries) {
      assert.equal(entry.copy[locale].slug, entry.slug);
      assert.ok(existsSync(path.join(directory, entry.slug, 'Page.astro')));
    }
  }
});

test('industry routes retain distinct business visuals and the redesigned pages use independent composition', () => {
  const structures = new Set();
  const sharedPage = readFileSync(path.join(root, 'src/features/solutions/shared/IndustrySolutionPage.astro'), 'utf8');
  assert.doesNotMatch(sharedPage, /IndustryWorkbench|IndustryValueVisual/);
  for (const [slug] of industries) {
    const route = readFileSync(path.join(root, `src/features/solutions/${slug}/Page.astro`), 'utf8');
    assert.match(route, /import SolutionVisual from '\.\/SolutionVisual\.astro'/);
    if (['government', 'state-owned'].includes(slug)) {
      assert.doesNotMatch(route, /IndustrySolutionPage/, `${slug} must retain its independent page composition`);
      assert.match(route, /<section\b/);
    } else {
      assert.match(route, /Visual=\{SolutionVisual\}/);
    }
    const visual = readFileSync(path.join(root, `src/features/solutions/${slug}/SolutionVisual.astro`), 'utf8');
    assert.doesNotMatch(visual, /IndustryWorkbench|IndustryValueVisual/);
    const markup = visual.split('---')[2].split('<style>')[0];
    structures.add([...markup.matchAll(/<\/?([A-Za-z][A-Za-z0-9-]*)\b/g)].map(match => match[1]).join('/'));
  }
  assert.equal(structures.size, industries.length, 'Industry diagrams must have independent business structures');
});

for (const [slug, exportName, order] of industries) {
  const presentation = loadData(`src/features/solutions/${slug}/page-content.ts`)[exportName];
  const metadata = loadData(`src/features/solutions/${slug}/content.ts`).default;

  test(`${slug}: homepage, detail and navigation use consistent localized content`, () => {
    assert.equal(metadata.order, order);
    for (const locale of ['zh', 'en']) {
      const copy = presentation[locale];
      const homepage = homeIndustries[locale][slug];
      assert.equal(homepage.scenarios, copy.home.scenarios, 'Homepage scenarios must use the detail content source');
      assert.equal(homepage.benefits.length, copy.home.benefits.length);
      assert.ok(homepage.title.trim().length > 0 && homepage.pain.trim().length > 0 && homepage.value.trim().length > 0);
      assert.ok(homepage.benefits.every(benefit => benefit.title.trim().length > 0 && benefit.description.trim().length > 0));
      assert.equal(metadata.copy[locale].title, copy.home.title);
      assert.equal(metadata.copy[locale].description, copy.home.value);
      assert.equal(copy.features.length, copy.home.benefits.length);
      assert.equal(copy.features.length, 3);
      assert.equal(copy.outputs.length, copy.features.length);
      assert.ok(copy.sources.length >= 3);
      assert.equal('workbench' in copy, false);
      assert.equal('visual' in copy, false);
      assert.equal(metadata.copy[locale].tasks.length, copy.employees.length);
    }
  });

  test(`${slug}: both languages provide complete employees and valid visual assets`, () => {
    for (const locale of ['zh', 'en']) {
      const copy = presentation[locale];
      assert.equal(copy.employees.length, 6);
      assert.equal(new Set(copy.employees.map(employee => employee.role)).size, copy.employees.length);
      for (const employee of copy.employees) {
        for (const field of ['skills', 'process', 'outputs']) {
          assert.ok(employee[field].length >= 2, `${employee.role} needs ${field}`);
          assert.ok(employee[field].every(item => item.trim().length > 0));
        }
      }
      const assets = [copy.hero.background, ...copy.employees.map(employee => employee.avatar)];
      for (const asset of assets) {
        assert.ok(asset.startsWith('/images/'));
        assert.ok(existsSync(path.join(root, 'public', asset)), `Missing asset: ${asset}`);
      }
    }
  });
}
