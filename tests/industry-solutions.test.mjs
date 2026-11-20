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

const { homeIndustries, industrySolutionImages } = loadData('src/data/home-industries.ts');
const industries = [
  ['banking', 'bankingPresentation', 0],
  ['insurance', 'insurancePresentation', 1],
  ['securities', 'securitiesPresentation', 2],
  ['government', 'governmentPresentation', 3],
  ['state-owned', 'stateOwnedPresentation', 4],
  ['trust', 'trustPresentation', 5],
  ['general', 'generalPresentation', 6],
];

test('solution discovery retains the supported industries, general business and appliance routes', () => {
  const directory = path.join(root, 'src/features/solutions');
  const entries = readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && existsSync(path.join(directory, entry.name, 'content.ts')))
    .map(entry => loadData(`src/features/solutions/${entry.name}/content.ts`).default);
  assert.deepEqual(entries.map(entry => entry.slug).sort(), ['appliance', 'banking', 'general', 'government', 'insurance', 'securities', 'state-owned', 'trust']);
  for (const locale of ['zh', 'en']) {
    assert.deepEqual(Object.keys(homeIndustries[locale]).sort(), ['banking', 'general', 'government', 'insurance', 'securities', 'state-owned', 'trust']);
    for (const entry of entries) {
      assert.equal(entry.copy[locale].slug, entry.slug);
      assert.ok(existsSync(path.join(directory, entry.slug, 'Page.astro')));
    }
  }
});

test('seven solution pages give each business value chapter its own illustration', () => {
  const sharedPage = readFileSync(path.join(root, 'src/features/solutions/shared/IndustrySolutionPage.astro'), 'utf8');
  assert.match(sharedPage, /copy\.features\.map[\s\S]*?<article\b[\s\S]*?<figure\b[\s\S]*?src=\{feature\.image\}/, 'Each complete chapter needs its own business illustration');
  assert.match(sharedPage, /alt=\{feature\.imageAlt\}/, 'Each topic image must have its own accessible description');
  assert.doesNotMatch(sharedPage, /src=\{copy\.hero\.illustration\}|feature\.problem|EmployeeCarousel/, 'Detail pages must not regress to one overview image followed by text or a process carousel');
  for (const [slug] of industries) {
    const route = readFileSync(path.join(root, `src/features/solutions/${slug}/Page.astro`), 'utf8');
    assert.match(route, /import IndustrySolutionPage from '\.\.\/shared\/IndustrySolutionPage\.astro'/);
    assert.match(route, new RegExp(`slug="${slug}"`));
  }
});

test('homepage and overview use the same localized value illustration as each industry story', () => {
  const explorer = readFileSync(path.join(root, 'src/components/SolutionExplorer.astro'), 'utf8');
  const imageExpression = explorer.match(/const solutionImage = \(slug: string\) => ([^;]+);/);
  assert.ok(imageExpression, 'Industry discovery needs a value-illustration resolver');
  assert.match(explorer, /src=\{solutionImage\(industry\.slug\)\}/);
  for (const locale of ['zh', 'en']) {
    const imageFor = runInNewContext(`(slug) => ${imageExpression[1]}`, { locale, industrySolutionImages });
    for (const [slug, exportName] of industries) {
      const copy = loadData(`src/features/solutions/${slug}/page-content.ts`)[exportName][locale];
      assert.equal(imageFor(slug), copy.hero.illustration, `${locale}/${slug} discovery and detail must share the value illustration`);
      assert.equal(copy.hero.illustration, copy.features[0].image, 'Discovery introduces the first business value theme');
    }
  }
});

test('general business remains discoverable without adding a seventh homepage or navigation tab', () => {
  const source = readFileSync(path.join(root, 'src/data/industries.ts'), 'utf8');
  const homepageSlugs = source.match(/export const homeIndustrySlugs = (\[[^\]]+\])/);
  assert.ok(homepageSlugs, 'Homepage industry tabs need an explicit discovery order');
  const slugs = JSON.parse(homepageSlugs[1].replaceAll("'", '"'));
  assert.deepEqual(slugs, ['banking', 'insurance', 'securities', 'government', 'state-owned', 'trust']);
  const general = loadData('src/features/solutions/general/content.ts').default;
  assert.equal(general.category, 'general');
});

for (const [slug, exportName, order] of industries) {
  const presentation = loadData(`src/features/solutions/${slug}/page-content.ts`)[exportName];
  const metadata = loadData(`src/features/solutions/${slug}/content.ts`).default;

  test(`${slug}: homepage, detail and navigation use consistent localized content`, () => {
    assert.equal(metadata.order, order);
    for (const locale of ['zh', 'en']) {
      const copy = presentation[locale];
      const homepage = homeIndustries[locale][slug];
      assert.equal(homepage, copy.home, 'Homepage and overview must use the same complete presentation source');
      assert.equal(homepage.scenarios, copy.home.scenarios, 'Homepage scenarios must use the detail content source');
      assert.equal(homepage.scenarios.length, 6);
      assert.equal(homepage.benefits.length, 3);
      assert.ok(homepage.title.trim().length > 0 && homepage.pain.trim().length > 0 && homepage.value.trim().length > 0);
      assert.ok(homepage.benefits.every(benefit => benefit.title.trim().length > 0 && benefit.description.trim().length > 0));
      assert.equal(metadata.copy[locale].title, copy.home.title);
      assert.equal(metadata.copy[locale].description, copy.home.value);
      assert.equal(copy.features.length, 4);
      assert.equal(copy.outputs.length, 4);
      assert.equal(copy.sources.length, 4);
      assert.equal(copy.hero.lines.length, 2);
      for (const feature of copy.features) {
        assert.ok(feature.title.trim().length > 0, `${locale}/${slug} needs a value headline`);
        assert.ok(feature.body.trim().length > 0, `${locale}/${slug} needs a business benefit`);
        assert.ok(feature.imageAlt.trim().length > 0, `${locale}/${slug} needs a business-specific image description`);
        assert.ok(Number.isInteger(feature.imageHeight) && feature.imageHeight > 200 && feature.imageHeight <= 800, 'Artwork dimensions must preserve the complete business graphic without blank framing');
        assert.equal(feature.outcomes.length, 3);
      }
      assert.equal(new Set(copy.features.map(feature => feature.image)).size, 4, 'Four different business themes need four distinct images');
      assert.equal(metadata.copy[locale].tasks.length, copy.employees.length);
    }
  });

  test(`${slug}: both languages provide complete employee roles`, () => {
    for (const locale of ['zh', 'en']) {
      const copy = presentation[locale];
      assert.equal(copy.employees.length, 6);
      assert.equal(new Set(copy.employees.map(employee => employee.role)).size, copy.employees.length);
      for (const employee of copy.employees) {
        for (const [field, count] of [['skills', 3], ['process', 3], ['outputs', 2]]) {
          assert.equal(employee[field].length, count, `${employee.role} needs ${count} ${field}`);
          assert.ok(employee[field].every(item => item.trim().length > 0));
        }
        assert.ok(employee.value.trim().length > 0);
      }
    }
  });

  test(`${slug}: both languages reference an available value illustration and compatibility assets`, () => {
    for (const locale of ['zh', 'en']) {
      const copy = presentation[locale];
      const scenes = copy.features.map(feature => feature.image);
      for (const scene of scenes) assert.match(scene, new RegExp(`^/images/solutions/${slug}/${slug}-value-scene-[1-4]-${locale}_V[0-9]+\\.[0-9]+\\.webp$`));
      const assets = [copy.hero.background, copy.hero.illustration, ...scenes, ...copy.employees.map(employee => employee.avatar)];
      for (const asset of assets) {
        assert.ok(asset.startsWith('/images/'));
        assert.ok(existsSync(path.join(root, 'public', asset)), `Missing asset: ${asset}`);
      }
    }
  });
}
