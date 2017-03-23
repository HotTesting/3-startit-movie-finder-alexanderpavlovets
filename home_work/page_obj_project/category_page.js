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

    it('action is opened and first movie has "action" category inside itself', ()=>{
        let page = openCategoryByTitle('Action')
        page.waitForFirstMovieCardOfOpenedCategory()
        page.openMovieCard(page.firstMovieCard)
        let result = page.categoriesOfOpenedMovieCard.filter((elem)=> {
            return elem.getText().then((text) => text === 'Action')
        })
        expect(result.first().getText()).toBe('Action', '"Action" category should be presented in list of categories into opened movie-card')
        //It is the same as previous, but with filter. 
    })

    it('western is opened and has 20 movie-cards', () => {
        let page = openCategoryByTitle('Western')
        page.waitForLastMovieCardOfOpenedCategory()
        expect(page.movieCardsOfOpenedCategory.count()).toBe(20, 'Opened "Western" category should contain 20 movie-cards')
    })

    it('horror is opened and first movie-card has an image', () => {
        let page = openCategoryByTitle('Horror')
        page.waitForFirstMovieCardOfOpenedCategory()
        let displ = page.firstMovieCard.$('img').isDisplayed().then(undefined, (err)=> false)
        expect(displ).toBeTruthy('Image of first movie-card of "Horror" category should be shown')
    })

    it('music is opened and first movie-card has "description" area with required elements', () => {
        let page = openCategoryByTitle('Music')
        page.waitForFirstMovieCardOfOpenedCategory()
        let title = page.firstMovieCard.$('.caption h4').isDisplayed().then(undefined, (err) => false)
        let releaseDate = page.firstMovieCard.$$('.caption p').first().isDisplayed().then(undefined, (err) => false)
        let viewDetailsLink = page.firstMovieCard.$$('.caption p').last().isDisplayed().then(undefined, (err) => false)
        let rating = page.firstMovieCard.$('small').isDisplayed().then(undefined, (err) => false)
        expect(title).toBeTruthy('Title should be shown for first movie-card')
        expect(releaseDate).toBeTruthy('"Release date" should be shown for first movie-card')
        expect(viewDetailsLink).toBeTruthy('"View details" link should be shown for first movie-card')
        expect(rating).toBeTruthy('Rating should be shown for first movie-card')
    })

    // fit('attempt to play video', ()=> {
    //     browser.get('https://movies-finder.firebaseapp.com/movie/263115')
    //     browser.switchTo().frame($('.embed-responsive-item').getWebElement())
    //     let buttonStart = $('.ytp-large-play-button.ytp-button')
    //     buttonStart.click()
    //     browser.sleep(8000)
    // _________________________________________________________________________________
    // Ask Sasha regarding iFrames, or come back here later. Now need to write tests, not investigate iFrames. 
    // })

    fit('action is opened, first actor from first movie card, is presented in first film of "Movies of actor" page', () => {
        let page = openCategoryByTitle('Action')
        page.waitForFirstMovieCardOfOpenedCategory()
        page.openMovieCard(page.firstMovieCard)
        let firstActorProfile = $('div.thumbnail')
        let nameOfFirstActor = firstActorProfile.$('h6 a').getText().then((text)=>{return text})
        firstActorProfile.$('a').click()
        page.waitForFirstMovieCardOfOpenedCategory() //wait for first Movie-card of "Movies of actor" page. 
        page.firstMovieCard.$('a').click()
        let castArea = $('div.row .is-flex')
        browser.wait(EC.visibilityOf(castArea), 2000, '"Cast" area should be shown')
        let actorsPresented = castArea.$$('a')
        let a = actorsPresented.getText().then((text)=>console.log(text))
        let b = nameOfFirstActor.then((text)=>console.log(text))
        // make a filter here, to interact with "a" and find there nameOfFirstActor (do not forget to take a text from first actor)
        
    })

})