import {useHeadsOfState} from "./HeadsOfStateDataProvider.js"
import {headsOfStateHTML} from "./HeadsOfStateHTML.js"

export const listHeadsOfState = () => {
    const targetContent = document.querySelector(".lists")
  
    let allHeadsHTML = ''
  
    for (let head of useHeadsOfState()) {
      allHeadsHTML += headsOfStateHTML(head)
    }
  
    targetContent.innerHTML += `
      <ul class="heads__list">
        <h2>Heads of State:</h2>
        ${allHeadsHTML}
      </ul>
    `
  }