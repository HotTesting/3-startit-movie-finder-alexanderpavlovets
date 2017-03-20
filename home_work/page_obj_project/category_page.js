let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage
let openCategoryByTitle = require('../../PageObjects/CategoryPage.js').openCategoryByTitle

describe('Category page', () => {
    
    // xit('Action is opened', () => {
    //     catPage.openCategoryByTitle('action')
    //     catPage.movieCardsOfOpenedCategory.map((movC)=> {
    //         catPage.openMovieCard(movC)
    //         browser.sleep(3000)
    //         // Stop writing complicated tests 
    //     })   
    //     //browser.navigate().back()
    // })

    fit('Action is opened and first movie has "action" category', ()=>{
        let page = openCategoryByTitle('action')
        page.openMovieCard(page.movieCardsOfOpenedCategory.get(0))
        browser.sleep(3000)
    })

})