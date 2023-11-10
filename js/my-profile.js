document.addEventListener("DOMContentLoaded", function () {

    let nombre = document.querySelector("#txtNombre");
    let apellido = document.querySelector("#txtApellido");
    let email = document.getElementById("txtEmail");
    let segundoNombre = document.querySelector("#txtSegundoNombre");
    let segundoApellido = document.querySelector("#txtSegundoApellido");
    let telefono = document.querySelector("#txtTelefono");

    if (localStorage.getItem("nombre").length > 1){
        nombre.value = JSON.parse(localStorage.getItem("nombre"))
        
    }
    if (localStorage.getItem("apellido").length > 1){
        apellido.value = JSON.parse(localStorage.getItem("apellido"))
        
    }
    if (localStorage.getItem("EmailPersona").length > 1){
        email.value = JSON.parse(localStorage.getItem("EmailPersona"))
        
    }
    if (localStorage.getItem("validarSegundoNombre").length > 1){
        segundoNombre.value = JSON.parse(localStorage.getItem("validarSegundoNombre"))
        
    }
    if (localStorage.getItem("validarSegundoApellido").length > 1){
        segundoApellido.value = JSON.parse(localStorage.getItem("validarSegundoApellido"))
        
    }
    if (localStorage.getItem("validarTelefono").length > 1){
        telefono.value = JSON.parse(localStorage.getItem("validarTelefono"))
        
    }
   
    




    email.value = localStorage.getItem("EmailPersona")
    console.log(email)
    if (!sessionStorage.getItem('loggedIn')) {

        // si no es asi, redirige a login hasta que sea true
        window.location.href = 'login.html';


    }
    let contenidoIndex = localStorage.getItem("EmailPersona");
    let emailPersona = document.getElementById("emailPersona");
    const navlink = document.getElementsByClassName("nav-link")

    navlink.innerHTML = emailPersona
    emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;


    const btnValidar = document.getElementById("btnValidar")
    btnValidar.addEventListener("click", () => {
        let nombre = document.querySelector("#txtNombre").value;
        let apellido = document.querySelector("#txtApellido").value;
        let email = document.getElementById("txtEmail").value;
        let segundoNombre = document.querySelector("#txtSegundoNombre").value;
        let segundoApellido = document.querySelector("#txtSegundoApellido").value;
        let telefono = document.querySelector("#txtTelefono").value;
        
        
        localStorage.setItem("nombre", JSON.stringify(nombre))
        localStorage.setItem("apellido", JSON.stringify(apellido))
        localStorage.setItem("emailPersona", JSON.stringify(email))

        if (segundoNombre){
            console.log("validacion")
            localStorage.setItem("validarSegundoNombre", JSON.stringify(segundoNombre))
        }
        if(segundoApellido){

            localStorage.setItem("validarSegundoApellido", JSON.stringify(segundoApellido))
        }
        if(telefono){
            localStorage.setItem("validarTelefono", JSON.stringify(telefono))
        }
    })

})