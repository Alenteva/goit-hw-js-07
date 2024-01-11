// const element = document.getElementById("categories");
// const categories = element.querySelectorAll(".item");

// console.log(`Numder of categories ${categories.length}`);
// categories.forEach((item) => {
//   const categoryTitle = item.querySelector(".ctgs-name").textContent;
//   const categoryItems = item.querySelectorAll(".list-item");
//   console.log(`Category ${categoryTitle} Elements ${categoryItems.length}`);
// });

const element = document.getElementById("categories");
const categories = element.querySelectorAll(".item");

console.log(`Numder of categories ${categories.length}`);
categories.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("li");
  console.log(`Category ${categoryTitle} Elements ${categoryItems.length}`);
});
