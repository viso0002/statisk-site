const productContainer = document.querySelector("#productContainer") 
// anden navngivning i # kunne have hvilket som helst navn

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then((res) => res.json())
.then((product) => {
    // console.log(product.articletype);

productContainer.innerHTML = `<section class="product-card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
        alt="Grey Solid Round Neck T-Shirt" />
        <div class="product-info">
          <h1>${product.productdisplayname}</h1>
          <h2>Color</h2>
          <p class="info">${product.basecolour}</p>
          <h2>Brand</h2>
          <p class="info">${product.brandname}</p>
          <h2>Category</h2>
          <p class="info">${product.category}</p>
          <h2>Inventory number</h2>
          <p class="info">${product.id}</p>
        </div>
        <div class="purchase-box">
        <h2>Price:</h2>
          <p class="">${product.price}</p>
          <form class="size">
            <label>
              Choose a size:
              <select name="size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </label>
          </form>
          <button class="buy">PURCHASE</button>
        </div>
      </section>`;

      });