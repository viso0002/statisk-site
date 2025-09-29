const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const header = document.querySelector("h2").textContent = category;


const productListContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((res) => res.json())
  .then(products => showProducts(products));

function showProducts(products) {
  console.log(products);

  products.forEach(element => {
    console.log(element); 
    
    

    let discountHTML = "";
if (element.discount) {
  discountHTML = `
    <div class="discounted">
      <p>DKK <span>${Math.round(element.price - (element.price * element.discount) / 100)}</span></p>
      <p><span>${element.discount}</span>%</p>
    </div>`;
}

productListContainer.innerHTML += `
  <div class="grid-item ${element.soldout && "soldOut"} ${element.discount && "onSale"}">
    <a href="product.html?id=${element.id}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
           alt="${element.productdisplayname}" />
    </a>
    <h3>${element.productdisplayname}</h3>
    <p class="sub-title">${element.brandname}</p>
    <p class="price">DKK <span>${element.price}</span></p>
    ${discountHTML}
  </div>`;

  });
}


