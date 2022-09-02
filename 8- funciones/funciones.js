function alwaysTrue() {
    return true;
}
console.log(alwaysTrue())

//async function funcionAsincrona() {
//    return setTimeout(() => console.log("hola soy una promesa"), 5000)
//}
//funcionAsincrona();

function* idGenerator() {
    let id = 0;
    while(true) {
        yield id += 2
    }    
}
const gen = idGenerator(); 
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

