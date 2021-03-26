export function fetchCharacters() {
  const urlCharacters = "https://rickandmortyapi.com/api/character";
  const main = document.querySelector("main");

  fetch(urlCharacters)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      data.results.forEach((characters) => {
        const section = document.createElement("section");
        section.classList.add("characters");
        main.append(section);
        const h2 = document.createElement("h2");
        h2.classList.add("name");
        h2.textContent = `${characters.name}`;
        const img = document.createElement("img");
        img.classList.add("avatar");
        img.src = characters.image;
        img.alt = `${characters.name}`;

        if (characters.status === "Alive") {
          section.style.backgroundColor = "#cdfbbb";
        } else if (characters.status === "Dead") {
          section.style.backgroundColor = "#ff2020";
        } else if (characters.status === "unknown") {
          section.style.backgroundColor = "#d4d0d0";
        }
        section.append(h2);
        section.append(img);
      });
    });
}

// export function filterCharacters() {
//   const filterDropdown = document.querySelector(".header__filter");
//   let url;

//   if (type === "alive") {
//     url = `${urlCharacters}?status=alive`;
//   } else if (type === "dead") {
//     url = `${urlCharacters}?status=dead`;
//   } else if (type === "unknown") {
//     url = `${urlCharacters}?status=unknown`;
//   }
//   return fetch(url).then((res) => res.json());
// }
