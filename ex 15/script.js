function verificar() {
    let img = document.createElement("img");// Cria um elemento de imagem
    img.setAttribute("id", "foto");// Define o id da imagem
  let data = new Date();// Cria um objeto de data para obter o ano atual
  let ano = data.getFullYear();// Obtém o ano atual
  let fano = document.getElementById("ano").value;// Obtém o valor do campo de ano
  let res= document.getElementById("res");
  if(fano.length == 0 || Number(fano.value) > ano) {// Verifica se o campo de ano está vazio ou se o ano é maior que o atual
    alert("Verifique os dados e tente novamente!");
  } else { 
   let fsex = document.getElementsByName("sex");// Obtém os elementos de sexo selecionados
   let idade = ano - Number(fano);// Calcula a idade subtraindo o ano de nascimento do ano atual
   res.innerHTML = `Idade calculada, sua idade é ${idade} anos. |`;
   let genero = "";// Variável para armazenar o gênero
   if(fsex[0].checked) {// Verifica se o primeiro rádio (masculino) está selecionado
     genero = "Homem";
     if(idade <= 2) {// Verifica se a idade é menor ou igual a 2 anos
        img.setAttribute("src", "bebe-H.png");// Define a imagem para bebê masculino
     } else if (idade <= 15) {// Verifica se a idade é menor ou igual a 15 anos
        img.setAttribute("src", "crianca-H.png");// Define a imagem para criança masculina
     } else if(idade > 15 && idade <18) {// Verifica se a idade está entre 15 e 18 anos
        img.setAttribute("src", "jovem-H.png");// Define a imagem para jovem masculino
     } else if(idade >=18 && idade < 60) {// Verifica se a idade está entre 18 e 60 anos
        img.setAttribute("src", "adulto-H.png");// Define a imagem para adulto masculino
     }else if(idade >= 60) {// Verifica se a idade é maior ou igual a 60 anos
        img.setAttribute("src", "idoso-H.png");// Define a imagem para idoso masculino
     }
    
    }


     else if(fsex[1].checked) {// Verifica se o segundo rádio (feminino) está selecionado
     genero = "Mulher";
        if(idade <= 2) {// Verifica se a idade é menor ou igual a 2 anos
        img.setAttribute("src", "bebe-M.png");// Define a imagem para bebê feminino
     } else if (idade <= 15) {
        img.setAttribute("src", "crianca-M.png");// Define a imagem para criança feminina
     } else if(idade > 15 && idade <18) {// Verifica se a idade está entre 15 e 18 anos
        img.setAttribute("src", "jovem-M.png");// Define a imagem para jovem feminina
     } else if(idade >=18 && idade < 60) {// Verifica se a idade está entre 18 e 60 anos
        img.setAttribute("src", "adulto-M.png");// Define a imagem para adulto feminino
     }else if(idade >= 60) {// Verifica se a idade é maior ou igual a 60 anos
        img.setAttribute("src", "idoso-M.png");// Define a imagem para idoso feminino
     }
   }
  
   res.style.textAlign = "center";
   res.innerHTML += ` Você é um (a): ${genero}`;// Exibe o gênero selecionado
    res.appendChild(img);
  }
}