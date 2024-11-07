export function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );
    mascotaJugadorObjeto.pintarMokepon(lienzo);

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon(lienzo);
        revisarColision(mokepon);
    });
}
