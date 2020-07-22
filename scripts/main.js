import { cityData, landmarksData, headsData, imageData } from "./DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML, mainImageHTML } from "./htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks, clearLists, listImage } from "./lists.js"
import { removeAllFlags, showCountryFlag } from "./flags.js"



const displayPage = (countryName) => {
  removeAllFlags()
  showCountryFlag(countryName)
  clearLists()
  listCities(cityData(countryName), citiesHTML)
  listLandmarks(landmarksData(countryName), landmarksHTML)
  listHeadsOfState(headsData(countryName), headsOfStateHTML)
  listImage(imageData(countryName), mainImageHTML)
}

// Add event listeners to render page on click
document.querySelector('.netherlands__button').addEventListener('click', () => displayPage("netherlands"))
document.querySelector('.ireland__button').addEventListener('click', () => displayPage("ireland"))
document.querySelector('.czech__button').addEventListener('click', () => displayPage("czech"))
document.querySelector('.iceland__button').addEventListener('click', () => displayPage("iceland"))


// Add event listener to change header color
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('.button--color').style.color='goldenrod';    
})



