function checkCard (card){
    let title = card.$('h4 a').isPresent().then(()=>{title = true})
    let image = card.$('img').isPresent().then(()=>{image = true})
    let releaseDate = card.$('p').isPresent().then(()=>{releaseDate = true})
    let viewDetails = card.$('p a').isPresent().then(()=>{viewDetails = true})
    let raiting = card.$('small').isPresent().then(()=>{raiting = true})
    return title && image && releaseDate && viewDetails && raiting
}

describe('Movie-card', ()=>{

    fit('has all required fields', ()=>{
        browser.get('')

        let movieCard = $('movie-card')
        expect(checkCard(movieCard)).toBe(true, 'Oops, something went wrong ;)')
    })

    //Continue here - nothing works. Rewrite all the stuff - complete mess here, maybe start from scratch.
    // Try to use wait.all for function maybe, pay attention to return in functions (they are dummy now:))
})