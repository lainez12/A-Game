let ataqueJugador
let ataqueRival
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionMascota)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function selecionMascota() {
    let hipodege = document.getElementById('hipodege')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let mascotaSelecionada = document.getElementById('mascota-selecionada')
    if (hipodege.checked == true) {
        mascotaSelecionada.innerHTML = 'Hipodege'
    } else if (capipepo.checked == true) {
        mascotaSelecionada.innerHTML = 'Capipepo'
    } else if (ratigueya.checked == true) {
        mascotaSelecionada.innerHTML = 'Ratigueya'
    } else {
        alert("No selecionaste nada, seleciona tu mascota")
    }

    mascotaEnemigo()
}

function mascotaEnemigo() 
{
    let mascotaAleatoria = aletorio(1,3)
    let mascotaEnemigo = document.getElementById('mascota-enemigo')
    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = 'EL Hipodege'
    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'EL Capipepo'
    } else if (mascotaAleatoria == 3) {
        mascotaEnemigo.innerHTML = 'La Ratigueya' }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    let ataqueAleatorio = aletorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueRival = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'Agua'
    } else if (ataqueAleatorio == 3) {
        ataqueRival = 'Tierra'
    }

    combate(ataqueJugador, ataqueRival)
}

function combate(jugador, pc) {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if (jugador == pc) {
        mensajeJuego('Empate')    
    } else if (jugador == 'Agua' && pc == 'Fuego' || jugador == 'Tierra' && pc == 'Agua' || jugador == 'Fuego' && pc == 'Tierra') {
        mensajeJuego('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        mensajeJuego('Perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
}

function mensajeJuego(resultado) {
    let contenedorMensaje = document.createElement('p')
    let mensaje = document.createTextNode('Tu escogieste atacar con ' + ataqueJugador + ' y el enemigo ataco con ' + ataqueRival + ' ' + resultado)
    contenedorMensaje.appendChild(mensaje)
    let ubicacionMensaje = document.getElementById('mensajes')
    ubicacionMensaje.appendChild(contenedorMensaje)
}

function aletorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarjuego)