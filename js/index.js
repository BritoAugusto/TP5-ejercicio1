/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

const btnComenzar = document.getElementById("comenzarJuego");
const insertarTitulo = document.getElementById("tituloIngresar");
const formularioIngreso = document.querySelector("form");

const tituloComenzar = () => {
  insertarTitulo.innerHTML = "Ingrese un número del 1 al 10 para comenzar";
  btnComenzar.innerHTML = "Generar otro Numero";
  salida.innerHTML = "";
};
let cajaNumeros;
const numeroAleatorio = () => {
  cajaNumeros = Math.floor(Math.random() * 10) + 1;
};

const adivinarNumero = (e) => {
  e.preventDefault();
  console.log("desde la funcion adivinarNumero");
  const input = Number(document.querySelector("#numeroIngresado").value);
  console.log(input);
  if (input === cajaNumeros) {
    const salida = document.querySelector("#salida");
    salida.innerHTML = `<h4>!Felicidades, Adivinaste el Número Oculto <strong>'${cajaNumeros}'</strong> ¡</h4>`;
    btnComenzar.innerHTML = "Comenzar el Juego";
    insertarTitulo.innerHTML =
      'Haga Click en "Comenzar el Juego" para volver a Jugar';
  } else if (input > cajaNumeros) {
    alert(
      "Intente de nuevo : Pista (el número que ingresaste es mayor al número oculto) "
    );
  } else if (input < cajaNumeros) {
    alert(
      "Intente de nuevo : Pista (el número que ingresaste es menor al número oculto) "
    );
  }
  formularioIngreso.reset();
};

btnComenzar.addEventListener("click", numeroAleatorio);
btnComenzar.addEventListener("click", tituloComenzar);

formularioIngreso.addEventListener("submit", adivinarNumero);
