describe('Suite name', ()=> {

    it('Test name', ()=> {
        browser.get('')

        //searchField is elementFinder object
        let searchField = $("input[name='searchStr']")

        let searchRequest = 'The Lord'
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()

        browser.sleep(3000)

        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        
        expect(title).toContain(searchRequest, 'Error message here. Should be described as ER. ')
    })
})