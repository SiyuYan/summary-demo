//var JsonOutputHook= function () {
//    var Cucumber = require('cucumber');
//    var JsonFormatter = Cucumber.Listener.JsonFormatter();
//    var fs = require('fs');
//    var path = require('path');
//
//    var jsonOutput = './target/report/e2e.json';
//    console.log('********' );
//
//    JsonFormatter.log = function (json) {
//        fs.writeFile(jsonOutput, json, function (err) {
//            if (err)throw err;
//            console.log('json file location' + jsonOutput);
//        });
//    };
//    this.registerListener(JsonFormatter);
//};
//module.exports = JsonOutputHook;

module.exports = function JsonOutputHook() {
    this.After(function (scenario) {
        scenario.attach('Some text');
    });
};