
let nombreV = "";
let apellidoV = "";
let edadV = 0;

let nombre = window.document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnEnviar = document.getElementById("btnEnviar");

let datosAEnviar = [];


btnEnviar.addEventListener("click", function(e){
    e.preventDefault();

    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = parseInt(edad.value);

    if(nombreV === ""){
        console.log('Debe agregar nombre');
        return;
    }

    if(apellidoV === ""){
        return;
    }

    if(edadV <= 0 || edadV === null){
        return;
    }

    console.log(nombreV);
    console.log(apellidoV);
    console.log(edadV);

    objDatos = {
        nombreV,
        apellidoV,
        edadV
    }

    
    
    console.log(`El nombre es: ${nombreV} , el apellido es: ${apellidoV} y la edad es: ${edadV}`);
})



