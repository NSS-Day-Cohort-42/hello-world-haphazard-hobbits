export const headsHTML = (head) => {
      return `
        <li class="head__item">
          <a href="${head.link}">${head.name}</a>
        </li>
        `
    }