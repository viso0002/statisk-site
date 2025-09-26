const productListContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((res) => res.json())
  .then(products => showProducts(products));

function showProducts(products) {
  console.log(products);

  products.forEach(element => {
    console.log(element); 

    productListContainer.innerHTML += `
      <div class="grid-item">
        <a href="product.html?id=${element.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
               alt="${element.productdisplayname}" />
        </a>
        <h3>${element.productdisplayname}</h3>
        <p class="sub-title">${element.brandname}</p>
        <p class="price">${element.price} DKK</p>
      </div>`;
  });
}


