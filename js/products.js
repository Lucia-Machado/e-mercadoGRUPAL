const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PRICE_ASC = "PrecioAsc";
const ORDER_BY_PRICE_DESC = "PrecioDesc";
const ORDER_BY_SOLD_COUNT = "Vendidos";

const AUTOS_URL =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";

  function sortProducts(criteria, array) {
    let result = [];

    if (criteria === ORDER_ASC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PRICE_ASC) {
        result = array.sort(function (a, b) {
            return a.cost - b.cost;
        });
    } else if (criteria === ORDER_BY_PRICE_DESC) {
        result = array.sort(function (a, b) {
            return b.cost - a.cost;
        });
    } else if (criteria === ORDER_BY_SOLD_COUNT) {
        result = array.sort(function (a, b) {
            return b.soldCount - a.soldCount;
        });
    }

    return result;
}


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

function sortAndShowProducts(sortCriteria) {
  currentSortCriteria = sortCriteria;
  ProductsArray = sortProducts(currentSortCriteria, ProductsArray);
  showProductsList(ProductsArray);
}


document.addEventListener("DOMContentLoaded", function (e) {
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
  }

  document.getElementById("sortAsc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_ASC_BY_NAME);
});

document.getElementById("sortDesc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_DESC_BY_NAME);
});

document.getElementById("sortByPriceAsc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_PRICE_ASC);
});

document.getElementById("sortByPriceDesc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_PRICE_DESC);
});

document.getElementById("sortBySoldCount").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_SOLD_COUNT);
});

});
