import {useCities} from "./CitiesDataProvider.js"
import {citiesHTML} from "./CitiesHTML.js"

export const listCities = () => {
    const targetContent = document.querySelector(".lists")
  
    let allCitiesHTML = ''
  
    for (let city of useCities()) {
      allCitiesHTML += citiesHTML(city)
    }
  
    targetContent.innerHTML += `
      <ul class="cities__list">
        <h2>Cities:</h2>
        ${allCitiesHTML}
      </ul>
    `
  }