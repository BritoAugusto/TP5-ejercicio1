const btnComenzar = document.getElementById("comenzarJuego");
const insertarTitulo = document.getElementById("tituloIngresar");
const formularioIngreso = document.querySelector('form')

const tituloComenzar = () => {
     insertarTitulo.innerHTML = 'Ingrese un número del 1 al 10 para comenzar'
     btnComenzar.innerHTML = 'Generar otro Numero';

}
let cajaNumeros
const numeroAleatorio = () => {
    cajaNumeros = Math.floor((Math.random()) * 10) + 1;
    console.log(cajaNumeros);
    // cajaNumeros += numeroRandom;
}

const adivinarNumero = (e) => {
     e.preventDefault();
     console.log('desde la funcion adivinarNumero');
     const input = Number(document.querySelector("#numeroIngresado").value);
     console.log(input)
     if (input === cajaNumeros) {
         console.log("Numero acertado");
         alert('Numero Acertado')
         btnComenzar.innerHTML = 'Comenzar el Juego'
        } else {
            console.log("nopis");
            alert('Intentelo de Nuevo')
        }
        formularioIngreso.reset();
        
}

 btnComenzar.addEventListener('click', numeroAleatorio);
 btnComenzar.addEventListener('click', tituloComenzar);
 

formularioIngreso.addEventListener('submit', adivinarNumero)


 