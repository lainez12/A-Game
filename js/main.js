// main.js
// Importa las funciones desde los archivos correspondientes
import { iniciarjuego } from './juego.js';
import { animalSelectionColor } from './styles.js';

// Agrega los eventos después de que la página se carga
window.addEventListener('load', iniciarjuego);
window.addEventListener('load', animalSelectionColor);
