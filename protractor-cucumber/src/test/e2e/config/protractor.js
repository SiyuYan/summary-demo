exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'cucumber',
    baseUrl: '',
    suites: {
        login: '../features/login.feature',
        test: '../features/test.feature'
    },
    capabilities: {
        browserName: 'phantomjs'
    },
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        Format: 'json'
    },
    allScriptTimeout: 10000,//Sets the amount of time to wait for an asynchronous script to finish execution before throwing an error.
    getPageTimeout: 100000,
    rootElement: 'html',//Error while waiting for protractor to sync with the page [ng:test] ng-app on html not body
    onPrepare: function () {
        global.root_path = '';
    }
};