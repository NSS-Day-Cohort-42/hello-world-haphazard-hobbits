import { cityData, landmarksData, headsData } from "../DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML } from "../htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks } from "../lists.js"




// const displayButton = document.querySelector("button")
// displayButton.addEventListener()
const displayCzech = event => {
  const countryName = "czech"
  listCities(cityData(countryName), citiesHTML)
  listLandmarks(landmarksData(countryName), landmarksHTML)
  listHeadsOfState(headsData(countryName), headsOfStateHTML)
}

document.querySelector('button').addEventListener('click', displayCzech)