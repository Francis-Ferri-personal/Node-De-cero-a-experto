const argv  = require("yargs")
.options({
    direccion: {
        desc: "Direccion de la ciudad para obtener el cclima",
        alias: "d",
        demand: true
    }
}).argv;

module.exports = {argv};
    