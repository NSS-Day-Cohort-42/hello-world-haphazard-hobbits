import {useLandmarks} from "./LandmarksDataProvider.js"
import {landmarksHTML} from "./LandmarksHTML.js"

export const listLandmarks = () => {
    const targetContent = document.querySelector(".lists")

    let allLandmarksHTML = ''

    for (let landmark of useLandmarks()) {
        allLandmarksHTML += landmarksHTML(landmark)
    }

    targetContent.innerHTML += `
    <ul class="landmarks__list">
        <h2>Landmarks:</h2>
        ${allLandmarksHTML}
      </ul>
    `
}