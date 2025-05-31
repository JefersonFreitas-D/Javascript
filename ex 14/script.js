function carregar() {// Função para carregar a hora e a imagem correspondente
let h = document.getElementById("hora");// Obtém o elemento onde a hora será exibida
let img = document.getElementById("dia");// Obtém o elemento da imagem
let data = new Date();// Cria um objeto de data para obter a hora atual
let hora = data.getHours();// Obtém a hora atual
h.innerHTML = `Agora são ${hora} horas.`;// Exibe a hora atual no elemento h
if (hora >= 0 && hora < 12) {// Verifica se a hora está entre 0 e 12 (manhã)
    img.src = "dia.png";// Define a imagem para o período da manhã
    document.body.style.background = "yellow";
    document.main.style.background = "yellow";


} else if (hora >= 12 && hora < 18) {// Verifica se a hora está entre 12 e 18 (tarde)
    img.src = "tarde.png";// Define a imagem para o período da tarde
    document.body.style.background = "orange";
    document.main.style.background = "orange";

} else {
    img.src = "noite.png";// Define a imagem para o período da noite
    document.body.style.background = "darkblue";
    document.main.style.background = "darkblue";

} }
