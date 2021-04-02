const fs = require("fs");

let listadoPorHacer = [];

const caragarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const guaradarDB = () => {
    const data = JSON.stringify(listadoPorHacer);
    fs.writeFileSync("db/data.json", data , (err) => {
        if (err) throw new Error("No se pudo escribr el archivo");
    });
};

const crear = (descripcion) => {
    caragarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guaradarDB();
    return porHacer;
}

const getListado = (completado) => {
    caragarDB();
    if (completado){
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.completado === true);
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) => {
    caragarDB();
    const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0){
        listadoPorHacer[index].completado = !!completado;
        guaradarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    caragarDB();

    /* const nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guaradarDB();
        return true;
    }; */
    const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0 ){
        listadoPorHacer.splice(index, 1);
        guaradarDB();
        return true;
    }else {
        return false;
    }
}


module.exports = {crear, getListado, actualizar, borrar};