function carregar() {
let h = document.getElementById("hora");
let img = document.getElementById("dia");
let data = new Date();
let hora = data.getHours();
h.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    img.src = "dia.png";
    document.body.style.background = "yellow";
    document.main. style.background = "yellow";


} else if (hora >= 12 && hora < 18) {
    img.src = "tarde.png";
    document.body.style.background = "orange";
    document.main.style.background = "orange";

} else {
    img.src = "noite.png";
    document.body.style.background = "darkblue";
    document.main.style.background = "darkblue";

} }
