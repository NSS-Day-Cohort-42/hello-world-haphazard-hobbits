import {useHeads} from "./HeadsOfStateDataProvider.js"
import {headsOfStateHTML} from "./HeadsOfStateHTML.js"

export const listHeadsOfState = () => {
    const targetContent = document.querySelector(".lists")
  
    let allHeadsOfStateHTML = ''
  
    for (let head of useHeads()) {
      allHeadsOfStateHTML += headsOfStateHTML(head)
    }
  
    targetContent.innerHTML += `
      <ul class="heads__list">
        <h2>Heads of State:</h2>
        ${allHeadsOfStateHTML}
      </ul>
    `
  }