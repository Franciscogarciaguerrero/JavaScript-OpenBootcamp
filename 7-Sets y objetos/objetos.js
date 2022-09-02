const yo = {
    nombre: "Francisco",
    apellido: "Garcia",
    edad: 23,
    altura: 180,
    eresDesarrollador: true
}
console.log(yo)

const edad = "edad"
console.log(yo[edad])

const trio =[
    {...yo
    },{
        nombre: "Juan",
        apellido: "Perez",
        edad: 24,
        altura: 177,  
    },{
        nombre: "Alvaro",
        apellido: "Torres",
        edad: 21,
        altura: 180,  
    }
];
console.log(trio)
const ordenado = trio.sort((a, b) =>b.edad - a.edad )
console.log(ordenado)
