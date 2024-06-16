import { conectaAPI } from "./conectaAPI.js"
import { mostrar } from "./mostrarProductos.js"
const contenedorProductos = document.querySelector("[data-container-productos]");

contenedorProductos.addEventListener("click", async (event) => {
    event.preventDefault();
    if(event.target.alt == "borrar producto"){
        await conectaAPI.borrarProducto(event.target.id);
        const nuevaLista = await conectaAPI.listaProductos();
        mostrar.mostrarProductos(nuevaLista);
    }
});