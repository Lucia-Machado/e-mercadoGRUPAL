document.addEventListener("DOMContentLoaded",()=>{

        let contenidoIndex = localStorage.getItem("EmailPersona");
        let emailPersona = document.getElementById("emailPersona");
        emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

})