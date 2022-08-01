function calcular() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tabuada')   
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        var n = Number(num.value) 
        tab.innerHTML = ''
        for (var x = 1; x <= 10; x++) {
            var item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            tab.appendChild(item)
        }
    }
}