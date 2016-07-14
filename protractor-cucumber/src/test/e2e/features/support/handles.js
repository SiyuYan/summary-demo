var myHandlers = function () {
    global.attachments = [];

    this.registerHandler('AfterStep', function (step, callback) {
        if (step.getName()) {
            console.log('Screen step:   ' + step.getName());
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'Base64');
                global.attachments.push(decodedImage);
            })
        }
        callback();
    });
};

module.exports = myHandlers;