let x = document.querySelector('.X')
let o = document.querySelector('.O')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let message = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let playerTwo

//contador

let player1 = 0
let player2 = 0

//evento de click

for(let i= 0; i < boxes.length; i++){

    //evento ao clicar
    boxes[i].addEventListener('click', function(){

        let el = checkPlayer(player1, player2)

        

       
        if(this.childNodes.length == 0) {

        let cloneEl = el.cloneNode(true)

        this.appendChild(cloneEl)

        //computar jogada

        if(player1 == player2) {
            player1++
        } else {
            player2++
        }

    }


    checkWinner()

})

}

//verifica quem joga
function checkPlayer(player1, player2){
      if(player1 == player2){
        //X
        
        el = x
             
        } else {
            //O

            el = o
        }

        return el
}

function checkWinner(){
    let box1 = document.getElementById('block-1')
    let box2 = document.getElementById('block-2')
    let box3 = document.getElementById('block-3')
    let box4 = document.getElementById('block-4')
    let box5 = document.getElementById('block-5')
    let box6 = document.getElementById('block-6')
    let box7 = document.getElementById('block-7')
    let box8 = document.getElementById('block-8')
    let box9 = document.getElementById('block-9')


//Horizontal

     if(box1.childNodes.length > 0 && box2.childNodes.length > 0 && box3.childNodes.length > 0 ) {


        let box1child = box1.childNodes[0].className

        let box2child = box2.childNodes[0].className

        let box3child = box3.childNodes[0].className

        if(box1child == 'X' && box2child =='X' && box3child =='X') {
            //x

            console.log('X venceu')

        } else if(box1child == 'O' && box2child == 'O' && box3child == 'O') {
            //o

            console.log('O venceu')
        }

     }

     if(box4.childNodes.length > 0 && box5.childNodes.length > 0 && box6.childNodes.length > 0 ) {


        let box4child = box4.childNodes[0].className

        let box5child = box5.childNodes[0].className

        let box6child = box6.childNodes[0].className

        if(box4child == 'X' && box5child =='X' && box6child =='X') {
            //x

            console.log('X venceu')

        } else if(box4child == 'O' && box5child == 'O' && box6child == 'O') {
            //o

            console.log('O venceu')
        }8
}

if(box7.childNodes.length > 0 && box8.childNodes.length > 0 && box9.childNodes.length > 0 ) {


        let box7child = box7.childNodes[0].className

        let box8child = box8.childNodes[0].className

        let box9child = box9.childNodes[0].className

        if(box7child == 'X' && box8child =='X' && box9child =='X') {
            //x

            console.log('X venceu')

        } else if(box7child == 'O' && box8child == 'O' && box9child == 'O') {
            //o

            console.log('O venceu')
        

}

}


//Vertical


if(box1.childNodes.length > 0 && box4.childNodes.length > 0 && box7.childNodes.length > 0 ) {


        let box1child = box1.childNodes[0].className

        let box4child = box4.childNodes[0].className

        let box7child = box7.childNodes[0].className

        if(box1child == 'X' && box4child =='X' && box7child =='X') {
            //x

            console.log('X venceu')

        } else if(box1child == 'O' && box4child == 'O' && box7child == 'O') {
            //o

            console.log('O venceu')
        1



}


}


if(box2.childNodes.length > 0 && box5.childNodes.length > 0 && box8.childNodes.length > 0 ) {


        let box2child = box2.childNodes[0].className

        let box5child = box5.childNodes[0].className

        let box8child = box8.childNodes[0].className

        if(box2child == 'X' && box5child =='X' && box7child =='X') {
            //x

            console.log('X venceu')

        } else if(box2child == 'O' && box5child == 'O' && box8child == 'O') {
            //o

            console.log('O venceu')
        1



}

}


if(box3.childNodes.length > 0 && box6.childNodes.length > 0 && box9.childNodes.length > 0 ) {


        let box3child = box3.childNodes[0].className

        let box6child = box6.childNodes[0].className

        let box9child = box9.childNodes[0].className

        if(box3child == 'X' && box6child =='X' && box9child =='X') {
            //x

            console.log('X venceu')

        } else if(box3child == 'O' && box6child == 'O' && box9child == 'O') {
            //o

            console.log('O venceu')
        1



}

}

   //Diagonal  


   
if(box1.childNodes.length > 0 && box5.childNodes.length > 0 && box9.childNodes.length > 0 ) {


        let box1child = box1.childNodes[0].className

        let box5child = box5.childNodes[0].className

        let box9child = box9.childNodes[0].className

        if(box1child == 'X' && box5child =='X' && box9child =='X') {
            //x

            console.log('X venceu')

        } else if(box1child == 'O' && box5child == 'O' && box9child == 'O') {
            //o

            console.log('O venceu')
        1



}7
}

     
if(box3.childNodes.length > 0 && box5.childNodes.length > 0 && box7.childNodes.length > 0 ) {


        let box3child = box3.childNodes[0].className

        let box5child = box5.childNodes[0].className

        let box7child = box7.childNodes[0].className

        if(box3child == 'X' && box5child =='X' && box7child =='X') {
            //x

            console.log('X venceu')

        } else if(box3child == 'O' && box5child == 'O' && box7child == 'O') {
            //o

            console.log('O venceu')
        1



}

}

//Se der velha

let contador = 0

for(let i = 0; i < boxes.length; i++){

    if(boxes[i].childNodes[0] !=undefined){

        contador++
    }

    if(contador == 9){
        console.log('Deu Velha')
    }
}

}