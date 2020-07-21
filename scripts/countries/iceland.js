import { cityData } from "../DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML } from "../htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks } from "../lists.js"

const citiesData = cityData("iceland")

listCities(citiesData, citiesHTML)
