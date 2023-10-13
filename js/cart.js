function recalcular() {
  let cantidades = document.getElementsByClassName("cant");
  let precios = document.getElementsByClassName("precio");
  let resultados = document.getElementsByClassName("res");
  var total = 0;

  for (let i = 0; i < precios.length; i++) {
    total = parseFloat (parseFloat(cantidades[i].value) * parseFloat((precios[i].innerHTML))).toFixed(2);
    resultados[i].innerHTML = parseFloat(parseFloat(cantidades[i].value) * parseFloat(precios[i].innerHTML)).toFixed(2);
  }
  
  document.getElementById("total").innerHTML = "$ " + total;
}

document.addEventListener("DOMContentLoaded", () => {
  const carritoCont = document.getElementById("lista");
  const carrito = JSON.parse (localStorage.getItem("carrito"));
 
  
  const URL = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
  ////
    

   
  
    
////
  fetch(URL)
    .then((response) => response.json())
    .then((productocompra) => {
      carritoCont.innerHTML += `
    <tr><td><img src=${productocompra.articles[0].image} width="100px"></img></td>
    <td id="nombreCarrito">${productocompra.articles[0].name} </td>
    <td>${productocompra.articles[0].currency}<span class="precio"> ${productocompra.articles[0].unitCost}</span></td>
    <td><input type="number" id="inputCarrito" min="0" value="1" class="cant" onchange="recalcular();"></td>
    <td id="ress">${productocompra.articles[0].currency} <span class="res">${productocompra.articles[0].unitCost}</span></td></tr>
    `
    let carrito2 = document.getElementById("lista2");
    carrito.map((el)=>{
    carrito2.innerHTML += `
    <tr><td><img src=${el.images[0]} width="100px"></img></td>
    <td id="nombreCarrito">${el.name} </td>
    <td>${el.currency}<span class="precio"> ${el.cost}</span></td>
    <td><input type="number" id="inputCarrito" min="0" value="1" class="cant" onchange="recalcular()"></td>
    <td id="ress">${el.currency} <span class="res">${el.cost}</span></td></tr><br/>`;
      })
      
    
      recalcular();
    });


    const limpiar = document.getElementById("limpiarProd")

    limpiar.addEventListener("click", ()=>{
      localStorage.removeItem("carrito")
      let carrito2 = document.getElementById("lista2");
      carrito2.innerHTML = ` `
    })
  
})

