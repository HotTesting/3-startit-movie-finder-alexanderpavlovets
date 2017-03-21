let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage
let openCategoryByTitle = require('../../PageObjects/CategoryPage.js').openCategoryByTitle

describe('Category page', () => {
    
    // xit('Action is opened', () => {
    //     catPage.openCategoryByTitle('action')
    //     catPage.movieCardsOfOpenedCategory.map((movC)=> {
    //         catPage.openMovieCard(movC)
    //         browser.sleep(3000)
    //         // Stop writing complicated tests - this one is stopped by Sasha's advice
    //     })   
    //     //browser.navigate().back()
    // })

    it('Action is opened and first movie has "action" category', ()=>{
        let page = openCategoryByTitle('action')
        page.openMovieCard(page.movieCardsOfOpenedCategory.get(0))
            expect(page.categoriesOfOpenedMovieCard.first().getText()).toBe('Action', 'Bla bla bla')

        // this is working but like shit! Rewrite Filter somehow and use it ! 
    })

    fit('Action is opened and first movie has "action" category filter', ()=>{
        let page = openCategoryByTitle('action')
        page.openMovieCard(page.movieCardsOfOpenedCategory.get(0))
        let result = page.categoriesOfOpenedMovieCard.filter((elem)=> {
            elem.getText() === 'Action'
        })
        expect(result.first().getText()).toBe('Action', 'Oops, something went wrong')
        
    })

})