
async function listaProductos(){
    try{
        const conexion = await fetch("http://localhost:3001/productos");
        // console.log(conexion);
        /*,{
        method:"GET",
        headers:{
        "Content-type":"application/json",
        "Permissions-Policy": "geolocation=(self `http://localhost:3001/productos`)"
        }
    }*/

        if(conexion.ok){
            const conexionConvertida= await conexion.json();
            // console.log(conexionConvertida);
            return conexionConvertida;
        }else{
            throw conexion;
        }


        //res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
        // let valorRetorno;
        // conexion.ok ? valorRetorno=conexionConvertida : valorRetorno=conexion;

        // console.log("la concexion dice: ");
        // console.log(conexion);
        // return valorRetorno;
    }catch(error){
        return error;
    }
}

async function enviarProducto(id, nombre_producto, precio,imagen){
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

        return conexion;

}

async function borrarProducto(id){
        const conexion = await fetch(`http://localhost:3001/productos/${id}`, {method: 'DELETE'});
}

export const conectaAPI={
    listaProductos,enviarProducto,borrarProducto
}