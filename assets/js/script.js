
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let btnEnviar = document.getElementById("btnEnviar");

let req = [];

btnEnviar.addEventListener("click", function(e){    
    e.preventDefault();

    nombre = nombre.value;
    apellido = apellido.value;

    req.push({
        nombre,
        apellido
    });

    console.log(`El nombres es: 0}`);
    console.log(`El apellido es: ${apellido}`);
    console.log("El apellido es: "+ );
})

console.log(nombre);
