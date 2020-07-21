export const listCities = (dataArray, HTMLCreator) => {
  const targetContent = document.querySelector(".lists")

  let allCitiesHTML = ""

  for (let city of dataArray) {
    allCitiesHTML += HTMLCreator(city)
  }

  targetContent.innerHTML += `
    <ul class="cities__list">
      <h2>Cities:</h2>
      ${allCitiesHTML}
    </ul>
  `
}

export const listHeadsOfState = (dataArray, HTMLCreator) => {
  const targetContent = document.querySelector(".lists")

  let allHeadsHTML = ''

  for (let head of dataArray) {
    allHeadsHTML += HTMLCreator(head)
  }

  targetContent.innerHTML += `
    <ul class="heads__list">
      <h2>Heads of State:</h2>
      ${allHeadsHTML}
    </ul>
  `
}

export const listLandmarks = (dataArray, HTMLCreator) => {
  const targetContent = document.querySelector(".lists")

  let allLandmarksHTML = ""

  for (let landmark of dataArray) {
    allLandmarksHTML += HTMLCreator(landmark)
  }

  targetContent.innerHTML += `
      <ul class="landmarks__list">
        <h2>Landmarks:</h2>
        ${allLandmarksHTML}
      </ul>
    `
}