// @ts-check
const pathFromRoot = require('./pathFromRoot');

/**
 * @type {typeof import('../../package.json')}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pkgJson = require(pathFromRoot('package.json'));

const buildExtensionFileName = () => `extension-v${pkgJson.version}.zip`;

module.exports = buildExtensionFileName;
