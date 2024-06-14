import { conectaAPI } from "./conectaAPI.js"
const enviar = document.querySelector("[data-enviar]");
const productos = await conectaAPI.listaProductos();

function obtenerDatos(){
    const nombre_producto = document.querySelector("#nombre").value;
    const precio = document.querySelector("#precio").value;
    const imagen = document.querySelector("#imagen").value;
    const ultimo_id = productos.length > 0 ? parseInt(productos[productos.length-1].id) + 1 : 1;
    const id = ultimo_id.toString();

    conectaAPI.enviarProducto(id, nombre_producto, precio, imagen);
}



enviar.addEventListener("click", () => {
    obtenerDatos();
});


