module.exports = function (grunt) {

    grunt.initConfig({
        protractor: {
            e2e: {
                options: {
                    configFile: "config/common.conf.js", // Target-specific config file
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false,// If true, protractor will not use colors in its output.
                    args: {
                        suite: 'login'
                    }
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    // grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('default', ['protractor:e2e']);


};