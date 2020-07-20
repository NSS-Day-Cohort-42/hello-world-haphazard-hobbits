export const headsOfStateHTML = (headOfState) => {
  return `
    <li class="heads__item">
      <a href="${headOfState.link}"><div class="bold__text">${headOfState.title}</div>${headOfState.name}</a>
    </li>
    `
}
