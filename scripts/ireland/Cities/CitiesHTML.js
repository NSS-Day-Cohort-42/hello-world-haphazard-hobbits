export const citiesHTML = (city) => {
    return `
    <li class="city__item">
        <a href="${city.link}">${city.name}</a>
    </li>
    `
}