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
let libraryCard = document.querySelector(".libraryCard");

dishCollection.forEach((element) => {
  //create new card
  let newCard = document.createElement("div");
  newCard.classList = "dishCard";
  let content = `      
  <h2 class="dishTitle">${element.dishTitle}</h2>
  <img src="${element.dishImg}" alt="${element.dishTitle}" class="dishImg" />
  <p class="dishStyle">${element.dishStyle}</p>
  <p class="dishIngredients">${element.dishIngredients}</p>
  <p class="dishPrice">${element.dishPrice}</p>
  <button class="btnAdd">Add</button>`;
  newCard.innerHTML += content;
  libraryCard.appendChild(newCard);
});

function createMenuDishStyle() {
  let header = document.querySelector("header");
  let menu = document.createElement("div").classList.add("menu");
  let content = `
    <ul class="menuItems">
  <li class="menuItem">Vegan</li>
  <li class="menuItem">Comfort Food</li>
  <li class="menuItem">Halal</li>
  <li class="menuItem">Healthy</li>
  <li class="menuItem">Nicolas Cage</li>
</ul>
    `;
  menu.innerHTML += content;
  header.appendChild(menu);
}

burgerMenu.addEventListener("click", createMenuDishStyle => {

    console.log("hello");

});
