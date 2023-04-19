//Insert Svg Header

let burgerMenu = document.querySelector(".menuBtn");
let imgBurger = document.createElement("img");
imgBurger.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";
burgerMenu.appendChild(imgBurger);

let darkMode = document.querySelector(".darkmodeBtn");
let imgDarkMode = document.createElement("img");
imgDarkMode.src = "https://www.svgrepo.com/show/309493/dark-theme.svg";
darkMode.appendChild(imgDarkMode);

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
<p class="dishPrice">${element.dishPrice}</p>
<button class="btnAdd">Add</button>
`;

  newCard.innerHTML += content;
  libraryCard.appendChild(newCard);
});

function createMenuDishStyle() {
  let header = document.querySelector("header");
  let menu = document.createElement("div").classList.add("menu");
  let content = `
  <label for="tri">Style :</label>
  <select id="tri">
  <option value="Vegan">Vegan</option>
  <option value="ComfortFood">Comfort Food</option>
  <option value="Halal">Halal</option>
  <option value="Healthy">Healthy</option>
  <option value="NicolasCage">Nicolas Cage</option>
  </select>
    `;
  menu.innerHTML += content;
  header.appendChild(menu);
}

burgerMenu.addEventListener("click", (createMenuDishStyle) => {
  console.log("menu");
});
