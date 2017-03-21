let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage
let openCategoryByTitle = require('../../PageObjects/CategoryPage.js').openCategoryByTitle

describe('Category page', () => {
    
    // xit('Action is opened', () => {
    //     catPage.openCategoryByTitle('action')
    //     catPage.movieCardsOfOpenedCategory.map((movC)=> {
    //         catPage.openMovieCard(movC)
    //         browser.sleep(3000)
    // _________________________________________________________________________________
    //         // Stop writing complicated tests - this one is stopped by Sasha's advice
    //     })   
    //     //browser.navigate().back()
    // })

    // it('Action is opened and first movie has "action" category', ()=>{
    //     let page = openCategoryByTitle('action')
    //     browser.sleep(2000)
    //     page.openMovieCard(page.movieCardsOfOpenedCategory.get(0))
    //         expect(page.categoriesOfOpenedMovieCard.first().getText()).toBe('Action', 'First category of opened movie-card should be "Action"')
    //_________________________________________________________________________________
    //     this one test equal to next, but witout filter.  
    // })

    it('action is opened and first movie has "action" category inside itself', ()=>{
        let page = openCategoryByTitle('Action')
        page.openMovieCard(page.firstMovieCard)
        let result = page.categoriesOfOpenedMovieCard.filter((elem)=> {
            return elem.getText().then((text) => text === 'Action')
        })
        expect(result.first().getText()).toBe('Action', '"Action" category should be presented in list of categories into opened movie-card')
        //It is the same as previous, but with filter. 
    })

    it('western is opened and has 20 movie-cards', () => {
        let page = openCategoryByTitle('Western')
        let lastMovieCardIsShown = EC.visibilityOf(page.movieCardsOfOpenedCategory.last())
        browser.wait(lastMovieCardIsShown, 2000, 'Last movie-card of opened category should be shown')
        expect(page.movieCardsOfOpenedCategory.count()).toBe(20, 'Opened "Western" category should contain 20 movie-cards')
    })

    it('horror is opened and first movie-card has an image', () => {
        let page = openCategoryByTitle('Horror')
        let firstMovieCardIsShown = EC.visibilityOf(page.firstMovieCard)
        browser.wait(firstMovieCardIsShown, 2000, 'Last movie-card of opened category should be shown')
        expect(page.firstMovieCard.$('img').isDisplayed()).toBeTruthy('Image of first movie-card of "Horror" category should be shown')
        // ask Sasha how to handle error of isDisplayed, if it is thrown 
    })

    xit('music is opened and first movie-card has "description" area', () => {
        // continue here
    })



})