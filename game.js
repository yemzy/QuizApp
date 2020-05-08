const question = document.getElementById('question');
const choices =Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);
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
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion= availableQuestions[questionIndex];
    question.innerText= currentQuestion.question;

    choices.forEach(choice=>{
        const number = choice.dataset['number'];
        choice.innerText=currentQuestion["choice" + number]
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true;
}
choices.forEach(choice=>{
    choice.addEventListener("click", e=>{
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer =selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        
        getNewQuestion();
    })
})

startGame();