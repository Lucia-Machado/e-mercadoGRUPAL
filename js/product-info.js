document.addEventListener("DOMContentLoaded",()=>{

        let contenidoIndex = localStorage.getItem("EmailPersona");
        let emailPersona = document.getElementById("emailPersona");
        emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;


        const estrellita1 = document.getElementById("estrellita1")

        estrellita1.addEventListener("click", ()=> {

                estrellita1.classList.add("claseEstrella")
                estrellita2.classList.add("claseEstrellaWhite")
                estrellita3.classList.add("claseEstrellaWhite")
                estrellita4.classList.add("claseEstrellaWhite")
                estrellita5.classList.add("claseEstrellaWhite")
                
                
        })

        const estrellita2 = document.getElementById("estrellita2")

        estrellita2.addEventListener("click", ()=> {

                estrellita1.classList.add("claseEstrella")
                estrellita2.classList.add("claseEstrella")
                estrellita2.classList.remove("claseEstrellaWhite")

                estrellita3.classList.add("claseEstrellaWhite")
                estrellita4.classList.add("claseEstrellaWhite")
                estrellita5.classList.add("claseEstrellaWhite")
                

        })
        const estrellita3 = document.getElementById("estrellita3")

        estrellita3.addEventListener("click", ()=> {

                estrellita1.classList.add("claseEstrella")
                estrellita2.classList.add("claseEstrella")
                estrellita3.classList.add("claseEstrella")
                estrellita2.classList.remove("claseEstrellaWhite")
                estrellita3.classList.remove("claseEstrellaWhite")
                estrellita4.classList.add("claseEstrellaWhite")
                estrellita5.classList.add("claseEstrellaWhite")
                
        })

        const estrellita4 = document.getElementById("estrellita4")

        estrellita4.addEventListener("click", ()=> {

                estrellita1.classList.add("claseEstrella")
                estrellita2.classList.add("claseEstrella")
                estrellita3.classList.add("claseEstrella")
                estrellita4.classList.add("claseEstrella")
                estrellita2.classList.remove("claseEstrellaWhite")
                estrellita3.classList.remove("claseEstrellaWhite")
                estrellita4.classList.remove("claseEstrellaWhite")
                estrellita5.classList.add("claseEstrellaWhite")
               
                
        })
        const estrellita5 = document.getElementById("estrellita5")

        estrellita5.addEventListener("click", ()=> {

                estrellita5.classList.add("claseEstrella")
                estrellita4.classList.add("claseEstrella")
                estrellita3.classList.add("claseEstrella")
                estrellita2.classList.add("claseEstrella")
                estrellita1.classList.add("claseEstrella")
                estrellita2.classList.remove("claseEstrellaWhite")
                estrellita3.classList.remove("claseEstrellaWhite")
                estrellita4.classList.remove("claseEstrellaWhite")
                estrellita5.classList.remove("claseEstrellaWhite")
                
                
        })


})