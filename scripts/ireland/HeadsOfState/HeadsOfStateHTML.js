export const headsOfStateHTML = (head) => {
    return `
    <li class="heads__item">
        <a href="${head.link}">
        <strong>${head.title}: </strong>${head.name}</a>
    </li>
    `
}