//SIMULADOR DE INVENTARIO:


//Declarar objeto, array , objeto
let inventario = {

    productos:[   
        {nombre: "Rakis", cantidad: 12},
        {nombre: "Kenta", cantidad: 9},
        {nombre: "Quercus", cantidad: 10},
        {nombre: "Kaizen", cantidad: 7},
        {nombre: "Woki", cantidad: 27}


    ]
};

//Seleccion de accion e introducion de prompt
let accionValida = false;
let accion;


const pedirProducto = () => prompt("Introduce el producto.");

const pedirStock = function() { 
    let stockValido = false;
    let stockAceptable;


    do{
    stockAceptable = parseInt(prompt("Introduce la cantidad de producto."));
    if(!isNaN(stockAceptable)){
        stockValido = true;
    }else{
        alert("Introduce un numero.");
    }
}while(stockValido === false);
    return stockAceptable;

}

do{
accion = prompt("¿Que quieres hacer?,añadir, quitar o mirar un producto.");
accion = accion.toLowerCase();

    if(accion == "añadir" || accion == "quitar" || accion == "mirar"){
        
        accionValida = true;
    }else{
        alert("Dato no valido.");
        accionValida = false;
    }

}while(accionValida === false);



    
//Fucncion distribuccion de accion



function distribuccion(accion){
    
    if(accion === "añadir"){
        añadirProducto();
    }else if(accion === "quitar"){
        quitarProducto();
    }else{
        mirarProducto();
    }

}
distribuccion(accion);


//Funciones de operaccion

function añadirProducto(){
    let producto = pedirProducto();

    let stock = parseInt(pedirStock());
    inventario.productos.push({nombre:producto, cantidad:stock});

    alert("Producto actualizado en la consola.")
    console.log(`Producto ${producto} con ${stock} de stock actualizado.`);



}

function quitarProducto(){
    let producto = pedirProducto();

    let confirma = confirm(`¿Seguro quires borrar el producto ${producto}?`);
    if(confirma){
        let ubicacion = inventario.productos.findIndex(p => p.nombre.toLowerCase === producto.toLowerCase);
        if(ubicacion !== -1){
            inventario.productos.splice(ubicacion,1);
            alert(`El producto ${producto} a sido borrado del inventario.`);
        }
    }


}

function mirarProducto(){
    let producto = pedirProducto();

    let buscar = inventario.productos.find(p => p.nombre.toLowerCase === producto.toLowerCase);
    if(buscar){
        alert(`El producto ${buscar.nombre} tiene ${buscar.cantidad}`)
    }else{
        alert(`No existe el producto ${producto} de stock.`);
    }

}