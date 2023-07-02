const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const ocultarAtaque = document.getElementById('selecionar-ataque')
const ocultarReinicio = document.getElementById('reinicio')
const botonReiniciar = document.getElementById('boton-reiniciar')

const hipodoge = document.getElementById('hipodoge')
const capipepo = document.getElementById('capipepo')
const ratigueya = document.getElementById('ratigueya')
const mascotaSelecionada = document.getElementById('mascota-selecionada')
const imagenMascota = document.getElementById('imgAnimal')

const ocultarMascota = document.getElementById('selecionar-mascota')

const mascotaEnemigo = document.getElementById('mascota-enemigo')
const imagenMascotaJugador = document.getElementById('imgEnemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const resultadoBatalla = document.getElementById('resultados')
const tuAtaque = document.getElementById('name-Ataque-Jugador')
const elAtaqueEnemigo = document.getElementById('name-Ataque-Enemigo')

const lasMascotas = document.getElementById('lasMascotas')

let ataqueJugador
let ataqueRival
let cadaAnimal
let vidasJugador = 3
let vidasEnemigo = 3

class Animal {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogeObjeto = new Animal('Hipodoge', 'https://simp6.jpg.church/images/Criatura1ef2057ad22a11bf7.png', '3')
let capipepoObjeto = new Animal('Capipepo', 'https://simp6.jpg.church/images/Criatura2b21aadb89e39dc36.png', '3')
let ratigueyaObjeto = new Animal('Ratigueya', 'https://simp6.jpg.church/images/Criatura38867b5557f90ae32.png', '3')

hipodogeObjeto.ataques.push(
    {nombre: '🪓️', id: 'boton-hachazo'},
    {nombre: '🏏️', id: 'boton-batazo'},
    {nombre: '🪨️', id: 'boton-piedra'}
)

capipepoObjeto.ataques.push(
    {nombre: '🧹️', id: 'boton-escobazo'},
    {nombre: '🪰️', id: 'boton-mosca'},
    {nombre: '👅️', id: 'boton-lengua'}
)

ratigueyaObjeto.ataques.push(
    {nombre: '🦠️', id: 'boton-virus'},
    {nombre: '🕸️', id: 'boton-telarana'},
    {nombre: '🦷️', id: 'boton-mordida'}
)

let animales = []
animales.push(hipodogeObjeto,capipepoObjeto,ratigueyaObjeto)

function iniciarjuego() {

    animales.forEach((animal) => {
        cadaAnimal = `
        <div class="mascota">
                <label for=${animal.nombre} class="miAnimal">
                    <figure class="mascotaImg">
                        <img src=${animal.foto} alt=${animal.nombre}>
                    </figure>
                    ${animal.nombre}
                    <input type="radio" name="mascota" id=${animal.nombre}>
                </label>
        </div>
        `
        lasMascotas.innerHTML += cadaAnimal
    })

    

    botonMascotaJugador.addEventListener('click', selecionMascota)

    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)
    
    ocultarAtaque.style.display = 'none'

    ocultarReinicio.style.display = 'none'

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionMascota() {
    if (hipodoge.checked == true) {
        ocultarMascota.style.display = 'none'

        ocultarAtaque.style.display = 'block'
        
        mascotaSelecionada.innerHTML = 'Hipodoge'
        imagenMascota.setAttribute("src", "https://simp6.jpg.church/images/Criatura1ef2057ad22a11bf7.png");
        mascotaEnemigoSelecionar()
    } else if (capipepo.checked == true) {
        ocultarMascota.style.display = 'none'

        ocultarAtaque.style.display = 'block'
        
        mascotaSelecionada.innerHTML = 'Capipepo'
        imagenMascota.setAttribute("src", "https://simp6.jpg.church/images/Criatura2b21aadb89e39dc36.png");
        mascotaEnemigoSelecionar()
    } else if (ratigueya.checked == true) {
        ocultarMascota.style.display = 'none'

        ocultarAtaque.style.display = 'block'
        mascotaSelecionada.innerHTML = 'Ratigueya'
        imagenMascota.setAttribute("src", "https://simp6.jpg.church/images/Criatura38867b5557f90ae32.png")
        mascotaEnemigoSelecionar()
    } else {
        alert("No selecionaste nada, seleciona tu mascota")
    }
}

function mascotaEnemigoSelecionar() {
    let mascotaAleatoria = aletorio(1,3)
    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = 'EL Hipodoge'
        imagenMascotaJugador.setAttribute("src", "https://simp6.jpg.church/images/Criatura1ef2057ad22a11bf7.png");
    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'EL Capipepo'
        imagenMascotaJugador.setAttribute("src", "https://simp6.jpg.church/images/Criatura2b21aadb89e39dc36.png");
    } else if (mascotaAleatoria == 3) {
        mascotaEnemigo.innerHTML = 'La Ratigueya'
        imagenMascotaJugador.setAttribute("src", "https://simp6.jpg.church/images/Criatura38867b5557f90ae32.png") }
}

function ataqueFuego() {
    ataqueJugador = 'Batazo'
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Escobazo'
    ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Covid'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    let ataqueAleatorio = aletorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueRival = 'Batazo'
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'Escobazo'
    } else if (ataqueAleatorio == 3) {
        ataqueRival = 'Covid'
    }

    combate(ataqueJugador, ataqueRival)
}

function combate(jugador, pc) {
    
    if (jugador == pc) {
        mensajeJuego('Empate')    
    } else if (jugador == 'Escobazo' && pc == 'Batazo' || jugador == 'Covid' && pc == 'Escobazo' || jugador == 'Batazo' && pc == 'Covid') {
        mensajeJuego('Ganaste, pero no el amor de ella.')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo + corazonesVidas(vidasEnemigo)
    } else {
        mensajeJuego('Perdiste que verguenza das.')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador + corazonesVidas(vidasJugador)
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        mensajeFinal('Deberias sentirte mal mataste una mascota virtual')
        ocultarReinicio.style.display = 'block'
    } else if (vidasJugador == 0) {
        mensajeFinal('Deberias sentirte mal una pc te gano')
        ocultarReinicio.style.display = 'block'
    } else {

    }
}

function mensajeJuego(resultado) {
    resultadoBatalla.innerHTML = resultado
    tuAtaque.innerHTML = ataqueJugador
    elAtaqueEnemigo.innerHTML = ataqueRival
}

function mensajeFinal(mensaje) {
    resultadoBatalla.innerHTML = mensaje
    tuAtaque.innerHTML = ' '
    elAtaqueEnemigo.innerHTML = ' '
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function corazonesVidas(nCorazones) {
    let corazones

    if (nCorazones == 1) {
        corazones = '❤️'
    } else if(nCorazones == 2) {
        corazones = '❤️❤️'
    }    else if(nCorazones == 3){
        corazones = '❤️❤️❤️'
    } else {
        corazones = ''
    }

    return corazones
}

function aletorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function funcionesExtas() {
    var radios = document.querySelectorAll('.miAnimal');

radios.forEach(function(radio) {
  var input = radio.querySelector('input[type="radio"]');
  
  input.addEventListener('change', function() {
    radios.forEach(function(radio) {
      radio.classList.remove('seleccionado');
    });
    
    if (input.checked) {
      radio.classList.add('seleccionado');
    }
  });
});

}

window.addEventListener('load', iniciarjuego)
window.addEventListener('load', funcionesExtas)