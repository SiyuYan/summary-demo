var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var clientId;
var jsonfile = require('jsonfile');
module.exports = function () {
    this.Given(/^test feature$/, function (done) {
        var file = '/Users/syyan/Thoughtworks/summary-demo/protractor-cucumber/src/test/e2e/features/data/test.json';
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj.yan.name);
        });
        done()
    });

};