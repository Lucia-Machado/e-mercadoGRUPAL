const temaOscuro = () => {
    console.log("Tema oscuro activado");
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  };
  
  const temaClaro = () => {
    console.log("Tema claro activado");
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  };
  
  const cambiarTema = () => {
    console.log("Cambio de tema");
    document.querySelector("body").getAttribute("data-bs-theme") === "light"
      ? temaOscuro()
      : temaClaro();
  };
  
