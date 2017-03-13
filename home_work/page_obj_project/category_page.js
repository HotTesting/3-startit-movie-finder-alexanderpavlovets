let CategoryPage = require('../../PageObjects/CategoryPage.js').CategoryPage

describe('Category page', () => {
    let catPage = new CategoryPage
    
    fit('Action is opened', () => {
        catPage.openCategoryByTitle('action')
        browser.sleep(1000)
        $('movie-card h4 a').click()
        browser.sleep(1000)
        browser.navigate().back()
        browser.sleep(1000)
        // Finally ! It is opening !!!! It's alive !!!
    })
})