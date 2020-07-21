import { useCities } from "../dataProvidor.js"
import { citiesHTML, landmarksHTML, headsOfStateHTML } from "../htmlCreator"
import { listCities, listHeadsOfState, listLandmarks } from "../lists.js"

const citiesData = useCities("iceland")

listCities(cityData, citiesHTML)
