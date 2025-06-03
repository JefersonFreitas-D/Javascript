let num = document.getElementById('num')
let sel = document.getElementById('val')
let res = document.getElementById('result')
let valores = []

function jaExiste(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    if (Numero(num.value) && !jaExiste(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        num.value = ''
       

    sel.appendChild(item)
    res.innerHTML = ''
    } else {
        alert('Valor inválido ou já existe')
    }
     num.focus()
}

function finalizar () {
    if(valores.length == 0){
        alert('Nenhum valor digitado, por favor insira algum valor')
    }else{
        let tot = valores.length
         let maior = valores[0]
        let menor = valores [0]
        for(let pos in valores) {
            if(valores[pos]> maior)
                maior = valores[pos]

        if(valores[pos < menor]) menor = valores[pos]
        }

        res.innerHTML= ''
        res.innerHTML =
            `Ao todo temos ${tot} números cadastrados`
            res.innerHTML +=     `O maior valor é ${maior}.`
            res.innerHTML +=     `O menor valor é ${menor}.`
    }
}