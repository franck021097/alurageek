import { conectaAPI } from "./conectaAPI.js"
import { mostrar } from "./mostrarProductos.js"


const contenedorProductos = document.querySelector("[data-container-productos]");

contenedorProductos.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.id);
    conectaAPI.borrarProducto(event.target.id);
    mostrar.mostrarProductos();
});