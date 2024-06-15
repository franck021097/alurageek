import { conectaAPI } from "./conectaAPI.js"


const containerProductos = document.querySelector("[data-container-productos]");
const productos = await conectaAPI.listaProductos();

let listaProductos = "";

//containerProductos.innerHTML = listaProductos;  

productos.forEach(element => {

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




