describe('Suite name', ()=> {

    it('Test name', ()=> {
        browser.get('')

        //searchField is elementFinder object
        let searchField = $("input[name='searchStr']")

        let searchRequest = 'The Lord'
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()

        browser.sleep(5000)

        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        
        expect(title).toContain(searchRequest, 'Error message here. Should be described as ER. ')
    })

    // home work for lesson 1 starts here only, code above - just copy-pasted from classwork 

    it('Very first test case', ()=>{
        browser.get('')

        // let mainMenu = $("body > app-root > div > div > div.col-xs-12.col-sm-4.col-md-3.col-lg-2 > nav") //can't handle short selectors - lesson 2 is needed :)

        let action = $("body > app-root > div > div > div.col-xs-12.col-sm-4.col-md-3.col-lg-2 > nav > div.collapse.navbar-collapse.movies-cat > ul > a:nth-child(1)")

        action.click()

    })
        browser.sleep(3000)
})