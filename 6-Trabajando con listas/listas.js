const lista = ["fanta", "arroz", "pollo", "queso", "pan"]
lista.push("aceite de girasol")
console.log(lista)
lista.pop("")
console.log(lista)
//Una lista de tus 3 películas favoritas 
//(objetos con propiedades: titulo, director, fecha)
const pelis = [
    {
       titulo: "harryPotter",
       director: "Mike Newell",
       fecha: new Date(2005, 11, 18)

    },
    {
        titulo: "Interestellar",
        director: "Christopher Nolan",
        fecha: new Date(2014, 11, 7) 
    },
    {
        titulo: "Never Back Down",
        director: "Jeff Wadlow",
        fecha: new Date(2008, 4, 18) 
    }
]
const  pelisNuevas = pelis.filter(obj => obj.fecha > new Date(2010, 0, 1))
console.log(pelisNuevas)

const directores = pelis.map(dir => dir.director)
console.log(directores)

const titulos = pelis.map(tit => tit.titulo)
console.log(titulos)

const infoPelis = titulos.concat(directores)
console.log(infoPelis)

const infoPelisPropagacion = [...titulos, ...directores]
console.log(infoPelisPropagacion)