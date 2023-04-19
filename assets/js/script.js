//Insert Svg Header

// let burgerMenu = document.querySelector(".menuBtn");
// let imgBurger = document.createElement("img");
// imgBurger.src =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";
// burgerMenu.appendChild(imgBurger);
// burgerMenu.classList.add("burgerImg")

// let darkMode = document.querySelector(".darkmodeBtn");
// let imgDarkMode = document.createElement("img");
// imgDarkMode.src = "https://www.svgrepo.com/show/309493/dark-theme.svg";
// darkMode.appendChild(imgDarkMode);
// imgDarkMode.classList.add("btnDarkMode");

// create dishCard
const libraryCard = document.querySelector(".libraryCard");

dishCollection.forEach((element) => {
    const newCard = document.createElement("div");
    newCard.classList = "dishCard";

    const ingredientsList = element.dishIngredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("");

    const content = `
<h2 class="dishTitle">${element.dishTitle}</h2>
<img src="${element.dishImg}" alt="${element.dishTitle}" class="dishImg" />
<p class="dishStyle">${element.dishStyle}</p>
<ul class="dishIngredients">${ingredientsList}</ul>
<p class="dishPrice">${element.dishPrice} €</p>
<button class="btnAdd">Add</button>
`;

    newCard.innerHTML += content;
    libraryCard.appendChild(newCard);
});

// --------------------------------------------------------------------------------------------------------------------------------

// Sélection du menu déroulant et du conteneur de résultats
const menuDeroulant = document.getElementById("tri");
const conteneurResultats = document.querySelector(".libraryCard");

function mettreAJourResultats() {
    // Suppression des résultats précédents
    conteneurResultats.innerHTML = "";

    // Filtrage des objets en fonction de la sélection du menu déroulant
    const triSelectionne = menuDeroulant.value;
    const objetsFiltres = dishCollection.filter(objet => objet.dishStyle === triSelectionne);

    // Affichage des résultats filtrés
    objetsFiltres.forEach(element => {
        const newCard = document.createElement("div");
        newCard.classList = "dishCard";

        const ingredientsList = element.dishIngredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");

        const content = `
  <h2 class="dishTitle">${element.dishTitle}</h2>
  <img src="${element.dishImg}" alt="${element.dishTitle}" class="dishImg" />
  <p class="dishStyle">${element.dishStyle}</p>
  <ul class="dishIngredients">${ingredientsList}</ul>
  <p class="dishPrice">${element.dishPrice} €</p>
  <button class="btnAdd">Add</button>
  `;

        newCard.innerHTML += content;
        libraryCard.appendChild(newCard)
    });
}

menuDeroulant.addEventListener("change", mettreAJourResultats);

// ----------------------------------------------------------------------------------------------------------------------------------