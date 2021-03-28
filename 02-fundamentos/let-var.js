var nombre = "Wolveine"

if (true) {
    var nombre = "Magneto"
}
var nombre = "Wolveine1"
var nombre = "Wolveine2"
var nombre = "Wolveine3"
var nombre = "Wolveine4"

console.log(nombre);

let nombre2 = "Wolveine1"
/* Las varoables declaradas con let no se pueden volver a a incializar */
nombre2 = "Wolveine2"
nombre2 = "Wolveine3"
nombre2 = "Wolveine4"
if (true) {
    let nombre2 = "Magneto"
}

console.log(nombre2);

for (var i = 0; i <= 5; i++){
    console.log(`i: ${i}`);
}
console.log(i);// IMPRIME 6

let j = "Hola Mundo"; // Si se pone est linea no hay error por que ya se inicializo

for (let j = 0; j <= 5; j++){
    console.log(`i: ${j}`);
}
console.log(j); // ERROR NO EXISTE EN EL SCOPE
