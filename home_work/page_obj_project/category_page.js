let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage
let openCategoryByTitle = require('../../PageObjects/CategoryPage.js').openCategoryByTitle

describe('Category page', () => {

    fit('Action is opened', () => {

        let page = openCategoryByTitle('action')
        browser.sleep(3000)
        page.movieCardsOfOpenedCategory.map((movC, ind)=> {
            page.openMovieCard(ind)
            browser.sleep(3000)
            openCategoryByTitle('action')
            browser.sleep(3000)
        })
        
        
        //browser.navigate().back()
    })
})