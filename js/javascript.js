let ataqueJugador

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
        alert("No selecionaste nada, selecion tu mascota")
    }

    mascotaEnemigo()
}

function mascotaEnemigo() 
{
    let mascotaAleatoria = aletorio(1,3)
    let mascotaEnemigo = document.getElementById('mascota-enemigo')
    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = 'Hipodege'
    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatoria == 3) {
        mascotaEnemigo.innerHTML = 'Ratigueya' }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    alert('ataqueJugador')
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    alert('ataqueJugador')
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    alert('ataqueJugador')
}

function aletorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarjuego)