var myHooks = function () {
    //this.Before({tags: ["@test"]}, function (scenario) {
    //    // This hook will be executed before scenarios tagged with @foo and either
    //    // @bar or @baz.
    //
    //    // ...
    //    console.log('before hook')
    //});
    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'Base64').toString('binary');
                scenario.attach()(decodedImage, 'image/png');
                callback();
            });
        }
        else callback();
    })
};

module.exports = myHooks;