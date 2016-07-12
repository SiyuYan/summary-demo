var request = require('supertest')('https://github.com');

describe('Github home page',function(){

    this.timeout(10000);

    before('must be on home page',function(done){
        request.get('/')
            .expect(200,done);
    });

    it('could be navigated to register page',function(done){
        request.get('/join')
            .expect(200,done);
    });

    it('will refuse the request if username has been taken',function(done){
        request.post('/signup_check/username')
            .type('form')
            .send('value=lala')
            .expect(403)
            .end(function(err,res){
                if (err) return done(err);
                done();
            })
    });
});