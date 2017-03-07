function checkCard (card){
    expect(card.$('h4 a').isPresent()).toBe(true, 'title should be displayed')
    expect(card.$('img').isPresent()).toBe(true, 'image should be displayed')
    expect(card.$('p').isPresent()).toBe(true, 'release date should be presented')
    expect(card.$('p a').isPresent()).toBe(true, 'view details link should be presented')
    expect(card.$('small').isPresent()).toBe(true, 'raiting should be presented')
    
}

describe('Movie-cards', ()=>{

    it('on landing page all have 5 required fields', ()=>{
        browser.get('')
        browser.sleep(2000)
        //$$('movie-card').map(()=>checkCard())  ask Sasha what is wrong here, how to write it short?

        let allMovieCards = $$('movie-card')
        allMovieCards.map((elem)=> checkCard(elem))
    })

    // it('first one has all required fields', ()=>{
    //     browser.get('')

    //     let movieCard = $('movie-card')
    //     checkCard(movieCard)
    // })


    // it('special scenario to test tests. Here movie-card without 1 element ', ()=> {
    //     browser.get('')
    //     $('[name = searchStr]').sendKeys('Shrek’s Yule Log')
    //     element(by.buttonText('Go!')).click()
    //     browser.sleep(2000)
    //     checkCard($('movie-card'))
    // })

})