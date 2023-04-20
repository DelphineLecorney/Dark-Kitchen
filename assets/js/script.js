let darkMode = document.querySelector(".darkmodeBtn");
let imgDarkMode = document.createElement("img");
imgDarkMode.src = "https://www.svgrepo.com/show/309493/dark-theme.svg";
darkMode.appendChild(imgDarkMode);
imgDarkMode.classList.add("btnDarkMode");

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------
// Nos fonctions
// -------------------------------------------------------------------------

// Fonction qui va créer des cards en fonction des objets d'une collection
function createDishCards(Collection) {
  const libraryCard = document.querySelector(".libraryCard");

  Collection.forEach((element) => {
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
}

// Fonction qui met à jour le conteneur des cards menus
function mettreAJourResultats() {
  // Suppression des résultats précédents
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
  
  createDishCards(objetsFiltres);

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

// Fonction qui permet d'ajouter des eventListeners sur des boutons 
// en prenant en 1erparamètre un selecteur représentant une class 
// en 2eme param le type d'évènements
// en 3eme param un tableau de fonction à associer
function addBtnListeners(selector, eventType, handlers) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    handlers.forEach((handler) => {
      element.addEventListener(eventType, handler);
    });
  });
}

// Fonction qui va supprimer un élément du panier en utilisant son index
// Elle prend en paramètre l'index de l'élément à supprimer.
function deleteItem(index) {
  cartItems.splice(index, 1);
  afficherCartItems();
  displayCartTotal();
}

// Fonction qui va géré l'affichage du panier d'achat
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

// --------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------
// Initialisation des cards et ajout des eventsListeners aux boutons 'add'
// -------------------------------------------------------------------------

createDishCards(dishCollection);
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

// --------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------
// Gestion du tri par style de menu
// ------------------------------------------------------

// Sélection du menu déroulant et du conteneur de résultats

const menuDeroulant = document.getElementById("tri");
const conteneurResultats = document.querySelector(".libraryCard");

// Ajout de l'eventListener associé à la fonction de maj sur le menu déroulant
menuDeroulant.addEventListener("change", mettreAJourResultats);

// ----------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------
// Gestion du panier d'achat
// ------------------------------------------------------

let cartItems = [];
let conteneurCart = document.querySelector(".listCart");
let conteneurTotal = document.querySelector(".conteneurTotal");

// Fonction qui permet d'afficher une ligne représentant le Total du panier
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
// ------------------------------------------------------
// Gestion du DarkMode
// ------------------------------------------------------

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
// ------------------------------------------------------
// Création et "remplissage" du footer
// ------------------------------------------------------

let copyright = document.querySelector("footer");
let content = `
<p class="copyrightTitle">Copyright© 2023 Dark Kitchen</p>
<p class="copyright">Alexandra Anthony Delphine Ethan  Nicolas_Cage Thomas </p>`;
copyright.innerHTML += content;

