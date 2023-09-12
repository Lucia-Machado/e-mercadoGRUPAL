document.addEventListener("DOMContentLoaded", () => {
  let contenidoIndex = localStorage.getItem("EmailPersona");
  let emailPersona = document.getElementById("emailPersona");
  emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

  const estrellita1 = document.getElementById("estrellita1");

  estrellita1.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrellaWhite");
    estrellita3.classList.add("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
  });

  const estrellita2 = document.getElementById("estrellita2");

  estrellita2.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");

    estrellita3.classList.add("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
  });
  const estrellita3 = document.getElementById("estrellita3");

  estrellita3.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
  });

  const estrellita4 = document.getElementById("estrellita4");

  estrellita4.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita4.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.remove("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
  });
  const estrellita5 = document.getElementById("estrellita5");

  estrellita5.addEventListener("click", () => {
    estrellita5.classList.add("claseEstrella");
    estrellita4.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.remove("claseEstrellaWhite");
    estrellita5.classList.remove("claseEstrellaWhite");
  });

  const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";

  const numeroProd = localStorage.getItem("selectedProduct");
  const content = PRODUCT_INFO_URL + numeroProd + ".json";
  var contenidoDePag = document.getElementById("contenidoDePag");
  fetch(content)
    .then((response) => response.json())
    .then(
      (data) =>
      (

        contenidoDePag.innerHTML = `
                
        <div>
        <h1 class="contenedor1">${data.name}</h1>
        <hr />
                
        <p class="cat1">Precio:<p>${data.currency} ${data.cost}</p>
        <p class="cat1">Descripción:</p><p>${data.description}</p>
        <p class="cat1">Categoría:</p><p>${data.category}</p>
        <p class="cat1">Cantidad vendidos:</p><p>${data.soldCount}</p>
        <p class="cat1">Imágenes: </p>

        <div class="galeria">
        <div class="imagenesgas">
        <img src="${data.images[0]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[1]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[2]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[3]}"></img>
        </div>
                
        </div>
        </div>
        `
      )
    );

    function calificacion() {
      if (data[i].score = "5") {
        data[i].score.innerHTML = `
        <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    `
      }
      else if (data[i].score = "4") {
        data[i].score.innerHTML = `
        <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    `
      }
      else
  if (data[i].score = "3") {
        data[i].score.innerHTML = `
        <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    `
      }
      else if (data[i].score = "2") {
        data[i].score.innerHTML = `
        <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    `
      }
      else if (data[i].score = "1") {
  data[i].score.innerHTML = `
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    `
      }
    }


  let comments = PRODUCT_INFO_COMMENTS_URL + numeroProd + ".json";
  let infocomentarios = document.querySelector("#comments");
  fetch(comments)
    .then((response) => response.json())
    .then(
      (data) =>
      (

        infocomentarios.innerHTML = `
        <div class="container"> 
        <h4>Comentarios</h4>
        <ul class="list-group">
        <li class="list-group-item"><strong>${data[0].user}</strong><p>${data[0].dateTime}</p> <p>${data[0].score} </p> <p>${data[0].description}</p></li>
        <li class="list-group-item"><strong>${data[1].user}</strong><p>${data[1].dateTime}</p> <p>${data[1].score} </p>  <p>${data[1].description}</p></li>
        <li class="list-group-item"><strong>${data[2].user}</strong><p>${data[2].dateTime}</p> <p>${data[2].score} </p>  <p>${data[2].description}</p></li>
        <li class="list-group-item"><strong>${data[3].user}</strong><p>${data[3].dateTime}</p> <p>${data[3].score} </p>  <p>${data[3].description}</p></li>
        
      </ul> 
        </div>`
        
));})