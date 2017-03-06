module.exports.config = {
    specs: ['home_work/lesson4_working_tests/landingPage.js', 
            'home_work/lesson4_working_tests/searchMainFunctionality.js',
            'home_work/lesson4_working_tests/movieCardValidation.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare: function () {
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());
        beforeEach(()=> {
            //i'll write something here later - now tests are highest priority 
        })
        afterAll(()=>{
            //i'll write something here later - now tests are highest priority 
        })
    }
}