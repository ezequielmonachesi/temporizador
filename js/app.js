let temporizador = document.getElementById("temporizador");
let iniciar = document.getElementById("iniciar");
let pausar = document.getElementById("pausar");
let reiniciar = document.getElementById("reiniciar");
let inputHora = document.getElementById("hora");
let inputMinutos = document.getElementById("minutos");
let inputSegundos = document.getElementById("segundos");
let inputMiliSegundos = 99;
let hora = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 99;
let form = document.querySelector("form");
let tiempoInicio;
let inputHoraPrimerMomento = document.getElementById("hora");
let inputMinutosPrimerMomento = document.getElementById("minutos");
let inputSegundosPrimerMomento = document.getElementById("segundos");

form.addEventListener("submit", mostrar);
iniciar.addEventListener("click", start);
pausar.addEventListener('click', stopNow);
reiniciar.addEventListener('click', reset)

function mostrar(e) {
  e.preventDefault();
  if (inputSegundos.value < 10) {
    inputSegundos = `0${inputSegundos.value}`;
  } else {
    inputSegundos = `${inputSegundos.value}`;
  }
  if (inputMinutos.value < 10) {
    inputMinutos = `0${inputMinutos.value}`;
  } else {
    inputMinutos = `${inputMinutos.value}`;
  }
  if (inputHora.value < 10) {
    inputHora = `0${inputHora.value}`;
  } else {
    inputHora = `${inputHora.value}`;
  }
  temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
}

function escribir() {  

  if (inputMiliSegundos > -1) {
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }else{
    inputSegundos--;
    inputMiliSegundos = 99;
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }

  
  if (inputSegundos > -1) {
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }else{
    inputMinutos--;
    inputSegundos = 59;
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }

  
  if (inputMinutos > -1) {
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }else{
    inputHora--;
    inputMinutos = 59;
    temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
  }

  if(inputHora == 0 && inputMinutos == 0 && inputSegundos == 0 && inputMiliSegundos == 0){
    clearInterval(tiempoInicio)
  }

  

  inputMiliSegundos--;
}

function start() {
  tiempoInicio = setInterval(escribir, 10);
  iniciar.removeEventListener('click',start)
}
function stopNow(){
  clearInterval(tiempoInicio);
  iniciar.addEventListener('click', start);
}
function reset(){
  clearInterval(tiempoInicio);
  
  if (inputSegundosPrimerMomento.value < 10) {
    inputSegundos = `0${inputSegundosPrimerMomento.value}`;
  } else {
    inputSegundos = `${inputSegundosPrimerMomento.value}`;
  }
  if (inputMinutosPrimerMomento.value < 10) {
    inputMinutos = `0${inputMinutosPrimerMomento.value}`;
  } else {
    inputMinutos = `${inputMinutosPrimerMomento.value}`;
  }
  if (inputHoraPrimerMomento.value < 10) {
    inputHora = `0${inputHoraPrimerMomento.value}`;
  } else {
    inputHora = `${inputHoraPrimerMomento.value}`;
  }
  inputMiliSegundos = 99;
  temporizador.innerHTML = `${inputHora}:${inputMinutos}:${inputSegundos}.${inputMiliSegundos}`;
}

