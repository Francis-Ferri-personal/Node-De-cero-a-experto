let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    },
    pets: {
        gato: "Misifus",
        dog: "Dende" 
    }
};
console.log(deadpool.getNombre());

const {nombre:nombresito, apellido, poder, pets:{gato:cat, dog}} = deadpool;

console.log(nombresito, apellido, poder, cat, dog);