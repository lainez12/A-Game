function animalSelectionColor() {
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

function pasarAcombate() {
  //Toda la parte HTML del combate
  const ocultarAtaque = document.getElementById('selecionar-ataque');
  ocultarAtaque.style.display = 'block';
}

function pasarAmapa(){
  const ocultarMascota = document.getElementById('selecionar-mascota');
  ocultarMascota.style.display = 'none';
  const sectionVerMapa = document.getElementById('ver-mapa');
  sectionVerMapa.style.display = 'block';
}

function addAnimalesHTML(arrayAnimales) {
  const lasMascotas = document.getElementById('lasMascotas');
  for (let i = 0; i < arrayAnimales.length; i++) {
      let element = arrayAnimales[i];
      let cadaAnimal = `
      <div class="mascota">
              <label for=${element.nombre} class="miAnimal">
                  <figure class="mascotaImg">
                      <img src=${element.foto} alt=${element.nombre}>
                  </figure>
                  ${element.nombre}
                  <input type="radio" name="mascota" id=${element.nombre} />
              </label>
      </div>
      `;
      //Modificando el HTML
      lasMascotas.innerHTML += cadaAnimal;
  }
}

//Cada Animal tiene un podere diferentes
function mostrarAtaques(ataques) {
  const botonesAtaque = document.getElementById('botones-ataques');
  ataques.forEach((ataque) => {
      let ataqueHtml = `
      <button id=${ataque.id} class="botonesAtaque">${ataque.nombre}</button>
      `;
      botonesAtaque.innerHTML += ataqueHtml;
  });

  //Seleccionar botones luego de crearlos
  return document.querySelectorAll('.botonesAtaque');
  // Agregar evento a los botones
}

function mostrarMascotaEnemigo(animalEnemigo) {
  const mascotaEnemigo = document.getElementById('mascota-enemigo');
  const imagenMascotaJugadorEnemigo = document.getElementById('imgEnemigo');
  mascotaEnemigo.innerHTML = animalEnemigo.nombre;
  imagenMascotaJugadorEnemigo.setAttribute("src", animalEnemigo.foto);
}

function mensajeFinal(mensaje) {
  //Parte HTML para mostrar que la partida termino
  const ocultarReinicio = document.getElementById('reinicio');
  ocultarReinicio.style.display = 'block';
  console.log(ocultarReinicio);
  const ganadorMensaje = document.getElementById('ganadorMensaje');
  const mensajeFinalStyles = document.getElementById('mensajeFinal');
  ganadorMensaje.innerHTML = mensaje;
  mensajeFinalStyles.setAttribute("style", "display: grid; backdrop-filter: blur(5px); background-color:#7969698f; width: 100% ");
}

// Exporta la función para que pueda ser importada en otros archivos
export { mostrarAtaques };
export { pasarAmapa };
export { animalSelectionColor};
export { addAnimalesHTML };
export { mostrarMascotaEnemigo };
export { pasarAcombate };
export { mensajeFinal };