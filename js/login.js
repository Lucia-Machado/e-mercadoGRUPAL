
document.addEventListener("DOMContentLoaded", function () {

  const email = document.getElementById('email');
  const pass = document.getElementById('password');



  addEventListener("submit", function validar() {
    event.preventDefault();
    if (email.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error...',
        text: 'Ingrese su email',
      });
    } else if (pass.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error...',
        text: 'Ingrese su contraseña',
      });
    } else {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = "index.html";
    }
  })
})





