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

    it('opens appropriate category', ()=> {
        homePage.open()
        homePage.categoriesLinksCollection.map(eachCat => {
            // Implicit wait is critical here, without it - won't work. Implicit wait defined in config (onPrepare).
            homePage.openCategory(eachCat)
            expect(eachCat.getText()).toContain($('app-genres h3').getText(), 'category name and title should match')
        })
    })
    
    fit('opens "Upcoming movies" section', () => {
        homePage.open()
        homePage.openUpcomingMovies()
        let titleOfUpcomingMoviesSection = $('h3')
        browser.wait(EC.visibilityOf(titleOfUpcomingMoviesSection), 2000, 'title of Upcoming movies should be shown ')
        expect(titleOfUpcomingMoviesSection.getText()).toContain('Up Coming Movies', 'title of opened Upcoming movies section, shoud be "Up Coming Movies"')
        //let appearedClassOfUpcomingMoviesLink = $$('[id=navbar] li').first().getAttribute('class').then((text)=>console.log(text))
        expect($$('[id=navbar] li').first().getAttribute('class')).toContain('active', 'Oops! ')
        // weird - try to use let, need to understand 
    })    

})