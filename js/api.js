import { renderImages } from "./functions.js"


const API_KEY =  "202f2249a79d50918b522455d5fe064c";
const SECRET = "d159eba140a81e16";
const BASE_URL = "https://api.flickr.com/services/rest?method=flickr.photos.search"
const EXTENSION_URL = "&per_page=20&format=json&nojsoncallback=1"


async function makeAPICall(searchedWord) {

    let fullURL = BASE_URL + "&api_key=" + API_KEY + "&text=" + searchedWord + EXTENSION_URL

    try {
        const response = await fetch(fullURL)
        const data = await response.json()
        const photoArr = data.photos.photo
        console.log(photoArr[0])

        renderImages(photoArr)
    } catch (error) {
        console.log(error)
    }
    
}

export { makeAPICall }