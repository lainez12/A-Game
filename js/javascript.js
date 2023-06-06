function iniciarjuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionMascota)
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
}

window.addEventListener('load', iniciarjuego)