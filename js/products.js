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
  //obtiene datos JSON de la URL AUTOS_URL
  getJSONData(AUTOS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      //los almacena dentro del ProductsArray
      ProductsArray = resultObj.data.products;
      //llama la funcion
      showProductsList(ProductsArray);
    }
  });

  let contenidoIndex = localStorage.getItem("EmailPersona");
  let emailPersona = document.getElementById("emailPersona");
  emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;
});

document.addEventListener("DOMContentLoaded", function (e) {
  // Recuperar el identificador de categoría almacenado en el almacenamiento local
  var categoriaSeleccionadaId = localStorage.getItem("catID");

  if (categoriaSeleccionadaId !== null) {
      // Construir la URL utilizando la ID de categoría
      var url = `https://japceibal.github.io/emercado-api/cats_products/${categoriaSeleccionadaId}.json`;

      // Obtiene datos JSON de la URL construida
      getJSONData(url).then(function (resultObj) {
          if (resultObj.status === "ok") {
              // Los almacena dentro del ProductsArray
              ProductsArray = resultObj.data.products;
              // Llama la función para mostrar la lista de productos
              showProductsList(ProductsArray);
          }
      });

      // Resto de tu código para mostrar el perfil del usuario
  } else {
      console.log("Identificador de categoría no encontrado en el almacenamiento local.");
  }
});
