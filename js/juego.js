//Importar clases y funciones
import { Animal }from './Animal.js';
import { addAnimalesHTML } from './styles.js';
import { mostrarMascotaEnemigo } from "./styles.js";
import { mostrarAtaques } from "./styles.js";
import { pasarAcombate } from './styles.js';
import { traducionAtaques } from './Animal.js';
import { mensajeFinal } from './styles.js';
import { mostrarMapa } from "./mapa.js";

//Bottom para elegir tu mascota
const botonMascotaJugador = document.getElementById('boton-mascota');

//Botton para terminar
const botonReiniciar = document.getElementById('boton-reiniciar');
//Un span con el nombre de la mascota que esogistes y una img
const mascotaSelecionadaJugador = document.getElementById('mascota-selecionada');
const imagenMascotaJugador = document.getElementById('imgAnimal');

//Para reiniciar selection o atacar
const bAtacar = document.getElementById('ataquesSelecionados');
const bResetSelection = document.getElementById('reselectionAtaque');



//Variables para el juego
let ataquesRival = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;

let botonesTotales = [];
let ataquesJuagador = [];

//arrayAnimales en la partida
let tuAnimal;
let animalEnemigo;

//Ojebtos de la clase Animal
let hipodogeObjeto = new Animal('Hipodoge', './imgs/Hipodoge.svg', '3')
let capipepoObjeto = new Animal('Capipepo', './imgs/Capipepo.svg', '3')
let ratigueyaObjeto = new Animal('Ratigueya', './imgs/Ratigueya.svg', '3')

//Array de la class Animal
let arrayAnimales = [];

//Agregar ataques a los objetos de la clase Animal
hipodogeObjeto.ataques.push(
    {nombre: '🪓️', id: 'boton-hachazo'},
    {nombre: '🏏️', id: 'boton-batazo'},
    {nombre: '🪨️', id: 'boton-piedra'},
    {nombre: '🧹️', id: 'boton-escobazo'},
    {nombre: '🦠️', id: 'boton-virus'}
)

capipepoObjeto.ataques.push(
    {nombre: '🧹️', id: 'boton-escobazo'},
    {nombre: '🪰️', id: 'boton-mosca'},
    {nombre: '👅️', id: 'boton-lengua'},
    {nombre: '🪓️', id: 'boton-hachazo'},
    {nombre: '🦠️', id: 'boton-virus'}
)

ratigueyaObjeto.ataques.push(
    {nombre: '🧹️', id: 'boton-escobazo'},
    {nombre: '🪰️', id: 'boton-mosca'},    
    {nombre: '🦠️', id: 'boton-virus'},
    {nombre: '🕸️', id: 'boton-telarana'},
    {nombre: '🦷️', id: 'boton-mordida'}
)

//Meter los arrayAnimales en el Array
arrayAnimales.push(hipodogeObjeto,capipepoObjeto,ratigueyaObjeto);

//Inicio de todo.
function iniciarjuego() {
    addAnimalesHTML(arrayAnimales);
    
    botonMascotaJugador.addEventListener('click', selecionMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionMascotaJugador() {
    let animalSelected = false;
    for (let i = 0; i < arrayAnimales.length; i++) {
        let animalInput = document.getElementById(arrayAnimales[i].nombre);;
        if(animalInput.checked){
            mascotaSelecionadaJugador.innerHTML = arrayAnimales[i].nombre;
            imagenMascotaJugador.setAttribute("src", arrayAnimales[i].foto);
            animalSelected = true;
            tuAnimal = arrayAnimales[i];
            botonesTotales = mostrarAtaques(tuAnimal.ataques);
        }
    }
    if(animalSelected){
        mostrarMapa(tuAnimal,animalEnemigo,arrayAnimales);
    } else {
        alert("No has selecionado nada");
    }
}

function mascotaEnemigoSelecionar(enemigo) {
    animalEnemigo = enemigo;
    mostrarMascotaEnemigo(animalEnemigo);
    pasarAcombate();
    secuenciaAtaques();
}

function secuenciaAtaques(){
    ataquesJuagador = [];
    for(let i = 0; i < 5; i++){
        botonesTotales[i].addEventListener('click', (e) => {
            if (ataquesJuagador.length<5) {
                ataquesJuagador.push(e.target.textContent);
                botonesTotales[i].style.background = 'red';
                botonesTotales[i].disabled = true;
            }
            bAtacar.addEventListener('click',ataqueEnemigo);
        })
        bResetSelection.addEventListener('click',resetSecuencia);
    }
}

function resetSecuencia() {
    ataquesJuagador = [];
    botonesTotales.forEach((boton) => {
        boton.style.background = '#f9cc3e78';
        boton.disabled = false;
    })
}

function ataqueEnemigo() {
    if(ataquesJuagador.length == 5){
        ataquesRival = [animalEnemigo.ataques.length];
        for (let i = 0; i < animalEnemigo.ataques.length; i++) {
            ataquesRival[i] = animalEnemigo.ataques[i].nombre;
        }
        for (let i = ataquesRival.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Intercambia los elementos array[i] y array[j]
            [ataquesRival[i],ataquesRival[j]] = [ataquesRival[j], ataquesRival[i]];
        }
        combate(ataquesJuagador, ataquesRival);
    } else {
        alert("No tienes suficientes ataques");
    }
}

//Cada jugador tiene 5 vidas el que pierde 
function combate(jugador, pc) {
    let ataquesJ = traducionAtaques(jugador);
    let ataquesPc = traducionAtaques(pc);
    for (let i = 0; i < pc.length; i++) {
        if(ataquesJ[i] > ataquesPc[i]){
            victoriasJugador++;
        } else if(ataquesJ[i] < ataquesPc[i]) {
            victoriasEnemigo++;
        }
        
    }
    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasEnemigo < victoriasJugador ) {
        mensajeFinal('Deberias sentirte mal mataste una mascota virtual');
    } else{
        mensajeFinal('Deberias sentirte mal una pc te gano')
    }
}

function reiniciarJuego() {
    location.reload()
}

// Exporta la función para que pueda ser importada en otros archivos
export { mascotaEnemigoSelecionar };
export { iniciarjuego };