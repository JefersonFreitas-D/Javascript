function contar() {
    let inicio = document.getElementById("ini").value;
    let fim = document.getElementById("fim").value;
    let passo = document.getElementById("pas").value;
    let res = document.getElementById("res");

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert("ERRO, Preencha os campos corretamente!");
    } 
}