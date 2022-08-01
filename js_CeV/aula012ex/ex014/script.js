function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 17 //data.getHours()
    msg.innerText = `Agora são ${hora} horas!`
    if (hora >= 0 && hora <= 12) {
        foto.src = '../ex014/img/fotomanha.png'
        document.body.style.background = '#efb764'
    } else if (hora >= 12 && hora < 18) {
        foto.scr = '../ex014/img/fototardecopy.png'
        document.body.style.background = '#dfbf92'
    } else {
        foto.src = '../ex014/img/fotonoite.png'
        document.body.style.background = '#2a445d'
    }
}