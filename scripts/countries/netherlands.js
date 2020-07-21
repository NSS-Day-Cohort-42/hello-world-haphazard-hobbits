import { cityData, landmarksData, headsData } from "../DataProvider.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML } from "../htmlCreator.js"
import { listCities, listHeadsOfState, listLandmarks } from "../lists.js"

const countryName = "netherlands"
listCities(cityData(countryName), citiesHTML)
listLandmarks(landmarksData(countryName), landmarksHTML)
listHeadsOfState(headsData(countryName), headsOfStateHTML)