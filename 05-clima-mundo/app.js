const covid = require("./lugar/lugar");
const argv = require("./config/yargs").argv;
const clima = require("./clima/clima");

covid.getDataCovid(argv.direccion)
    .then(console.log)
    .catch(console.log)

clima.getClima(35, 139)
    .then(console.log)
    .catch(console.log)

const getInfo = async (direccion) => {
    // Salida
    try {
        const coordenadas = await covid.getDataCovid(direccion);
        const temperatura = await clima.getClima(35, 139);
        return `El clima de ${direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    /* 
    const coordenadas = await covid.getDataCovid(direccion);
    if (!coordenadas){
        throw new Error("No se enecontro la dirección");
    };
    // Aqui se deberia haber hecho con la API pero esta no valia
    const temperatura = await clima.getClima(35, 139);
    if (temperatura){
        return `El clima de ${direccion} es de ${temperatura}`;
    };
    return `No se pudo determinar el clima de ${direccion}`;
    */
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
