import { headsOfStateHTML } from "./HeadsOfStateHTML.js"
import { useHeadsOfState } from "./HeadsOfStateDataProvider.js"


export const listHeadsOfState = () => {
  const targetContent = document.querySelector(".lists")

  let allCitiesHTML = ''

  for (let city of useHeadsOfState()) {
    allCitiesHTML += headsOfStateHTML(city)
  }

  targetContent.innerHTML += `
    <ul class="heads__list">
      <h2>Heads of State:</h2>
      ${allCitiesHTML}
    </ul>
  `
}
