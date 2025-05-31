function contar() {
    let inicio = document.getElementById("ini");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("pas");
    let res = document.getElementById("res");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO, Preencha os campos corretamente!');
        res.innerHTML = 'Impossível contar!';
        res.style.backgroundColor ='red';
        res.style.color = 'white';
    } else {
        res.innerHTML = 'Contando...';
        let i = Number(inicio.value)// Pega o valor do campo de início
        let f = Number(fim.value)// Pega o valor do campo de fim
        let p = Number(passo.value)// Pega o valor do campo de passo

        if(p <=0) {// Verifica se o passo é menor ou igual a zero
            alert('Passo inválido! Considerando passo 1');
            p = 1;// Se for, define o passo como 1
        }

        if(i < f) {
            // Contagem crescente
             for( let c = i; c <= f; c += p) {// Se o início for menor que o fim, faz a contagem crescente
        
                 res.innerHTML += `${c} \u{1F449} `;
             }
        } else {
            // Contagem decrescente

            for( let c= i; c >= f; c-=p) {// Se o início for maior que o fim, faz a contagem decrescente
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
            res.innerHTML += `\u{1F3C1}`;
    }

}