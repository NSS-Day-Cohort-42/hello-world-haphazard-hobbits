export const headsOfStateHTML = (headOfState) => {
    return `
    <li class="heads__item">
        <a href="${headOfState.link}">
        <strong>${headOfState.title}: </strong>${headOfState.name}</a>
    </li>
    `
}