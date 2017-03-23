class CategoryPage {
    constructor(categoryTitle, url) {
        this.categoryTitle = categoryTitle
        this.URL = url
        this.movieCardsOfOpenedCategory = $$('movie-card')
        this.categoriesOfOpenedMovieCard = $$('a.label.label-info')
    }

    get firstMovieCard(){
        return this.movieCardsOfOpenedCategory.first()
    }

    open(){
        browser.get(this.URL)
    }

    openMovieCard(movieCard){
       movieCard.$('h4 a').click()
       let titleOfOpenedMovieCardShown = EC.visibilityOf($$('h2').first())
       browser.wait(titleOfOpenedMovieCardShown, 2000, 'Title of opened movie-card should be displayed')
    }

    waitForFirstMovieCardOfOpenedCategory(){
        let firstMovieCardIsShown = EC.visibilityOf(this.firstMovieCard)
        browser.wait(firstMovieCardIsShown, 2000, 'First movie-card of opened category should be shown')
    }

    waitForLastMovieCardOfOpenedCategory(){
        let lastMovieCardIsShown = EC.visibilityOf(this.movieCardsOfOpenedCategory.last())
        browser.wait(lastMovieCardIsShown, 2000, 'Last movie-card of opened category should be shown')
    }


}

let categoriesList = {
    'action': {title: 'Action',
                url: 'genres/28/Action'},
    'adventure': {title: 'Adventure',
                url: 'genres/12/Adventure'},
    'animation': {title: 'Animation',
                url: 'genres/16/Animation'},
    'comedy': {title: 'Comedy',
                url: 'genres/35/Comedy'},
    'crime': {title: 'Crime',
                url: 'genres/80/Crime'},
    'documentary': {title: 'Documentary',
                url: 'genres/99/Documentary'},
    'drama': {title: 'Drama',
                url: 'genres/18/Drama'},
    'family': {title: 'Family',
                url: 'genres/10751/Family'},
    'fantasy': {title: 'Fantasy',
                url: 'genres/14/Fantasy'},
    'history': {title: 'History',
                url: 'genres/36/History'},
    'horror': {title: 'Horror',
                url: 'genres/27/Horror'},
    'music': {title: 'Music',
                url: 'genres/10402/Music'},
    'mystery': {title: 'Mystery',
                url: 'genres/9648/Mystery'},
    'romance': {title: 'Romance',
                url: 'genres/10749/Romance'},
    'science fiction': {title: 'Science Fiction',
                url: 'genres/878/Science%20Fiction'},
    'tv movie': {title: 'TV movie',
                url: 'genres/10770/TV%20Movie'},
    'thriller': {title: 'Thriller',
                url: 'genres/53/Thriller'},
    'war': {title: 'War',
                url: 'genres/10752/War'},
    'western': {title: 'Western',
                url: 'genres/37/Western'}
    
}

function openCategoryByTitle(category) {
        let  categoryObject = categoriesList[category.toLowerCase()]
        let page = new CategoryPage(categoryObject.title, categoryObject.url)
        page.open()
        return page
    }

module.exports.CategoryPage = CategoryPage
module.exports.openCategoryByTitle = openCategoryByTitle