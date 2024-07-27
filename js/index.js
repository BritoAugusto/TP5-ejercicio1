const btnComenzar = document.getElementById("comenzarJuego");
const insertarTitulo = document.getElementById("tituloIngresar");
const numeroIngresado = document.querySelector('input')

const tituloComenzar = () => {
     insertarTitulo.innerHTML = 'Ingrese un número del 1 al 10 para comenzar'
    console.log('Hola mundo')
}
let cajaNumeros = '';
const numeroAleatorio = () => {
    const numeroRandom = Math.floor((Math.random()) * 10) + 1;
    console.log(numeroRandom);
    cajaNumeros += numeroRandom;
}

 btnComenzar.addEventListener('click', numeroAleatorio);
 btnComenzar.addEventListener('click', tituloComenzar);

for (let i = numeroIngresado; i === cajaNumeros; i++) {
       if (numeroIngresado === cajaNumeros) {
        console.log('Numero acertado')
       }else{
        console.log('nopis')
       }
    
}
 