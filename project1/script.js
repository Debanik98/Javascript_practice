'use strict';


const randonNumberEl = document.querySelector('.number')
const guessNumberEl = document.querySelector('.guess')
const messageEl = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore')
//generating randon numbers from 1 to 20
let randomVar = Math.trunc(Math.random()*20 + 1)

let guessVar =0;
let checkMatch = false
let score = 20
let highScore =''
let runGame, runAgain
 document.querySelector('.check').addEventListener('click',runGame = function()
 {
    if(checkMatch === true || score === 0)
    {
        document.querySelector('.check').disabled = true
        if(score===1)
            messageEl.textContent='Game Over! Try again'
    }
    else{
        score--
        scoreEl.textContent=score
        guessVar = Number(guessNumberEl.value)
    
        let message = guessVar > randomVar?'Too High'
        :guessVar<randomVar?'Too Low':'Match Successful'
    
        messageEl.textContent = message;
    
        if(message === 'Match Successful')
        {
            document.querySelector('body').style.backgroundColor='#60b347'
            randonNumberEl.textContent=randomVar
            checkMatch = true
            if(highScore<score)
            {
                highScore=score
            }
            highScoreEl.textContent=highScore
        }

    }

 })

 document.querySelector('.again').addEventListener('click',runAgain = function()
 {
     checkMatch=false
     document.querySelector('.check').disabled = false
     randonNumberEl.textContent ='?'
     messageEl.textContent = 'Start guessing...'
     guessNumberEl.value = '' 
     document.querySelector('body').style.backgroundColor='#222'
     score=20
     scoreEl.textContent=score

 })

 document.addEventListener('keydown',function(event){
     if(event.key === 'Enter')
     {
        runGame()
     }
 })

 document.addEventListener('keydown',function(event){
    if(event.key === 'Escape')
    {
       runAgain()
    }
})
