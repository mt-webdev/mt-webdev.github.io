const path = require('path');

const ROOT = path.resolve(__dirname, '..');

module.exports = {
    outDir: 'dist',
    resolve: function (filePath) {
        filePath = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [ROOT].concat(filePath));
    }
};
