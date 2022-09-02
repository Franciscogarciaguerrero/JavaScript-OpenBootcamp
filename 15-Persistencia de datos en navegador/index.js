const name = "Francisco"
const surname = "Garcia"
const dni = {
    name,
    surname
}

localStorage.setItem(dni, JSON.stringify(dni))
console.log(JSON.parse(localStorage.getItem(dni)))
sessionStorage.setItem(dni, JSON.stringify(dni))

const twoMin = new Date()

document.cookie = `dni=${JSON.stringify(dni)};expires=${new Date(twoMin.getTime()+ 2 * 60000)}`
