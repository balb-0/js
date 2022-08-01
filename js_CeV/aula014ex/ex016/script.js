function contar() {
    var ini = window.document.getElementById('numinicio')
    var fim =  window.document.getElementById('numfinal')
    var passo = window.document.getElementById('numpasso')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerText = 'Impossível contar!'
        window.alert('ERRO! FALTAM INFORMAÇÕES!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p) {
                res.innerText += ` ${c}`
            }
        } else {
            for (let c = i; c >= f; c -= p)
                res.innerText += ` ${c}`
        }
        res.innerText += '!'
    }
}