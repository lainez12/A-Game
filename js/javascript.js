let botonMascotaJugador = document.getElementById('boton-mascota')
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')
let ocultarAtaque = document.getElementById('selecionar-ataque')
let ocultarReinicio = document.getElementById('reinicio')
let botonReiniciar = document.getElementById('boton-reiniciar')

let hipodege = document.getElementById('hipodege')
let capipepo = document.getElementById('capipepo')
let ratigueya = document.getElementById('ratigueya')
let mascotaSelecionada = document.getElementById('mascota-selecionada')
let imagenMascota = document.getElementById('imgAnimal')

let ocultarMascota = document.getElementById('selecionar-mascota')

let mascotaEnemigo = document.getElementById('mascota-enemigo')
let imagenMascotaJugador = document.getElementById('imgEnemigo')

let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

let resultadoBatalla = document.getElementById('resultados')
let tuAtaque = document.getElementById('name-Ataque-Jugador')
let elAtaqueEnemigo = document.getElementById('name-Ataque-Enemigo')

let ataqueJugador
let ataqueRival
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego() {
    botonMascotaJugador.addEventListener('click', selecionMascota)

    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    ocultarAtaque.style.display = 'none'

    ocultarReinicio.style.display = 'none'

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionMascota() {
    if (hipodege.checked == true) {
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
        mascotaEnemigo.innerHTML = 'EL Hipodege'
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