const {argv} = require("./config/yargs");
const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

/* 
let base = "5"; */

comando = argv._[0];
switch(comando){
  case 'listar':
    listarTabla(argv.base, argv.limite);
  break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then (archivo => console.log(`Archivo creado ${colors.yellow(archivo)}`))
      .catch(console.log) 
    break;
  default:
    console.log("Comando no recconocido");
  break;
}
// let argv2 = process.argv;npm install colors
/* let parametro = argv[2];
let base = parametro.split("=")[1]; */

// console.log("Base: ", argv.base);
// console.log("Limite: ", argv.limite);

/* crearArchivo(base)
  .then (archivo => console.log(`Archivo creado ${archivo}`))
  .catch(console.log) */