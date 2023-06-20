const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  listIngredients.append(list);
  console.log(ingredient);
});

// const listIngredients = document.querySelector("#ingredients");
// const Lists = ingredients.map((ingredient) => {
//   const List = document.createElement("li");
//   List.textContent = ingredient;
//   List.classList.add("item");
//   return List;
// });

// listIngredients.append(...Lists);
