const categories = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.length);
console.log("");

categories.forEach((category) => {
  const arr = [];
  const nameOfCategory = category.querySelector("h2");
  console.log("Category: ", nameOfCategory.textContent);

  const itemOfCategory = category.querySelectorAll("ul > li");
  console.log("Element: ", itemOfCategory.length);
  itemOfCategory.forEach((li) => {
    const innerText = li.textContent;
    arr.push(innerText);
  });
  console.log("Element: ", ...arr);
  console.log("");
});

//lub//

// const titles = document.querySelectorAll("h2").length;
// console.log("Number of categories:", titles);
// console.log("");

// const items = document.querySelectorAll("li.item");
// for (const item of items) {
//   const nameOfCategory = item.firstElementChild.textContent;
//   const itemOfCategory = item.querySelectorAll("li").length;
//   console.log(`Category: ${nameOfCategory} \n Elements: ${itemOfCategory}`);
// }

//lub//

// const categories = document.querySelector("#categories");
// const categoryName = document.querySelectorAll("li.item > h2");
// const itemList = document.querySelectorAll("li.item > ul");

// console.log("Number of categories:", categories.children.length);

// for (let i = 0; i < 3; i++) {
//   console.log("Category:", categoryName[i].textContent);
//   console.log("Elements:", itemList[i].children.length);
// }
