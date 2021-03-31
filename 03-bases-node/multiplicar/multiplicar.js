// requires
/* const fs = require('fs'); */
/* const fs = require('express'); */
/* const fs = require('./fs'); */
const fs = require('fs');
require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('======================='.green);
    console.log('tabbla de ${base}'.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${2*i}`);
    };
};

/* module.exports.crearArchivo = ( base )=> { */
const crearArchivo = ( base, limite = 10 )=> {

    return new Promise((resolve, reject)=> {

        if(!Number(base)){
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${2*i}\n`;

        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if 
            (err) reject(err)
        else 
            resolve(`tabla-${base}.txt`)

        });
    })
} 

module.exports = {
    crearArchivo,
    listarTabla
};