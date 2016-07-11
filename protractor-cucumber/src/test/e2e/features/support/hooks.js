var myHooks = function () {
    this.Before({tags: ["@test"]}, function (scenario) {
        // This hook will be executed before scenarios tagged with @foo and either
        // @bar or @baz.

        // ...
    });
};

module.exports = myHooks;