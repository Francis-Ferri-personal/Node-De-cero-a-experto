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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id);
        empleado? resolve(empleado) : reject(`No se encontró el empleado con el ID ${id}`);
    });
}

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(salario => salario.id === empleado.id);
        const resp = {...salario};
        resp.nombre = empleado.nombre;
        salario? resolve(resp) : reject(`No se encontro el salario de ${empleado.nombre}`);
    })
};

/* getEmpleado(2)
    .then((empleado) => {
        getSalario(empleado)
            .then(resp => console.log(`El salario de ${empleado.nombre} es de $${resp.salario}`))
            .catch(console.log)
    })
    .catch(console.error) */

    getEmpleado(1)
        .then(empleado => getSalario(empleado))
        .then(resp => console.log(`El salario de ${resp.nombre} es de $${resp.salario}`))
        .catch(console.warn)


