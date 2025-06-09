//Función para mostrar un cuadro de diálogo emergente
function mostrarMensaje() {
    alert ("Hola mundo :)");
}

    //Variables
function imprimirVariables() {
    let nombre = "Belen"
    let edad = 23;
    //Forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    //Forma moderna de concatenar cadenas
    console.log(`nombre: ${nombre}, edad ${edad}`);
    //Otros tipos de impresión
    console.error("Error: xd");
    console.warn("Advertencia: xd ");
}
    function arreglos(){
        //Arreglos
        let frutas =['manzana', 'pera', 'banana'];
        //Bucle
        for (let f of frutas) {
            console.log(f)
            
        }
        //Condicionales
        if (frutas[0] === 'pera') {
            console.log("La segunda fruta es una pera");
        }else {
            console.log('No es una pera');
        }


    
}
