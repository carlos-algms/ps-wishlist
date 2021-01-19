## Release Flow

- Create a branch and commit changes
- Change version in `package.json` and `manifest.json`
- Create a PR to `main` branch
- Create a new Release on [Github](https://github.com/carlos-algms/ps-wishlist/releases/new)
- [Workflow will run](https://github.com/carlos-algms/ps-wishlist/actions) and generate the extension ZIP package
- Go to the [latest release](https://github.com/carlos-algms/ps-wishlist/releases/latest) page and download the zip file
- Go to https://chrome.google.com/webstore/devconsole/ and upload the ZIP file
