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
    // let emailPersona = document.getElementById("emailPersona");
    // emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

})