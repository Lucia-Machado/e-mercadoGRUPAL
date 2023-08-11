const AUTOS_URL =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";
let ProductsArray = [];

function showProductsList(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let product = array[i];
    htmlContentToAppend += `
        <div class="product-card">
            <div class="img">
                <img src="${product.image}" alt="product image">
            </div>

            <div class="info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: ${product.cost} ${product.currency}</p>
                <p>Vendidos: ${product.soldCount}</p>
            </div>
        </div>`;
  }

  // Insertar el contenido en el elemento con id "new-products-container" dentro del <main>
  document.getElementById("products-container").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(AUTOS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      ProductsArray = resultObj.data.products;
      showProductsList(ProductsArray);
    }
  });
});
