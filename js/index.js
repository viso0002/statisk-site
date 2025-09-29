const categoryList = document.querySelector(".categorylist");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((res) => res.json())
  .then(categories => showCategories(categories)); 

function showCategories(categories) {
  categories.forEach(category => {
    categoryList.innerHTML += `<a href="product-list.html?category=${category.category}">${category.category}</a>`;
  });
}
