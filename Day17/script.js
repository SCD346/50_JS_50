const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c74068788fbc8ed9b09205823b49f82d&page-1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c74068788fbc8ed9b09205823b49f82d&query="'

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
