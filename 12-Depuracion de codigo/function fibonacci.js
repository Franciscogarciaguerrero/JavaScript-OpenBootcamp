function fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let secuencia = [1, 1]
    for (let i = 2; i < num; i++){
        secuencia.push(secuencia[i - 1] + secuencia[i - 2])
    }
    return secuencia;
}

console.log(fibonacci(15))
