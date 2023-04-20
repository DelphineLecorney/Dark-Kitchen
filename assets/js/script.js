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
    let objetsFiltres;
    if(triSelectionne === "All styles"){
        objetsFiltres = dishCollection;
    }else{
    objetsFiltres = dishCollection.filter(objet => objet.dishStyle === triSelectionne);
    }
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
        libraryCard.appendChild(newCard);


        const addButtons = document.querySelectorAll(".btnAdd");

        addButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const title = button.closest(".dishCard").querySelector(".dishTitle").textContent;
                const price = button.closest(".dishCard").querySelector(".dishPrice").textContent;
                const item = {
                    title,
                    price
                };
                cartItems.push(item);
            });
        });

        addButtons.forEach((button) => {
            button.addEventListener("click", afficherCartItems)
        });
        addButtons.forEach((button) => {
            button.addEventListener("click", displayCartTotal)
        });
    });
}

menuDeroulant.addEventListener("change", mettreAJourResultats);

// ----------------------------------------------------------------------------------------------------------------------------------

let cartItems = [];
let conteneurCart = document.querySelector(".listCart");

const addButtons = document.querySelectorAll(".btnAdd");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const title = button.closest(".dishCard").querySelector(".dishTitle").textContent;
        const price = button.closest(".dishCard").querySelector(".dishPrice").textContent;
        const item = {
            title,
            price
        };
        cartItems.push(item);
    });
});

addButtons.forEach((button) => {
    button.addEventListener("click", afficherCartItems)
});
addButtons.forEach((button) => {
    button.addEventListener("click", displayCartTotal)
});

function afficherCartItems() {

    conteneurCart.innerHTML = "";

    for (items of cartItems) {
        let content = `
        <li class="cartItem">${items.title} ${items.price}</li>
        `;
        conteneurCart.innerHTML += content;
    }
}

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