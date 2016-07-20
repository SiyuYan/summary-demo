var myHooks = function () {
    //this.Before({tags: ["@test"]}, function (scenario) {
    //    // This hook will be executed before scenarios tagged with @foo and either
    //    // @bar or @baz.
    //
    //    // ...
    //    console.log('before hook')
    //});
    this.After(function (scenario, callback) {
       // console.log('Attach ' + global.attachments.length + 'screenshots for scenario:' + scenario.getName());
        //if (scenario.isFailed()) {
        browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, 'Base64').toString('binary');
            console.log(decodedImage);
            scenario.attach()(decodedImage, 'image/png');
            callback();
        });
    });
    //    //else callback();
    //    global.attachments.forEach(function (attachment) {
    //        scenario.attach(attachment, 'image/png');
    //    });
    //    global.attachments = [];
    //    console.log('Clear attachments ' + global.attachments.length);
    //    callback();
    //
    //})
};

module.exports = myHooks;