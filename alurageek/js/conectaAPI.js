
async function listaProductos(){
    try{
        const conexion = await fetch("https://api-alura-geek-alpha.vercel.app/productos");
        
        if(conexion.ok){
            const conexionConvertida= await conexion.json();
            return conexionConvertida;
        }else{
            throw conexion;
        }

    }catch(error){
        return error;
    }
}

async function enviarProducto(id, nombre_producto, precio,imagen){
        const conexion= await fetch("https://api-alura-geek-alpha.vercel.app/productos",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            nombre_producto: nombre_producto,
            precio: precio,
            imagen: imagen
        }),
        });

        return conexion;

}

async function borrarProducto(id){
        const conexion = await fetch(`https://api-alura-geek-alpha.vercel.app/productos/${id}`, {method: 'DELETE'});
}

export const conectaAPI={
    listaProductos,enviarProducto,borrarProducto
}