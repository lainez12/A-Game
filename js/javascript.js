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

    let ocultarAtaque = document.getElementById('selecionar-ataque')
    ocultarAtaque.style.display = 'none'

    let ocultarReinicio = document.getElementById('reinicio')
    ocultarReinicio.style.display = 'none'

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionMascota() {
    let ocultarMascota = document.getElementById('selecionar-mascota')
    ocultarMascota.style.display = 'none'

    let ocultarAtaque = document.getElementById('selecionar-ataque')
    ocultarAtaque.style.display = 'block'

    let hipodege = document.getElementById('hipodege')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let mascotaSelecionada = document.getElementById('mascota-selecionada')
    if (hipodege.checked == true) {
        mascotaSelecionada.innerHTML = 'Hipodoge'
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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
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
        let ocultarReinicio = document.getElementById('reinicio')
        ocultarReinicio.style.display = 'block'
    } else if (vidasJugador == 0) {
        mensajeFinal('Deberias sentirte mal una pc te gano')
        let ocultarReinicio = document.getElementById('reinicio')
        ocultarReinicio.style.display = 'block'
    } else {

    }
}

function mensajeJuego(resultado) {
    let contenedorMensaje = document.createElement('p')
    let mensaje = document.createTextNode('Tu escogieste atacar con ' + ataqueJugador + ' y el enemigo ataco con ' + ataqueRival + ' ' + resultado)
    contenedorMensaje.appendChild(mensaje)
    let ubicacionMensaje = document.getElementById('mensajes')
    ubicacionMensaje.appendChild(contenedorMensaje)
}

function mensajeFinal(mensaje) {
    let contenedorMensaje = document.createElement('p')
    let mensajefinal = document.createTextNode(mensaje)
    contenedorMensaje.appendChild(mensajefinal)
    let ubicacionMensaje = document.getElementById('mensajes')
    ubicacionMensaje.appendChild(contenedorMensaje)
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')
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