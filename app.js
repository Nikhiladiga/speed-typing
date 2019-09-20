window.addEventListener('load',init);

//Available Levels
const levels = {
    easy:5,
    medium:3,
    hard:2
};

//To change level
const currentLevel = levels.easy;

//Global variables
let time = currentLevel ;
let score = 0;
let isPlaying;


//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =[
    'abandon',
    'abandoned',
    'ability',
    'able',
    'about',
    'above',
    'abroad',
    'absence',
    'nincompoop',
    'absolute',
    'absolutely',
    'absorb',
    'abuse',
    'academic',
    'helicopter',
    'accept',
    'javascript',
    'access',
    'accident',
    'python',
    'accidentally',
    'accommodation',
    'accompany',
    'according',
    'extravaganza',
    'account',
    'accurate',
    'accurately',
    'accuse',
    'achieve',
    'arrogant'
];

function init(){
 //load word from array
 showWord(words);
 //start matching on word input
 wordInput.addEventListener('input',startMatch);
 //call countdown every second
 setInterval(countDown,1000);
 //check game status
 setInterval(checkStatus,50);
}

//Pick a word from an array(random)
function showWord(words){//Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown function
function countDown(){
    //make sure time is not run out
    if(time>0) {
        //decrement timer
        time--;
    } else if(time === 0){
        //Game over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = 'Game Over!'
        score = -1;
    }
}

//Start match
function startMatch(){
    if(matchWords()){
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++;
    }
    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    } else {
    scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML='';
        return false;
    }
}