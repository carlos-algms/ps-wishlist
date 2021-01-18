const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');

const buildExtensionFileName = require('../shared/buildExtensionFileName');
const pathFromRoot = require('../shared/pathFromRoot');

const octokit = new Octokit();

const file = pathFromRoot(buildExtensionFileName());

const owner = 'carlos-algms';
const repo = 'ps-wishlist';

void (async () => {
  try {
    const latestRelease = await octokit.repos.getLatestRelease({
      owner,
      repo,
    });

    const result = await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: latestRelease.data.id,
      data: fs.createReadStream(file),
      headers: {
        'Content-Type': mime.lookup(file) || 'application/octet-stream',
        'Content-Length': fs.statSync(file).size,
      },
      name: path.basename(file),
    });

    console.log('Extension uploaded:', result.data.browser_download_url);
  } catch (error) {
    console.error(error);
  }
})();
