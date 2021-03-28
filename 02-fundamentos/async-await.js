/* 
Async Await
*/

/* const getNombre = async () => {
    throw new Error("No existe un nombre para ese usuario");
    return "Fernando"
};
 */

const getNombre = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fernando");
        }, 3000); 
    })
};

const saludo = async () => {
    try {
        const nombre = await getNombre();
        return `Hola ${nombre}`;
    } catch (error) {
        console.log(error);
    }
}

saludo()
    .then(console.log)
    .catch(console.log);




