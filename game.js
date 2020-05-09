const question = document.getElementById('question');
const choices =Array.from(document.getElementsByClassName('choice-text'));
const progressText =document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull =document.getElementById("progress-bar-full");

let currentQuestion ={};
let acceptingAnswers =false;
let questionCounter =0;
let score =0;
let availableQuestions =[];

let questions=[
    {
        question: "whats my name",
        choice1: "lengy",
        choice2: "skujy",
        choice3: "robosky",
        choice4: "okay",
        answer:2
    },
    {
        question: "whats my game",
        choice1: "lengy",
        choice2: "skujy",
        choice3: "robosky",
        choice4: "okay",
        answer:2
    },
    {
        question: "whats my lol",
        choice1: "lengy",
        choice2: "skujy",
        choice3: "robosky",
        choice4: "okay",
        answer:2
    }
];

const CORRECT_BONUS=10;
const MAX_QUESTIONS =3;

startGame =()=>
{
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion=()=>
{
    if(availableQuestions.length==0|| questionCounter>= MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText= "question "+questionCounter + '/' +MAX_QUESTIONS;

    progressBarFull.style.width =`${(questionCounter / MAX_QUESTIONS) * 100}%`;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion= availableQuestions[questionIndex];
    question.innerText= currentQuestion.question;

    choices.forEach(choice=>{
        const number = choice.dataset['number'];
        choice.innerText=currentQuestion["choice" + number]
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true;
};

choices.forEach(choice=>{
    choice.addEventListener("click", e=>{
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer =selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        
        const classToApply = selectedAnswer == currentQuestion.answer ?'correct':'incorrect';
        console.log(classToApply);
        classToApply==='correct'?incrementScore(CORRECT_BONUS):"";

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(()=>{ selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();},1000);
        
        

        
    });
});

incrementScore = num => 
{
    score+=num;
    scoreText.innerText=score;
}

startGame();