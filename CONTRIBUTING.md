## Release Flow

- Create a branch and commit changes
- Change version in `package.json` and `manifest.json`
- Create a PR to `main` branch
- Run `yarn build`
- Then: `yarn pack` to generate the ZIP file
- Go to https://chrome.google.com/webstore/devconsole/ and upload the ZIP file
