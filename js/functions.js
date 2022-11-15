import { elements } from "./index.js"

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

export { renderImages }