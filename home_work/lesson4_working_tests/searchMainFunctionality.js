describe('Search field', ()=>{
    
    // variables for Search field test suite
    let searchField = $('[name = "searchStr"]')
    let validValue = 'Shrek'
    let emptyValue = ''
    let nonexistentValue = 'somelongandinexistentstringqwerty'
    let onlyUppercaseValue = "SHREK"
    let specialSymbols = '!@#$%^&*()_+'

    it('returns first movie-card with title, that contains valid request ', ()=>{
        browser.get('')
        searchField.sendKeys(validValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let title = $('movie-card').$('h4 a').getText()
        expect(title).toContain(validValue, 'Title of first founded movie-card should contain value of valid request')
    })

    it('does nothing after "empty" request', ()=>{
        browser.get('')
        searchField.sendKeys(emptyValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let categoryName = $('h3').getText()
        expect(categoryName).toBe('Top Rated Movies', '"Top rated" category still should be displayed after empty search')
    })

    it('returns empty "Search results" area, after request with nonexistent value', ()=> {
        browser.get('')
        searchField.sendKeys(nonexistentValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        expect($$('.row.is-flex').first().$('movie-card').isPresent()).toBe(false, 'No movie-cards should be presented after nonexistent search request')
        // here ask Sasha how to replace with toBeFalthy (но с выведением ошибки)
    })

    it('returns appropriate movie-card, independently of UPPER/lower case value of request', ()=> {
        browser.get('')

        searchField.sendKeys(onlyUppercaseValue)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        let title = $('movie-card').$('h4 a').getText()
        expect(title).toBe('Shrek', 'After UPPERCASE input, equal to lower case search results should be displayed')
    })

    it('returns empty "Search results" area, after request with special symbols-only value', ()=> {
        browser.get('')
        searchField.sendKeys(specialSymbols)
        element(by.buttonText('Go!')).click()
        browser.sleep(2000)
        expect($$('.row.is-flex').first().$('movie-card').isPresent()).toBe(false, 'No movie-cards should be presented after special symbols-only search request') 
    })
})