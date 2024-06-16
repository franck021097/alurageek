import { conectaAPI } from "./conectaAPI.js"
import { mostrar } from "./mostrarProductos.js"
const enviar = document.querySelector("[data-enviar]");

async function obtenerDatos(evento){
    evento.preventDefault();
    const productosActuales = await conectaAPI.listaProductos();
    const nombre_producto = document.querySelector("#nombre").value;
    const precio = document.querySelector("#precio").value;
    const imagen = document.querySelector("#imagen").value;
    const ultimo_id = productosActuales.length > 0 ? parseInt(productosActuales[productosActuales.length-1].id) + 1 : 1;
    const id = ultimo_id.toString();
    const nuevaLista = await conectaAPI.enviarProducto(id, nombre_producto, precio, imagen);
    mostrar.mostrarProductos(nuevaLista);
    
}

enviar.addEventListener("click", (evento) => {
    obtenerDatos(evento);
});