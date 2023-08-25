const AUTOS_URL =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";
let ProductsArray = [];

function showProductsList(array) {
  let htmlContentToAppend = "";

  // Recorre el array y inserta en el html los atributos de product
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

  // Insertar el contenido HTML anterior en el elemento con id "new-products-container"
  document.getElementById("products-container").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
 
  });

  let contenidoIndex = localStorage.getItem("EmailPersona");
  let emailPersona = document.getElementById("emailPersona");
  emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

  
  let categoriaSeleccionadaId = localStorage.getItem("catID");
  if (categoriaSeleccionadaId !== null) {
    let url = `https://japceibal.github.io/emercado-api/cats_products/${categoriaSeleccionadaId}.json`;

    getJSONData(url).then(function (resultObj) {
      if (resultObj.status === "ok") {
        ProductsArray = resultObj.data.products;
        showProductsList(ProductsArray);
      }
    });
  };



