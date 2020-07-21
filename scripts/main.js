import { cityData, landmarksData, headsData } from "./DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML } from "./htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks, clearLists } from "./lists.js"




const czechPage = event => {
  displayPage("czech")  
}
const icelandPage = event => {
  displayPage("iceland")  
}
const irelandPage = event => {
  displayPage("ireland")  
}
const netherlandsPage = event => {
  displayPage("netherlands")  
}

const displayPage = (countryName) => {
  clearLists()
  listCities(cityData(countryName), citiesHTML)
  listLandmarks(landmarksData(countryName), landmarksHTML)
  listHeadsOfState(headsData(countryName), headsOfStateHTML)
}

document.querySelector('.netherlands__button').addEventListener('click', netherlandsPage)
document.querySelector('.ireland__button').addEventListener('click', irelandPage)
document.querySelector('.czech__button').addEventListener('click', czechPage)
document.querySelector('.iceland__button').addEventListener('click', icelandPage)


