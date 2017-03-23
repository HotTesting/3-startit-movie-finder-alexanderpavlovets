let HomePage = require('../../PageObjects/HomePage.js').HomePage

describe('Home page', ()=> {
let homePage = new HomePage()


    it('has 2 sections after opening "Top Rated" and "Popular" ', ()=>{
        homePage.open()

        expect(homePage.TopRatedMoviesCollection.count()).toBe(20, 'Home page should have 20 movies in Top rated area after opening')
        expect(homePage.PopularMoviesCollection.count()).toBe(20, 'Home page should have 20 movies in Popular area after opening')

    })

    it('displays results after valid search', () => {
        homePage.open()
        homePage.searchForMovie('Matrix')
        homePage.SearchResultCollection.map((movieCard) => {
            expect(movieCard.$('h4').getText().then(text => text.toLowerCase())).toContain('matrix')
        })
    })

    it('after search with non-existing value, have empty search results area, Top rated aread and Popular area', () => {
        homePage.open()
        homePage.searchForMovie('ReallyinexistantstringforSearch')
        
        expect(homePage.SearchResultCollection.count()).toBe(0, 'after non-existing value is passed to search, no search results should be displayed')
        expect(homePage.TopRatedMoviesCollection.count()).toBe(20, 'after non-existing value is passed to search, TopRated area with 20 movies should be presented')
        expect(homePage.PopularMoviesCollection.count()).toBe(20, 'after non-existing value is passed to search, Popular area with 20 movies should be presented')
    })

    it('opens appropriate category', ()=> {
        homePage.open()
        homePage.categoriesLinksCollection.map(eachCat => {
            // Implicit wait is critical here, without it - won't work. Implicit wait defined in config (onPrepare).
            homePage.openCategory(eachCat)
            expect(eachCat.getText()).toContain($('app-genres h3').getText(), 'category name and title should match')
        })
    })
    
    it('opens "Upcoming movies" page', () => {
        homePage.open()
        homePage.openUpcomingMovies()
        let titleOfUpcomingMoviesSection = $('h3')
        browser.wait(EC.visibilityOf(titleOfUpcomingMoviesSection), 2000, 'title of opened "Upcoming movies" page should be shown ')
        expect(titleOfUpcomingMoviesSection.getText()).toContain('Up Coming Movies', 'title of opened Upcoming movies page, shoud be "Up Coming Movies"')
        let appearedClassOfUpcomingMoviesLink = $$('[id=navbar] li').first().getAttribute('class').then((text)=>{return text})
        expect(appearedClassOfUpcomingMoviesLink).toContain('active', '"Upcomin movies" link in the header should be highlighted after opening "Upcoming movies" page')
    })   

    it('opens "Popular series" page', () => {
        homePage.open()
        homePage.openPopularSeries()
        let titleOfPopularSeriesSection = $('h3')
        browser.wait(EC.visibilityOf(titleOfPopularSeriesSection), 2000, 'title of opened "Popular series" page, shoud be shown')
        expect(titleOfPopularSeriesSection.getText()).toContain('Popular Series', 'title of opened "Popular Series" page, shoud be "Popular Series"')
        let appearedClassOfPopularSeriesLink = $$('[id=navbar] li').last().getAttribute('class').then((text)=>{return text})
        expect(appearedClassOfPopularSeriesLink).toContain('active', '"Popular Series" link in the header should be highlighted after opening "Popular series" page')
    }) 

})