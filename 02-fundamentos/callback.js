setTimeout(()=> console.log("Hola mundo"), 3000);

const getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Francis",
        id,
    }
    if (id == 20)
        callback(`El suaurio con ${id} no existe en la bas de datos`);
    else
        callback(null, usuario);
};

getUsuarioById(10, (err, usuario) => {
    if (err)
       return  console.log(err) 
    console.log("Usuario de base  de datos" , usuario)
});