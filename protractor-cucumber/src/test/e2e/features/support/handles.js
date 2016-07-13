var myHandlers = function () {
    this.registerHandler('AfterStep', function (features, callback) {
        // clean up!
        // There is no World instance available on `this`
        // because all scenarios are done and World instances are long gone.
        console.log('+++++'+'\n');
        callback();
    });
}

module.exports = myHandlers;