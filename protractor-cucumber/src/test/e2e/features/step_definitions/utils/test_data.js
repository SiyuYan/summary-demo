var testData = function () {
    var yaml = require('js-yaml');
    var fs = require('fs');
    this.yamlData = yaml.safeLoad(fs.readFileSync('./src/test/e2e/features/data/test.yml', 'utf8'));

};
module.exports = new testData();