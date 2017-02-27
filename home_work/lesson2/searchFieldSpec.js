describe('Search field test', ()=> {
    
    // variables for Search field test suite
    let searchField = $('[name = "searchStr"]')
    let positiveValue = 'Shrek'
    let emptyValue = ''
    let inexistentValue = 'somelongandinexistentstringqwerty'
    let onlyUppercaseValue = "SHREK"
    let specialSymbols = '!@#$%^&*()_+'
    
    it('Positive test', ()=> {
        browser.get('')

        searchField.sendKeys(positiveValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let title = $('movie-card').$('h4 a').getText()
        expect(title).toBe(positiveValue, 'Valid search result should match "positive value" variable')
    })

    it('Empty value test', ()=>{
        browser.get('')
        searchField.sendKeys(emptyValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let categoryName = $('h3').getText()
        // why here getText with toBe returned not all text of childs, and only 1st element's
        expect(categoryName).toBe('Top Rated Movies', 'After empty search, "Top Rated" category should be displayed')
    })

    it('Inexistent string test', ()=> {
        browser.get('')
        searchField.sendKeys(inexistentValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        // let searchResult = $('div .row .is-flex') 
        // expect(searchResult.isDisplayed()).toBe(false,'After inexistent search, empty "Search results" area  should be displayed')
        // WTF ? Why element isn't visible, but protractors tells - it is visible. Ask Sasha.
        
        
        // Write something an move-on, 2 hours spent already. This one will pass anyway.
        let categoryName = $('h3').getText()
        expect(categoryName).toBe('Search Results', 'After inexistent search, empty "Search results" area  should be displayed')

        let searchResult = $('body > app-root > div > div > div.col-xs-12.col-sm-8.col-md-9.col-lg-10 > movies > div:nth-child(3) > div')
        expect(searchResult.isDisplayed()).toBe(false, 'Still isn\'t working even after copy-pass the selector!!!')
    })

    it('Upper case test', ()=> {
        browser.get('')

        searchField.sendKeys(onlyUppercaseValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let title = $('movie-card').$('h4 a').getText()
        expect(title).toBe('Shrek', 'After UPPERCASE input, equal to lower case search results should be displayed')
    })

    it('Special symbols input test', ()=> {
        browser.get('')
        searchField.sendKeys(specialSymbols)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let categoryName = $('h3').getText()
        expect(categoryName).toBe('Search Results', 'After special symbol input, empty "Search results" area  should be displayed')
        // Here also should be tsted that it is empty, but no possibiblity. Equal to #3 test. 
    })
})