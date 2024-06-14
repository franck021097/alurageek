import { conectaAPI } from "./conectaAPI.js"
import { mostrar } from "./mostrarProductos.js"


window.addEventListener("load", () => {
    obtenerBotones();
});

function obtenerBotones(obtener){
    const botonesBorrar = document.querySelectorAll(".borrar-producto");

    if(obtener){
        botonesBorrar.forEach((button) => {
            button.onclick = () => {
                conectaAPI.borrarProducto(button.id)
            };
        });

    mostrar.mostrarProductos();
    }

}

window.addEventListener("click", () => {obtenerBotones(true)});


