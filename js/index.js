
import { makeAPICall } from "./api.js"

const elements = {
    searchInput: document.querySelector(".aside__search-input"),
    searchBtn: document.querySelector(".aside__search-btn"),
    main: document.querySelector("main")
}

elements.searchBtn.addEventListener('click', () => {
    const searchTerm = elements.searchInput.value
    if (searchTerm.length > 1) {
        makeAPICall(searchTerm)
    }
})

export { elements }
