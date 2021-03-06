const argv = require("./config/yargs").argv;
var colors = require('colors/safe');

const porHacer = require("./por-hacer/por-hacer");

let comando = argv._["0"];

switch(comando){
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case "listar":
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado) {
            console.log(colors.green('=========Por Hacer=========='));
            console.log(tarea.descripcion)
            console.log("Estado: ", tarea.completado)
            console.log(colors.green("============================"));
        }
    break;
    case "actualizar":
        const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
    break;
    case "borrar":
        const borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
        console.log("comando no es reconocido");
    break;

}