/* function sumar(a, b) {
    return a + b;
} */
const sumar = (a, b) => a + b;

/* function saludar(){
    return "Hola mundo";
} */

const saludar = () => "hola mundo";
const saludar2 = nombre => `hola mundo ${nombre}`;

console.log(sumar(10, 20));
console.log(saludar());
console.log(saludar2("Francis"));

let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    },
    pets: {
        gato: "Misifus",
        dog: "Dende" 
    }
};

console.log(deadpool.getNombre())