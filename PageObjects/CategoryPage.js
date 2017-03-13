class CategoryPage {
    constructor(categoryTitle, url) {
        this.categoryTitle = categoryTitle
        this.URL = url
    }

    open(){
        browser.get(this.URL)
    }

    openCategoryByTitle(category){
        let  categoryObject = categoriesList[category.toLowerCase()]
        return new CategoryPage(categoryObject.title, categoryObject.url).open()
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

module.exports.CategoryPage = CategoryPage