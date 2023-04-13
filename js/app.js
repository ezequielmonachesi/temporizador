let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let pausar = document.getElementById('pausar');
let reiniciar = document.getElementById('reiniciar');
let inputHora = document.getElementById('hora');
let inputMinutos = document.getElementById('minutos');
let inputSegundos = document.getElementById('segundos');
let fechaActual = new Date();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
let milisegundos = fechaActual.getMilliseconds();


let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    hora = inputHora.value;
    minutos = inputMinutos.value;
    segundos = inputSegundos.value;
    
});

