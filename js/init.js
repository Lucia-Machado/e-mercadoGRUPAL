

const CATEGORIES_URL = "http://localhost:3000/cats";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/sell";
const PRODUCTS_URL = "http://localhost:3000/cats_products";
const PRODUCT_INFO_URL = "http://localhost:3000/products";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/products_comments";
const CART_INFO_URL = "http://localhost:3000/user_cart";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";


const SERVER_URL = 'http://localhost:3000';
const API_ENDPOINT = '/cats'; // Reemplaza esto con la ruta real de tu API




let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = async function(url) {
  try {
    let response = await fetch(url, { mode: "no-cors" });

    
    let dato = response.json();
    return dato;
    // Si necesitas acceder al cuerpo de la respuesta, devuelve el resultado
  } catch (error) {
    console.error(error);
    hideSpinner();
    
  }
};