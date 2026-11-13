import releaseIndex from '../../../public/releases/index.json';
// Version and manifest paths come from the existing release inventory.
export const serverResources = (['avatar', 'workflow'] as const).flatMap(product => {
  const file = releaseIndex.versions.flatMap(version => releaseIndex.files.filter(item => item.version === version && item.product === product))[0];
  return file ? [{ product, version: file.version, manifest: file.path, name: product === 'avatar' ? { zh: 'TeGo OS 服务端', en: 'TeGo OS Server' } : { zh: '工作流服务', en: 'Workflow service' } }] : [];
});
