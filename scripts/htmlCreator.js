export const citiesHTML = (city) => {
  return `
    <li class="city__item">
      <a href="${city.link}">${city.name}</a>
    </li>
    `
}

export const landmarksHTML = (landmark) => {
  return `
      <li class="landmark__item">
        <a href="${landmark.link}">${landmark.name}</a>
      </li>
      `
}

export const headsOfStateHTML = (headOfState) => {
  return `
  <li class="heads__item">
    <a href="${headOfState.link}"><strong>${headOfState.title} </strong>${headOfState.name}</a>
  </li>
  `
}
