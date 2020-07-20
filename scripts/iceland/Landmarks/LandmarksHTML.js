export const landmarksHTML = (landmark) => {
  return `
  <li class="landmark__item">
    <a href="${landmark.link}">${landmark.name}</a>
  </li>
  `
}