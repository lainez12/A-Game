import { aleatorio } from "./functionsGeneral.js";
export class Animal {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 100;
        this.alto = 80;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = this.foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    
    pintarAnimal(lienzo) {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            )
    }
    
    moverDerecha() {
        this.velocidadX = 5
    }
    
    moverIzquierda() {
        this.velocidadX = -5
    }
    
    moverAbajo() {
        this.velocidadY = 5
    }
    
    moverArriba() {
        this.velocidadY = -5
    }
    
    detenerMovimiento() {
        this.velocidadX = 0
        this.velocidadY = 0
    }
}



function traducionAtaques(arrayAtaques) {
    let dicionario = {
        '🪓️' : 1,
        '🏏️' : 2,
        '🪨️' : 3,
        '🧹️' : 1,
        '🦠️' : 2,
        '🪰️' : 3,
        '👅️' : 1,
        '🕸️' : 2,
        '🦷️' : 3
   }
    let array = [arrayAtaques.length];
    for (let i = 0; i < arrayAtaques.length; i++) {
        array[i] = dicionario[arrayAtaques[i]]; 
    }
    return array;
}

export { traducionAtaques };