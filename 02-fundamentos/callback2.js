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

const  getEmpleadoID = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB){
        callback(`No existe n empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
        return empleadoDB
    }
};

const empleado = getEmpleadoID(1, (err, empleado) => {
        if (err){
            console.log(err);
        }else{
            console.log(empleado);
        }
    }
);

const getSalario = (empleado, callback) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB){
        callback(`No se logro encontrar el salario de elmpelado ${empleado.nombre}`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
} 


getSalario(empleado, (err, resp)=> {
    if(err){
        return console.log(err);
    } else {
        console.log(resp);
    }
});

 getEmpleadoID(2, (err, empleado) => {
    if (err){
        return console.log(err);
    }
    getSalario(empleado, (err, resp)=> {
        if(err){
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    });
    }
);