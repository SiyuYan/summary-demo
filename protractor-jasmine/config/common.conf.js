var env = require('./config.environment.js');
var suites = require('./config.suites.js');
var logger = require('../helpers/utils/logger.js');

exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: env.capabilities,

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['spec.js'],
    framework: 'jasmine2',
    suites: suites.suites,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },

    onPrepare: function () {
        global.logger = logger;
        logger.info('**info**')
        logger.debug('**debug**')
    }
};
