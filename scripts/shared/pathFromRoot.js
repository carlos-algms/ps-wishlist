const path = require('path');

const pathFromRoot = (...pieces) => path.join(__dirname, '..', '..', ...pieces);

module.exports = pathFromRoot;
