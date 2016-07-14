var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var clientId;

module.exports = function () {
    this.Given(/^open the login page$/, function (done) {
        browser.driver.get('https://github.com/login');
        expect(browser.driver.getTitle()).to.eventually.equal('Sign in to GitHub · GitHub').and.notify(done);
    });

    this.When(/^login with users "([^"]*)" and "([^"]*)"$/, function (UserName, PassWord, done) {
        browser.driver.findElement(by.id('login_field')).sendKeys(UserName);
        browser.driver.findElement(by.id('password')).sendKeys(PassWord);
        browser.driver.findElement(by.name('commit')).click();
        expect(browser.driver.getCurrentUrl()).to.eventually.not.equal('http').and.notify(done);
    });

    this.Then(/^login "(.*)"$/, function (LoginResult, done) {
        if (LoginResult === 'successful') {
            browser.driver.wait(function () {
                return browser.driver.getCurrentUrl().then(function () {
                        browser.driver.quit();
                        expect(browser.driver.getCurrentUrl()).to.eventually.equal('https://github.com/').and.notify(done);
                    }
                );
            }, 3000);
            //browser.driver.then(function () {
            //    return browser.driver.getCurrentUrl().then(function () {
            //        expect(browser.driver.getCurrentUrl()).to.eventually.equal('https://github.com/').and.notify(done);
            //    })
            //});
        }
        else {
            expect(browser.driver.getCurrentUrl()).to.eventually.not.equal('https://github.com/').and.notify(done);
        }
    });
};