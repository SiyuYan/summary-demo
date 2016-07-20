var Report = require('cucumber-html-report');

var options = {
    source: './target/report/e2e.json', // source json
    dest: './target/report',          // target directory (will create if not exists)
    name: 'report.html',        // report file name (will be index.html if not exists)
    template: '',    // your custom mustache template (uses default if not specified)
    title: 'Cucumber Report',    // Title for default template. (default is Cucumber Report)
    component: 'My Component'      // Subtitle for default template. (default is empty)
};

var report = new Report(options);
report.createReport();