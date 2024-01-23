import { pasarAmapa } from "./styles.js";
import { mascotaEnemigoSelecionar } from "./juego.js";
const mapa = document.getElementById('mapa');
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image(); //al inicio
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 550;
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}
let intervalo
mapaBackground.src = '../imgs/mokemap.png'; //al inicio
alturaQueBuscamos = anchoDelMapa * 600 / 800;
mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;
let tuAnimalj;


function mostrarMapa(tuAnimal,animalEnemigo,arrayAnimales) {
    pasarAmapa();
    tuAnimalj = tuAnimal;
    iniciarMapa(animalEnemigo,arrayAnimales);
}

function iniciarMapa(animalEnemigo,arrayAnimales) {
    console.log(tuAnimalj);
    intervalo = setInterval(pintarCanvas(animalEnemigo,arrayAnimales), 50)
    window.addEventListener('keydown', sePresionoUnaTecla())
    window.addEventListener('keyup', detenerMovimiento())
}

export { iniciarMapa };

function pintarCanvas(animalEnemigo,arrayAnimales) {
    tuAnimalj.x = tuAnimalj.x + tuAnimalj.velocidadX
    tuAnimalj.y = tuAnimalj.y + tuAnimalj.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    tuAnimalj.pintarAnimal(lienzo)
    arrayAnimales.forEach(animal => {
        animal.pintarAnimal(lienzo);
    });
    if (tuAnimalj.velocidadX !== 0 || tuAnimalj.velocidadY !== 0) {
        arrayAnimales.forEach(animal => {
            revisarColision(animal);
        });
    }
}



function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    tuAnimalj.detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    mascotaEnemigoSelecionar(enemigo)
}





function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            tuAnimalj.moverArriba()
            break
        case 'ArrowDown':
            tuAnimalj.moverAbajo()
            break
        case 'ArrowLeft':
            tuAnimalj.moverIzquierda()
            break
        case 'ArrowRight':
            tuAnimalj.moverDerecha()
            break
        default:
            break
    }
}

export {mostrarMapa};