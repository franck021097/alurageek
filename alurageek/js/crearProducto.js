import { conectaAPI } from "./conectaAPI.js"


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
    
    verNuevosProductos(nuevaLista);
    
}


function verNuevosProductos(nuevaLista){
    let containerProductos = document.querySelector("[data-container-productos]");
    
    let listaProductos = "";

    containerProductos.innerHTML = "";  

    nuevaLista.forEach(element => {

    listaProductos += 
    `
        <div class="producto">
                                <div>
                                    <img src="${element.imagen}" alt="producto" class="img-producto">
                                </div>
                
                                <div class="info-producto">
                                    <p>${element.nombre_producto}</p>
                                    <div>
                                        <p class="precio-producto">$${element.precio}</p>
                                        <img src="./assets/trash.png" alt="borrar producto" class="borrar-producto" id="${element.id}">
                                    </div>
                                </div>
                            </div>
        `
        }); 

    containerProductos.innerHTML = listaProductos;  
}



enviar.addEventListener("click", (evento) => {
    obtenerDatos(evento);
});


