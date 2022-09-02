let boton = document.getElementById("boton")

boton.addEventListener("click", () => alert("has hecho click en el boton"))


$("button").click(() => {
    console.log("Hola, estoy utilizando jQuery")
})
