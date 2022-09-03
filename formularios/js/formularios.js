//let nombre = 'Brayan'; ---> valor quemado

const botonRegistrar = document.getElementById('btn-registrar');

// function imprimirDatos(){}

//Función de flecha
const imprimirDatos = () => {
    let nombre = document.getElementById('txt-nombre').value;
    let apellido = document.getElementById('txt-apellidos').value;
    let correoElectronico = document.getElementById('txt-correo').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let codigoPostal = document.getElementById('txt-zip').value;

    console.log('El nombre es:', nombre);
    console.log('El apellido es:', apellido);
    console.log('El correo electronico es:', correoElectronico);
    console.log('La dirección es:', direccion);
    console.log('La ciudad es:', ciudad);
    console.log('La provincia:', provincia);
    console.log('El código postal es:', codigoPostal);
};


//console.log(botonRegistrar);

botonRegistrar.addEventListener('click', imprimirDatos);