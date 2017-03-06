module.exports.config = {
    specs: ['home_work/lesson4_working_tests/landingPage.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare: function () {
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());
    }
}