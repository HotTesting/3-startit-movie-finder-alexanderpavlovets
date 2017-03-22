class HomePage {
    constructor() {
        this.URL = ''
        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!'))
        
        this.topRatedMoviesCollection = element(by.cssContainingText('movies > h3', 'Top Rated Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card')
        this.popularMoviesCollection = element(by.cssContainingText('movies > h3', 'Popular Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card')
        this.searchResultsCollection = element(by.cssContainingText('movies h3', 'Search Results')).element(by.xpath('following-sibling::div[1]')).$$('movie-card')
        this.categoriesLinksCollection = $$('ul.nav-stacked a')
        this.headerNavigationBar = $('[id=navbar]')
        this.upcomingMoviesHeaderLink = $$('[id=navbar] a').first()
    }

    open() {
        browser.get(this.URL)
    }

    getTopRatedMoviesCollection() {
        let firstElemOfTopRatedShown = EC.visibilityOf(
            element(by.cssContainingText('movies > h3', 'Top Rated Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstElemOfTopRatedShown, 2000, 
            '"Top rated" is area, that always should have 20 movies. Wait for first of them during 3 sec. failed.')
        return this.topRatedMoviesCollection
    }

    getPopularMoviesCollection() {
        let firstElemOfPopularShown = EC.visibilityOf(
            element(by.cssContainingText('movies > h3', 'Popular Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstElemOfPopularShown, 2000, 
            '"Popular Movies" is area, that always should have 20 movies. Wait for first of them during 3 sec. failed.')
        return this.popularMoviesCollection
    }

    getSearchResultCollection() {
        let firstElemOfSearchResutsShown = EC.visibilityOf(
            element(by.cssContainingText('movies h3', 'Search Results')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstElemOfSearchResutsShown, 2000, 
            'wait won\'t fall anyway because of then, i need a collection even empty').then(undefined, ()=> { })

        return this.searchResultsCollection
    }

    searchForMovie(searchRequest) {
        this.searchField.sendKeys(searchRequest)
        this.goButton.click()
    }

    openCategory(category) {
        browser.wait(EC.visibilityOf(category), 1000, category + 'category should be shown')
        category.click()
    }

    openUpcomingMovies() {
        let headerNavBarIsShown = EC.visibilityOf(this.headerNavigationBar)
        browser.wait(headerNavBarIsShown, 2000, 'Header navigation bar should be shown, in order to open "Upcoming movies" page')
        this.upcomingMoviesHeaderLink.click()
    }
}

module.exports.HomePage = HomePage  