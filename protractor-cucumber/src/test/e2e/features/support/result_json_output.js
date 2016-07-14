module.exports = function () {
    var Cucumber = require('cucumber');
    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    var fs = require('fs');
    var path = require('path');
    var jsonOutput = './target/e2eReports/e2e.json';
    JsonFormatter.log = function (json) {
        fs.writeFile(jsonOutput, json, function (err) {
            if (err)throw err;
            console.log('json file location' + jsonOutput);
        });
    };
    this.registerListener(JsonFormatter);
};