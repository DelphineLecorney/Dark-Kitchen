let darkMode = document.querySelector(".darkmodeBtn");
let imgDarkMode = document.createElement("img");
imgDarkMode.src = "https://www.svgrepo.com/show/309493/dark-theme.svg";
darkMode.appendChild(imgDarkMode);
imgDarkMode.classList.add("btnDarkMode");

// create dishCard
function createDishCards(Collection, cardClass, titleClass, imgClass, styleClass, ingredientsClass, priceClass, buttonClass) {
  const libraryCard = document.querySelector(".libraryCard");

  Collection.forEach((element) => {
    const newCard = document.createElement("div");
    newCard.classList = cardClass;

    const ingredientsList = element.dishIngredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    const content = `
      <h2 class="${titleClass}">${element.dishTitle}</h2>
      <img src="${element.dishImg}" alt="${element.dishTitle}" class="${imgClass}" />
      <p class="${styleClass}">${element.dishStyle}</p>
      <ul class="${ingredientsClass}">${ingredientsList}</ul>
      <p class="${priceClass}">${element.dishPrice} €</p>
      <button class="${buttonClass}">Add</button>
    `;
      
    newCard.innerHTML += content;
    libraryCard.appendChild(newCard);
  });
}

createDishCards(dishCollection, "dishCard", "dishTitle", "dishImg", "dishStyle", "dishIngredients", "dishPrice", "btnAdd");

// --------------------------------------------------------------------------------------------------------------------------------

// Sélection du menu déroulant et du conteneur de résultats
const menuDeroulant = document.getElementById("tri");

function mettreAJourResultats() {
  // Suppression des résultats précédents
  const conteneurResultats = document.querySelector(".libraryCard");
  conteneurResultats.innerHTML = "";

  // Filtrage des objets en fonction de la sélection du menu déroulant
  const triSelectionne = menuDeroulant.value;
  let objetsFiltres;
  if (triSelectionne === "All styles") {
    objetsFiltres = dishCollection;
  } else {
    objetsFiltres = dishCollection.filter(
      (objet) => objet.dishStyle === triSelectionne
    );
  }
  // Affichage des résultats filtrés
  
  createDishCards(objetsFiltres, "dishCard", "dishTitle", "dishImg", "dishStyle", "dishIngredients", "dishPrice", "btnAdd");

    const addButtons = document.querySelectorAll(".btnAdd");

    addButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const title = button
          .closest(".dishCard")
          .querySelector(".dishTitle").textContent;
        const price = button
          .closest(".dishCard")
          .querySelector(".dishPrice").textContent;
        const item = {
          title,
          price,
        };
        cartItems.push(item);
      });
    });

    addBtnListeners(".btnAdd", "click", [afficherCartItems, displayCartTotal]);
}

menuDeroulant.addEventListener("change", mettreAJourResultats);

function addBtnListeners(selector, eventType, handlers) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    handlers.forEach((handler) => {
      element.addEventListener(eventType, handler);
    });
  });
}

// ----------------------------------------------------------------------------------------------------------------------------------

let cartItems = [];
let conteneurCart = document.querySelector(".listCart");

const addButtons = document.querySelectorAll(".btnAdd");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button
      .closest(".dishCard")
      .querySelector(".dishTitle").textContent;
    const price = button
      .closest(".dishCard")
      .querySelector(".dishPrice").textContent;
    const item = {
      title,
      price,
    };
    cartItems.push(item);
  });
});

addBtnListeners(".btnAdd", "click", [afficherCartItems, displayCartTotal]);

function deleteItem(index) {
  cartItems.splice(index, 1);
  afficherCartItems();
  displayCartTotal();
}

function afficherCartItems() {
  conteneurCart.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    let content = `
    <li class="cartItem">
    ${cartItems[i].title} ${cartItems[i].price}
    <input type="image" class="btnDelete" alt="delete" src="./img/cross-svgrepo-com.svg" onclick="deleteItem(${i})">
     </li>
     `
        ;
    conteneurCart.innerHTML += content;
  }
};

// ----------------------------------------------------------------------------------------------------------------------------------

let conteneurTotal = document.querySelector(".conteneurTotal");

function displayCartTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const priceStr = cartItems[i].price.replace(" €", "");
    const priceNum = Number.parseFloat(priceStr);
    total += priceNum;
  }
  console.log(`Total: ${total} €`);

  conteneurTotal.innerHTML = "";
  let content = `
        <li class="cartItem">Total : ${total.toFixed(2)} €</li>
        `;
  conteneurTotal.innerHTML += content;
}

//---------------------------------------------------------------------------

function toggleDarkMode() {
  let body = document.querySelector("body");
  if (body.classList.contains("Light")) {
    body.classList.toggle("Dark");
    body.classList.remove("Light");
  } else {
    body.classList.toggle("Light");
    body.classList.remove("Dark");
  }
}

let btnDark = document.querySelector(".btnDarkMode");
btnDark.addEventListener("click", toggleDarkMode);

//------------------------------------------------------------------

let copyright = document.querySelector("footer");
let content = `
<p class="copyrightTitle">Copyright© 2023 Dark Kitchen</p>
<p class="copyright">Alexandra Anthony Delphine Ethan  Nicolas_Cage Thomas </p>`;
copyright.innerHTML += content;

