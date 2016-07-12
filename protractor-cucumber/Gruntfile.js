module.exports = function (grunt) {
    grunt.initConfig({
        mkdir: {
            all: {
                options: {
                    create: ['./target/report']
                }
            }
        },
        'protractor-cucumber-html-report': {
            options: {
                dest: './target/report',
                output: './e2e.html'
            },
            default: {
                options: {
                    testJSONResultPath: './target/report/e2e.json'
                }
            }
        },
        protractor: {
            default: {
                options: {
                    configFile: "src/test/e2e/config/protractor-conf.js", // Target-specific config file
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false,// If true, protractor will not use colors in its output.
                    args: {
                        suite: ["test"],
                        cucumberOpts: {
                            require: 'src/test/e2e/features/step_definitions/*.js',
                            tags: ['~@ignore']
                        }
                    }
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');

    grunt.registerTask('test', ['mkdir', 'protractor:default', 'protractor-cucumber-html-report:default']);
};