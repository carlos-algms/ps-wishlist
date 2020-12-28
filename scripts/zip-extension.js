const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const prettyBytes = require('pretty-bytes');

const pathFromRoot = (...pieces) => path.join(__dirname, '..', ...pieces);

/**
 * @type {typeof import('../package.json')}
 */
const pkgJson = require(pathFromRoot('package.json'));

const outFileName = `extension-v${pkgJson.version}.zip`;

const output = fs.createWriteStream(pathFromRoot(outFileName));
const archive = archiver('zip');

output.on('close', () => {
  console.log('Extension package created:');
  console.log(outFileName, ' - ', prettyBytes(archive.pointer()));
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.log(err.message);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  console.error(error.message);
  throw err;
});

archive.pipe(output);
archive.directory(pathFromRoot('dist'), false);

archive.finalize();
