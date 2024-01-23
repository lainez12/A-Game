//console.log("Hijo de tu madre")
const express = require("express");

const app = express();
app.get("/",(req, res) => {
    res.send("Hola");
})

app.listen(8080, () => {
    console.log("El servidor ha comenzado")
} )