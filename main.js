
const computerChoiceDisplay = document.getElementById('computer-choise')
const userChoiceDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length+1)
    if(randomNumber === 1){
        computerChoice = 'taş'
    }
    if(randomNumber === 2){
         computerChoice = 'kağıt'
    }
     if(randomNumber === 3){
         computerChoice = 'makas'
     }
         computerChoiceDisplay.innerHTML = computerChoice
};

function getResult(){
    if(computerChoice === userChoice){
        result = 'Berabere'
    }

if(computerChoice === 'taş' && userChoice === 'makas'){
    result = 'Maalesef ...kaybettiniz.'
};
   
    if(computerChoice === 'taş' && userChoice === 'kağıt'){
        result = 'Tebrikler...kazandınız.'
    } ;
    
    if(computerChoice === 'kağıt' && userChoice === 'makas'){
        result = 'Tebrikler...kazandınız.'
    };
    
    if(computerChoice === 'kağıt' && userChoice === 'taş'){
        result = 'Maalesef...kaybettiniz.'
    };
    
    if(computerChoice === 'makas' && userChoice === 'kağıt'){
        result = 'Maalesef...kaybettiniz.'
    };
    
   if(computerChoice === 'makas' && userChoice === 'taş'){
        result = 'Tebrikler...kazandınız.'
    };


    resultDisplay.innerHTML = result
};