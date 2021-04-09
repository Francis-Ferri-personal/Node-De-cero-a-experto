const express = require("express");
require("./hbs/helpers");

const port = process.env.PORT || 3000;
const app = express();

const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');


app.get("/", (req, res) => {
    res.render("home.hbs",{
        nombre: "francis"
    });
});

// anio: new Date().getFullYear()

app.get("/about", (req, res) => {
    res.render("about.hbs");
});

//{anio: new Date().getFullYear()}
/* app.get("/", (req, res) => {
    // res.send("<h1>Hola Mundo!</h1>");
    const salida = {
        nombre: "Francis",
        edad: 23,
        url: req.url
    };
    res.send(salida);
});

app.get("/data", (req, res) => {
    res.send("<h1>Hola Data!</h1>");
}); */


app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));

