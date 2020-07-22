export const showCountryFlag = (countryName) => {
  document.querySelector(`.${countryName}`).classList.add("active")
}

export const removeAllFlags = () => {
  const countryItems = document.querySelectorAll(".country__item")
  countryItems.forEach(country => {
    country.classList.remove("active")
  })
}