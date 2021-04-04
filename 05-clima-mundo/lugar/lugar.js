const axios = require('axios');

const getDataCovid = async (direccion) => {
    const instance = axios.create({
        baseURL: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
        headers: { 'x-rapidapi-key': '3a81eef788msh1b18a8d24b7b00dp1f917djsnfa35b54664cc',
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'},
        params: {country: direccion}
    });
    
    const resp = await instance.get();
    if (resp.data === 0 ){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.data;
    const recuperados = data.recovered;
    const muertos = data.deaths;
    const confirmados = data.confirmed;

    return {
        recuperados,
        muertos,
        confirmados
    }
}

module.exports = {getDataCovid}