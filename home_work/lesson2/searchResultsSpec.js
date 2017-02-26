function checkCard (card){
    let title = card.$('h4 a').isPresent()
    let image = card.$('img').isPresent()
    let releaseDate = card.$('p').isPresent()
    let viewDetails = card.$('p a').isPresent()
    let raiting = card.$('small').isPresent()
    return title && image && releaseDate && viewDetails && raiting
}

describe('Check first card test', ()=>{
    let searchField = $('[name = searchStr]')
    let searchRequest = 'matrix'

    it('First card with all fields', ()=> {
        browser.get('')
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)

        movieCard = $('movie-card')
        expect(checkCard(movieCard)).toBe(true, 'Movie card should contain all required fields' )
    })

    //Continue: need to find all elements - create an collection, and check every element from the colection. 
    // Try to understand why "more than 1 element found" in the log - i think it shouldn't be like that

})