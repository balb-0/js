var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('Pode votar ou não')
} else if (idade >= 18) {
    console.log('Voto Obrigatório')
} 