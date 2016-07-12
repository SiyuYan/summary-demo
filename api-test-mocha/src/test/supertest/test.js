var request = require('supertest')('https://github.com/');

request
    .get('/')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });