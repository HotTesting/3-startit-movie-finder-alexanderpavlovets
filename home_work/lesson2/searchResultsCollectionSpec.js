function checkCard (card){
    let title = card.$('h4 a').isPresent()
    let image = card.$('img').isPresent()
    let releaseDate = card.$('p').isPresent()
    let viewDetails = card.$('p a').isPresent()
    let raiting = card.$('small').isPresent()
    return title && image && releaseDate && viewDetails && raiting
}

describe('Collection check', ()=> {
    let searchField = $('[name = searchStr]')
    let searchRequest = 'matrix'


    it('Check all cards in search test', ()=> {
        browser.get('')
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)

        let searchResultArea = $$('h3').get(0) // How i can get several elements here? 
        expect(searchResultArea.getText()).toBe('Search Results', 'Search results area should be selected to this test')

        let searchResultMovieCards = searchResultArea.$$('movie-card')
        
        searchResultMovieCards.map((card, index) => {
            expect(checkCard(card)).toBe(true, index + ' Movie card isn\'t contain all required values')
        }) //This one isn't working ... seems like this. Ask Sasha. 

    })

})