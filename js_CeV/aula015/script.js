let num = [5, 8, 9, 2, 0]
num[5] = 7
num.push(2)
num.length // para mostrar a quantidade de elementos de um array
num.sort() // para organizar em ordem numerica


console.log(num)
console.log(`Nosso array tem ${num.length}`)

let numero = [1, 4, 5, 8, 9]
let pos = numero.indexOf(8) 
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 se encontra na posição ${pos}`)
}