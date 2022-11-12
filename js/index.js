// Flickr API details

const API_KEY =  "202f2249a79d50918b522455d5fe064c";
const SECRET = "d159eba140a81e16";
const BASE_URL = "https://api.flickr.com/services/rest?method=flickr.photos.search"
const EXTENSION_URL = "&per_page=20&format=json&nojsoncallback=1"

const elements = {
    searchInput: document.querySelector(".aside__search-input"),
    searchBtn: document.querySelector(".aside__search-btn"),
    main: document.querySelector("main")
}


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

elements.searchBtn.addEventListener('click', () => {
    const searchTerm = elements.searchInput.value
    if (searchTerm.length > 1) {
        makeAPICall(searchTerm)
    }
})

function renderImages(photoArr) {
    let acc = ``

    for (let i = 0; i < photoArr.length; i++) {
        const img = photoArr[i] 
        // const url = `farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
        const newUrl = `live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
        acc += `
        <img class="rendered-img" src="https://${newUrl}" index="${i}" />
        `
    }

    elements.main.innerHTML = acc
}