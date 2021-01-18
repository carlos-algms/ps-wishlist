const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');

const buildExtensionFileName = require('../shared/buildExtensionFileName');
const pathFromRoot = require('../shared/pathFromRoot');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const file = pathFromRoot(buildExtensionFileName());

const owner = 'carlos-algms';
const repo = 'ps-wishlist';

void (async () => {
  try {
    const release = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag: process.env.TAG,
    });

    const result = await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.data.id,
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
