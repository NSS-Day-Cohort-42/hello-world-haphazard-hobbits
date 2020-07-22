import { cityData, landmarksData, headsData, imageData } from "./DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML, mainImageHTML } from "./htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks, clearLists, listImage } from "./lists.js"




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
  removeAllFlags()
  showCountryFlag(countryName)
  clearLists()
  listCities(cityData(countryName), citiesHTML)
  listLandmarks(landmarksData(countryName), landmarksHTML)
  listHeadsOfState(headsData(countryName), headsOfStateHTML)
  listImage(imageData(countryName), mainImageHTML)
}

// Add event listeners to render page on click
document.querySelector('.netherlands__button').addEventListener('click', netherlandsPage)
document.querySelector('.ireland__button').addEventListener('click', irelandPage)
document.querySelector('.czech__button').addEventListener('click', czechPage)
document.querySelector('.iceland__button').addEventListener('click', icelandPage)


// Add event listener to change header color
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('.button--color').style.color='goldenrod';    
})

const showCountryFlag = (countryName) => {
  document.querySelector(`.${countryName}`).classList.add("active")
}

const removeAllFlags = () => {
  const countryItems = document.querySelectorAll(".country__item")
  countryItems.forEach(country => {
    country.classList.remove("active")
  })
}

