let HomePage = require('../../PageObjects/HomePage.js').HomePage

describe('Home page', ()=> {
let homePage = new HomePage()


    it('has 2 sections after opening "Top Rated" and "Popular" ', ()=>{
        homePage.open()

        expect(homePage.getTopRatedMoviesCollection().count()).toBe(20, 'Home page should have 20 movies in Top rated area after opening')
        expect(homePage.getPopularMoviesCollection().count()).toBe(20, 'Home page should have 20 movies in Popular area after opening')

    })

    it('displays results after valid search', () => {
        homePage.open()
        homePage.searchForMovie('Matrix')
        homePage.getSearchResultCollection().map((movieCard) => {
            expect(movieCard.$('h4').getText().then(text => text.toLowerCase())).toContain('matrix')
        })
    })

    it('after search with non-existing value, have empty search results area, Top rated aread and Popular area', () => {
        homePage.open()
        homePage.searchForMovie('ReallyinexistantstringforSearch')
        
        expect(homePage.getSearchResultCollection().count()).toBe(0, 'after non-existing value is passed to search, no search results should be displayed')
        expect(homePage.getTopRatedMoviesCollection().count()).toBe(20, 'after non-existing value is passed to search, TopRated area with 20 movies should be presented')
        expect(homePage.getPopularMoviesCollection().count()).toBe(20, 'after non-existing value is passed to search, Popular area with 20 movies should be presented')
    })

    it('opens appropriate cat', ()=> {
        homePage.open()
        homePage.categoriesLinksCollection.map((eachCat) => {
            browser.manage().timeouts().implicitlyWait(1000) //Implicit wait, to give browser a time to open each category, and find it's title text
            homePage.openCategory(eachCat)
            expect(eachCat.getText()).toContain($('app-genres h3').getText(), 'category name and title should match')
        })
    })
})