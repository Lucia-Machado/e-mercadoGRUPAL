
document.addEventListener("DOMContentLoaded", function () {

  const email = document.getElementById('email');
  const pass = document.getElementById('password');


  // escucha el boton y ejecuta validar
  addEventListener("submit", function validar() {
    event.preventDefault();
    // si el campo email es vacio
    if (email.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error...',
        text: 'Ingrese su email',
      });
      // si el campo contraseña es vacio
    } else if (pass.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error...',
        text: 'Ingrese su contraseña',
      });
    } else {
      // si ambos estan llenos
      // almacena en sessionStorage que el usuario ha iniciado sesión
      sessionStorage.setItem('loggedIn', 'true');
      //redirige al index
      window.location.href = "index.html";
    }
  })
})





