const element = document.getElementById("categories");
const categories = element.querySelectorAll(".item");

// Порахувати кількість категорій та вивести в консоль
console.log(`Namder of categories ${categories.length}`);

// Для кожної категорії вивести заголовок та кількість елементів у категорії
categories.forEach((item) => {
  const categoryTitle = item.querySelector(".ctgs-name").textContent;
  const categoryItems = item.querySelectorAll(".list-item");
  console.log(`Category ${categoryTitle} Elements ${categoryItems.length}`);
});
