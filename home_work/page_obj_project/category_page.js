let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage

describe('Category page', () => {
    let catPage = new CategoryPage
    
    fit('Action is opened', () => {
        catPage.openCategoryByTitle('action')
        catPage.movieCardsOfOpenedCategory.map((movC)=> {
            catPage.openMovieCard(movC)
            browser.sleep(3000)
        })
        
        
        //browser.navigate().back()
    })
})