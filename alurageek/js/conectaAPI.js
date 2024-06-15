
async function listaProductos(){
    try{
        //const conexion = await fetch("https://api-alura-geek-alpha.vercel.app/productos");
        const conexion = await fetch("http://localhost:3001/productos");
        
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
        //const conexion= await fetch("https://api-alura-geek-alpha.vercel.app/productos",{
        const conexion= await fetch("http://localhost:3001/productos",{
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

        const nuevaConexion = listaProductos();
        return nuevaConexion;

}

async function borrarProducto(id){
        await fetch(`http://localhost:3001/productos/${id}`, {method: 'DELETE'});
}

export const conectaAPI={
    listaProductos,enviarProducto,borrarProducto
}