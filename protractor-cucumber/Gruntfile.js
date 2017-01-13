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
                output: './e2e.html',
                testJSONDirectory: ''
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
                    configFile: "src/test/e2e/config/protractor.js", // Target-specific config file
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false,// If true, protractor will not use colors in its output.
                    args: {
                        suite: ["login"],
                        cucumberOpts: {
                            require: '/Users/syyan/Thoughtworks/summary-demo/protractor-cucumber/src/test/e2e/features/step_definitions/*.js',
                            tags: ['~@ignore']
                        }
                    }
                }
            }
        },
        express:{
            front:{
                options:{
                    script:'server.js'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('test', ['mkdir', 'protractor:default', 'protractor-cucumber-html-report:default']);
    grunt.registerTask('e2e', 'test', function () {
        process.env.URL = "";
        grunt.task.run([
            'mkdir', 'protractor:default', 'protractor-cucumber-html-report:default'
        ])

    });

};