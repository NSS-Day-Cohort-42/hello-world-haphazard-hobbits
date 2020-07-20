import { landmarksHTML } from "./LandmarksHTML.js"
import { useLandmarks } from "./LandmarksDataProvider.js"


export const listLandmarks = () => {
  const targetContent = document.querySelector(".lists")

  let allLandmarksHTML = ''

  for (let city of useLandmarks()) {
    allLandmarksHTML += landmarksHTML(city)
  }

  targetContent.innerHTML += `
    <ul class="landmarks__list">
      <h2>Landmarks:</h2>
      ${allLandmarksHTML}
    </ul>
  `
}
