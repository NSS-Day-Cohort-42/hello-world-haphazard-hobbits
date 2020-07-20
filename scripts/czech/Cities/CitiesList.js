import { useCities } from "./CitiesDataProvider.js"
import { citiesHtml } from "./CitiesHTML.js"

export const citiesList = () => {
  const targetContent = document.querySelector(".lists")
  const allCitiesHtml = useCities().map((cities) => citiesHtml(cities))

  targetContent.innerHTML = +`
    <ul class="cities__list">
    <h2>Cities:</h2>
    ${allCitiesHtml}
    </ul>
  `
}
