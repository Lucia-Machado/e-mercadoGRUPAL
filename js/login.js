/*

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "¡Necesitas completar ambos campos!";
  }
});

*/
document.addEventListener("DOMContentLoaded", function() {

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
    }  else if (pass.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error...',
        text: 'Ingrese su contraseña',
    });
    } else {
      window.location.href = "index.html";
    }
  })
  
  })
 





