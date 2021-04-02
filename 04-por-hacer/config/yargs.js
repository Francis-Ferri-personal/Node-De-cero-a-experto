const descripcion = {
    demand: true,
    alias: "d",
    desc: "Marca como completado o penmdiente la tarea"
};

const completado = {
    alias: "c",
    default: true
};

const argv = require("yargs")
    .command("listar", "Listar las tareas que existen", {
        completado: {
            alias: "c",
            default: false
        }
    })
    .command("crear", "Crear un elemento por hacer",{
        descripcion
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Borra una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = {argv};