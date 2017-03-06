describe('Landing page', ()=>{

    it('contains header with 3 elements', ()=>{
        browser.get('')
        let movieFinderLogo = $('a.navbar-brand').getText()
        expect(movieFinderLogo).toBe('Movies Finder', '1st element should be "Movies Finder" link')

        let upcomingMoviesInHeader = $$('.nav.navbar-nav li').get(0).getText()
        expect(upcomingMoviesInHeader).toBe('Upcoming Movies', '2nd element should be "Upcoming movies" link')

        let popularSeriesInHeader = $$('.nav.navbar-nav li').get(1).getText()
        expect(popularSeriesInHeader).toBe('Popular Series', '3rd element should be "Popular Series')
    })

    it('contains search area with fill-in field', ()=>{
        browser.get('')
        let searchFieldTitle = $('.jumbotron p').getText()
        expect(searchFieldTitle).toContain('Search for a movie using the form below', 'search area title should be "Search for a movie using the form below')

        let searchField = $('[name = searchStr]')
        expect(searchField.isDisplayed()).toBe(true, 'fill-in field should be presented') //ask Sasha how to write an error here with toBeTruthy matcher
    })

    it('contains "Movies Category" left-hand menu with 19 categories', ()=>{
        browser.get('')
        let categoriesMenuTitle = $('.panel-heading').getText()
        expect(categoriesMenuTitle).toBe('Movies Category', 'Categories menu should have "Movies Category" title')

        let quantityOfCategories = $$('a.list-group-item').count()
        expect(quantityOfCategories).toEqual(19, 'Categories menu should have 19 categories')
    })

    it('contains 2 sections - "TopRated" and "Popular"', ()=>{
        browser.get('')
        let topRatedAreaName = $$('h3').get(0).getText()
        expect(topRatedAreaName).toBe('Top Rated Movies', 'First section should have "Top rated movies" name')
        
        let popularAreaName = $$('h3').get(1).getText()
        expect(popularAreaName).toBe('Popular Movies', 'Second section should have "Popular Movies" name')
    })


})