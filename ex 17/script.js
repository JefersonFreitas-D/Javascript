function calcular () {
    let num = document.getElementById("num");
    let seltab = document.getElementById("tabuada");
    if(num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        // Limpa a tabela antes de adicionar novos valores
        seltab.innerHTML = ''; 

        for(let c = 1; c<=10;) {// Loop para calcular a tabuada de 1 a 10
            let item =document.createElement('option'); // Cria um novo elemento option
            item.text = `${n} x ${c} = ${n*c}`;// Define o texto do option
            item.value = `tab${c}`; // Define o valor do option
            seltab.appendChild(item);// Adiciona o option à tabela
            c++;// Incrementa o contador
         
        }
    }

}