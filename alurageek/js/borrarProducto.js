import { conectaAPI } from "./conectaAPI.js"


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
    }
}

window.addEventListener("click", () => {obtenerBotones(true)});


