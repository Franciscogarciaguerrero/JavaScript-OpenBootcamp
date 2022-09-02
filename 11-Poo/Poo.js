class Estudiante {
    constructor(nombre) {
    this.nombre = nombre
    }
    asignaturas = ["Javascript", "HTML", "CSS"]
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevoEstudiante = new Estudiante("Fran")

console.log(nuevoEstudiante.obtenDatos())
