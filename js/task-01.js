const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
console.log("");

categories.forEach((category) => {
  const catName = category.querySelector("h2");
  const catItems = category.querySelectorAll("ul > li");

  console.log("Category: ", catName.textContent);
  console.log("Elements: ", catItems.length);
  console.log("");
});
