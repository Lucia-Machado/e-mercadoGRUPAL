

document.addEventListener("DOMContentLoaded", function () {

    let nombre = document.querySelector("#txtNombre");
    let apellido = document.querySelector("#txtApellido");
    let email = document.getElementById("txtEmail");
    let segundoNombre = document.querySelector("#txtSegundoNombre");
    let segundoApellido = document.querySelector("#txtSegundoApellido");
    let telefono = document.querySelector("#txtTelefono");


    
    if (localStorage.getItem("nombre")){
        nombre.value = JSON.parse(localStorage.getItem("nombre"))
        
    }
    if (localStorage.getItem("apellido")){
        apellido.value = JSON.parse(localStorage.getItem("apellido"))
        
    }
    if (localStorage.getItem("emailPersona")){
        email.value = JSON.parse(localStorage.getItem("emailPersona"))
        
    }
    if (localStorage.getItem("validarSegundoNombre")){
        segundoNombre.value = JSON.parse(localStorage.getItem("validarSegundoNombre"))
        
    }
    if (localStorage.getItem("validarSegundoApellido")){
        segundoApellido.value = JSON.parse(localStorage.getItem("validarSegundoApellido"))
        
    }
    if (localStorage.getItem("validarTelefono")){
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

        if (nombre.trim() == "" || apellido.trim() == "" || email.trim() == ""){
            return Swal.fire("Campos Nombre, Apellido y Email deben estar completos!");

        }
        
        
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


        return Swal.fire("Cambios completados");
    })

})

function mostrarImagen() {
    let input = document.querySelector("#imgPerfil");
    let container = document.querySelector("#imagenContainer");

    if (input.files && input.files[0]) {
        let subirFoto = new FileReader();

        subirFoto.onload = function (e) {
            container.innerHTML = '<img src="' + e.target.result + '" alt="Imagen de perfil">';
        };

        subirFoto.readAsDataURL(input.files[0]);
    }
}