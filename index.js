const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id;
    this.ultimoMovimiento = Date.now(); // Guardar el momento actual
  }

  asignarMokepon(mokepon) {
    this.mokepon = mokepon
  }

  actualizarPosicion(x, y) {
    this.x = x;
    this.y = y;
    this.ultimoMovimiento = Date.now(); // Actualizar el último momento de movimiento
  }

  asignarAtaques(ataques) {
    this.ataques = ataques
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)

  jugadores.push(jugador)

  console.log(id)

  res.setHeader("Access-Control-Allow-Origin", "*")
  
  res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const nombre = req.body.mokepon || ""
  const mokepon = new Mokepon(nombre)
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarMokepon(mokepon)
  }
  
  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const x = req.body.x || 0
  const y = req.body.y || 0

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }

  const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

  res.send({
    enemigos
  })
})

app.post("/mokepon/:jugadorId/ataques", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const ataques = req.body.ataques || []
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarAtaques(ataques)
  }

  res.end()
})

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
  res.send({
    ataques: jugador.ataques || []
  })
})

app.post("/salirse/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || "";
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);
  if (jugadorIndex >= 0) {
    jugadores.splice(jugadorIndex, 1);
  } else {
    console.log('no se encontro el id del jugador para sacarlo');
  }
  res.end();
});

// Función para revisar jugadores inactivos
function revisarJugadoresInactivos() {
  const ahora = Date.now();
  const tiempoInactivo = 5 * 60 * 1000; // 5 minutos en milisegundos

  jugadores.forEach((jugador, index) => {
    if (ahora - jugador.ultimoMovimiento > tiempoInactivo) {
      jugadores.splice(index, 1);
      console.log(`Jugador ${jugador.id} eliminado por inactividad`);
    }
  });
}

// Revisar jugadores inactivos cada minuto
setInterval(revisarJugadoresInactivos, 30 * 1000);

app.listen(8080, () => {
  console.log("Servidor funcionando")
})
