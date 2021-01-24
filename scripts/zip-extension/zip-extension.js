// @ts-check
const archiver = require('archiver');
const fs = require('fs');
const prettyBytes = require('pretty-bytes');

const buildExtensionFileName = require('../shared/buildExtensionFileName');
const pathFromRoot = require('../shared/pathFromRoot');

const outFileName = buildExtensionFileName();

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
  console.error(err.message);
  throw err;
});

archive.pipe(output);
archive.directory(pathFromRoot('dist'), false);

void archive.finalize();
