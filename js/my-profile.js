document.addEventListener("DOMContentLoaded", function () {

    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let email = document.querySelector("#txtEmail").value;
    let segundoNombre = document.querySelector("#txtSegundoNombre").value;
    let segundoApellido = document.querySelector("#txtSegundoApellido").value;
    let telefono = document.querySelector("#txtTelefono").value;


    if (!sessionStorage.getItem('loggedIn')) {

        // si no es asi, redirige a login hasta que sea true
        window.location.href = 'login.html';
    }
    let contenidoIndex = localStorage.getItem("EmailPersona");
    let emailPersona = document.getElementById("emailPersona");
    emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

})