var request = require('superset')

describe('测试cookie', function () {

    var agent = request.agent('待测server');

    it('should save cookies', function (done) {
        agent
            .get('/')
            .expect('set-cookie', 'cookie=hey; Path=/', done);
    });

    it('should send cookies', function (done) {
        agent
            .get('/return')
            .expect('hey', done);
    })
});