const question = document.querySelector('#question')
const answerBox = document.querySelector('#answers-box')
const quizContainer = document.querySelector('#quiz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['A', 'B', 'C', 'D']
let points = 0
let actualQuestion = 0


// PERGUNTAS


const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]


function init() { // inicia o quiz

creatQuestion(0) // cria a primeira pergunta

}



function creatQuestion(i) { // cria a pergunta

    
const oldButtons = answerBox.querySelectorAll('button') // seleciona todos os botões



oldButtons.forEach(function(btn) {
    btn.remove() // remove os botões
})

const questionText = question.querySelector('#question-text')

const questionNumber = question.querySelector('#question-number')

questionText.textContent = questions[i].question // adiciona o texto da pergunta

questionNumber.textContent = i + 1 //   adiciona o número da pergunta


questions[i].answers.forEach(function(answer, i) { // para cada resposta

    const answerTemplate = document.querySelector('.answer-template').cloneNode(true) // clona o template

    const letterBtn = answerTemplate.querySelector('.btn-letter') // seleciona o botão da letra

    const answerText = answerTemplate.querySelector('.question-answer') // seleciona o texto da resposta

    letterBtn.textContent = letters[i] /// adiciona a letra no botão

    answerText.textContent = answer['answer'] // adiciona o texto da resposta

    answerTemplate.setAttribute('correct-answer', answer['correct']) // adiciona o atributo de resposta correta

    answerTemplate.classList.remove('hide') // remove o hide do template

      answerTemplate.classList.remove('answer-template') 

    answerBox.appendChild(answerTemplate) // adiciona a resposta na tela

    answerTemplate.addEventListener('click', function(){
       checkAnswer(this)
    })




    console.log(answerTemplate)
   
    
  

})

actualQuestion++ // incrementa a pergunta atual



function checkAnswer(btn) {

const buttons = answerBox.querySelectorAll('button')

buttons.forEach(function(button){


    if(button.getAttribute('correct-answer') === 'true') { // checa se a resposta está correta

        button.classList.add('correct-answer')

        if(btn === button) {
            points++
        }

    


} else {

    button.classList.add('wrong-answer')
}

})

nextQuestion()


}


function nextQuestion(){
    
    setTimeout(() => {
        
        if(actualQuestion >= questions.length) { // checa se acabou as perguntas

            showEndMessage()
            return
     
        }

               creatQuestion(actualQuestion ) // cria a próxima pergunta


    }, 800)

   
}



function showEndMessage() {

   hideorShow () // esconde a tela de quiz e mostra a de pontuação

    const score = ((points / questions.length) *100).toFixed(0) // calcula a pontuação

    const displayScore = document.querySelector('#display-score')

    displayScore.textContent = `Pontuação de ${score.toString()}%` // mostra a pontuação

    const correctAnssweers = document.querySelector('#correct-answer')

    correctAnssweers.textContent = points // mostra o número de acertos

    const totalQuestions = document.querySelector('#questions-qty')

    totalQuestions.textContent = questions.length  // mostra o número total de perguntas

    const restartQuiz = document.querySelector('#restart')


}




function hideorShow () {
 quizContainer.classList.toggle('hide') // esconde o quiz
    scoreContainer.classList.toggle('hide') // mostra a tela de score

    const restartQuiz = document.querySelector('#restart')

 

}



}




init()









restartQuiz = document.addEventListener('click', function(){

    actualQuestion = 0
    points = 0
    hideorShow ()
    init()
}) 