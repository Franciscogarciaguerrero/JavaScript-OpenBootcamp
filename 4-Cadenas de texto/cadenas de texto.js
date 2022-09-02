const nombre = "Francisco"
const apellido = "Garcia"
const estudiante = nombre.concat(" ").concat(apellido)

console.log(estudiante)

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMayus)
console.log(estudianteMinus)

const tamañoCadena = estudiante.length
console.log(tamañoCadena)

const primeraLetra = nombre.slice(0, 1)
console.log(primeraLetra)

const ultimaLetra = apellido.slice(-1)
console.log(ultimaLetra)

const estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)

const nombreIncluido = estudiante.includes(nombre)
console.log(nombreIncluido)