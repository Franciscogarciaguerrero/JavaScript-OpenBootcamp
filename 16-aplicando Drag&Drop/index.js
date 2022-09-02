const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", e => {
        console.log("estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        e.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () =>{
        console.log("ya no estoy arrastrando el párrafo " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", e => {
        e.preventDefault()
        //console.log("Drag Over")
    })

    seccion.addEventListener("drop", e => {
        console.log("Drop")
        const id_parrafo = e.dataTransfer.getData("id")
        //console.log("parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(papelera => {
    papelera.addEventListener("dragover", e => {
        e.preventDefault()
        e.dataTransfer.dropEffect = "copy"
    })

    papelera.addEventListener("drop", e => {
        const id_parrafo = e.dataTransfer.getData("id")
        document.getElementById(id_parrafo).remove()
    })
})