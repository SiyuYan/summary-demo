exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    baseUrl: '',
    suites: {
        login: '../features/login.feature',
        test: '../features/test.feature'
    },
    capabilities: {
        browserName: 'chrome'
    },
    //multiCapabilities: [{
    //    shardTestFiles: false,
    //    browserName: 'firefox'
    //}, {
    //    shardTestFiles: false,
    //    browserName: 'phantomjs'
    //    'phantomjs.binary.path': require('phantomjs').path,
    //    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    //
    //}],
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        Format: 'json'
    }
    ,
    allScriptTimeout: 10000,//Sets the amount of time to wait for an asynchronous script to finish execution before throwing an error.
    getPageTimeout: 100000,
    rootElement: 'html',//Error while waiting for protractor to sync with the page [ng:test] ng-app on html not body
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        //browser.get('e2e/index.html');
        global.root_path = '';

    }

}
;