function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formi = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (formi.value.length == 0 || formi.value > 2022) {
        window.alert('INVÁLIDO, TENTE NOVAMENTE')
    } else {
        var formsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formi.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id',  'foto')
        if (formsex[0].checked) {
            gen = 'Homem'
            if (idade > 0 && idade <= 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (formsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else if (idade > 50) {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.innerText = `Sua idade é ${idade} anos e você é ${gen}`
        res.appendChild(img)
    }
    
}