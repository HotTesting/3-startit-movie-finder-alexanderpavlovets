let HomePage = require('../../PageObjects/HomePage.js').HomePage

describe('Home page', ()=> {
let homePage = new HomePage()


    it('has 2 sections after opening "Top Rated" and "Popular" ', ()=>{
        homePage.open()

        expect(homePage.getTopRatedMoviesCollection().count()).toBe(20, 'Home page should have 20 movies in Top rated area after opening')

    })
})