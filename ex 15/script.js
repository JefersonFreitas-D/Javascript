function verificar() {
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("ano").value;
  let res= document.getElementById("res");
  if(fano.length == 0 || Number(fano.value) > ano) {
    alert("Verifique os dados e tente novamente!");
  } else { 
   let fsex = document.getElementsByName("sex");
   let idade = ano - Number(fano);
   res.innerHTML = `Idade calculada, sua idade é ${idade} anos. |`;
   let genero = "";
   if(fsex[0].checked) {
     genero = "Homem";
     if(idade <= 2) {
        img.setAttribute("src", "bebe-H.png");
     } else if (idade <= 15) {
        img.setAttribute("src", "crianca-H.png");
     } else if(idade > 15 && idade <18) {
        img.setAttribute("src", "jovem-H.png");
     } else if(idade >=18 && idade < 60) {
        img.setAttribute("src", "adulto-H.png");
     }else if(idade >= 60) {
        img.setAttribute("src", "idoso-H.png");
     }
    
    }


     else if(fsex[1].checked) {
     genero = "Mulher";
        if(idade <= 2) {
        img.setAttribute("src", "bebe-M.png");
     } else if (idade <= 15) {
        img.setAttribute("src", "crianca-M.png");
     } else if(idade > 15 && idade <18) {
        img.setAttribute("src", "jovem-M.png");
     } else if(idade >=18 && idade < 60) {
        img.setAttribute("src", "adulto-M.png");
     }else if(idade >= 60) {
        img.setAttribute("src", "idoso-M.png");
     }
   }
  
   res.style.textAlign = "center";
   res.innerHTML += ` Você é um (a): ${genero}`;
    res.appendChild(img);
  }
}