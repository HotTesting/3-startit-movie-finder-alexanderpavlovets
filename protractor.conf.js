module.exports.config = {
    specs: ['home_work/page_obj_project/home_page.js',
            'home_work/page_obj_project/category_page.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare: function () {
        //adding more UI friendly reporter
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());


        // Jasmine PRE/POST conditions
        beforeEach(()=> {
            //i'll write something here later - now tests are highest priority 
        })
        afterAll(()=>{
            //i'll write something here later - now tests are highest priority 
        })


        //Making ExpectedConditions accessible everywhere through shortcut
        global.EC = protractor.ExpectedConditions;
    }
}