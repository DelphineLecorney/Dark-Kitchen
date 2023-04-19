//link svg
//https://www.svgrepo.com/show/309493/dark-theme.svg
//https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png



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
