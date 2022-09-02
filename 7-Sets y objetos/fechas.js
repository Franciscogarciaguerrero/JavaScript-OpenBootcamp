const fecha = new Date()
const miCumple = new Date(1999, 8, 6)

const comparacion = fecha > miCumple

console.log(comparacion)

const diaNacimiento = miCumple.getDate();
console.log(diaNacimiento)
const mesNacimiento = miCumple.getMonth() + 1;
console.log(mesNacimiento)
const anyoNacimiento = miCumple.getFullYear();
console.log(anyoNacimiento)