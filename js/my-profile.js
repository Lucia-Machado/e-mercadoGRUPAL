document.addEventListener("DOMContentLoaded", function () {

    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let email = document.getElementById("txtEmail");
    let segundoNombre = document.querySelector("#txtSegundoNombre").value;
    let segundoApellido = document.querySelector("#txtSegundoApellido").value;
    let telefono = document.querySelector("#txtTelefono").value;


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
        let emailPersona = document.getElementById("emailPersona").value;
        
        localStorage.setItem("nombre", JSON.stringify(nombre))
        localStorage.setItem("apellido", JSON.stringify(apellido))
        localStorage.setItem("EmailPersona", JSON.stringify(email))

        if (segundoNombre){
            console.log("validacion")
            localstorage.setItem("validarSegundoNombre", JSON.stringify(segundoNombre))
        }
        // if(segundoApellido){

        //     localStorage.setItem("validarSegundoApellido", )
        // }
        // if(telefono){
        //     localStorage.setItem("validarTelefono", )
        // }
    })

})