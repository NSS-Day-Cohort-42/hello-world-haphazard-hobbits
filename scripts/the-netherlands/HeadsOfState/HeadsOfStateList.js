import { headsHTML } from "./HeadsOfStateHTML.js"
import { useHeads } from "./HeadsOfStateDataProvider.js"

export const listHeads = () => {
  const targetContent = document.querySelector(".heads")

  let allHeadsHTML = ""

  for (let head of useHeads()) {
    allHeadsHTML += headsHTML(head)
  }

  targetContent.innerHTML += `
    <ul class="heads__list">
      <h2>Heads Of State:</h2>
      ${allHeadsHTML}
    </ul>
  `
}
