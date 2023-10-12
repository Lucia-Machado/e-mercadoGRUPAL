 document.addEventListener("DOMContentLoaded", ()=>{

    const carritoCont = document.getElementById("contenedorCarrito")

    const carrito = localStorage.getItem("carrito")
    const newCart = JSON.parse(carrito)


    console.log(newCart)
    carritoCont.innerHTML += `
    <ul class="list-group">
    <li class="list-group-item"><img src=${newCart.images[0]} width="70px" ></img> ${newCart.name} </li>
    </ul> `
 })
 