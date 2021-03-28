let empleados = [{
    id: 1,
    nombre: "Francis"
},
{
    id: 2,
    nombre: "Melisa"
},
{
    id: 3,
    nombre: "Juan"
}];

let salarios = [{
    id:1,
    salario: 1000
},{
    id:2,
    salario:2000
}];

const getEmpleado = async (id) => {
    const empleado = empleados.find(empleado => empleado.id === id);
    if (!empleado){ return empleado };
    throw new Error(`No se encontró el empleado con el ID ${id}`);
}

const getSalario = async (empleado) => {
    const salario = salarios.find(salario => salario.id === empleado.id);
    if (!salario) {
        throw new Error(`No se encontro el salario de ${empleado.nombre}`);
    };
    return {...salario, nombre:empleado.nombre}
};

const getInformacion = async (id) => {
        const empleado = await getEmpleado(id);
        const resp = await getSalario(empleado);
        return `El salario de ${resp.nombre} es de $${resp.salario}`
}

getInformacion(2)
    .then(console.log)
    .catch(console.log);

