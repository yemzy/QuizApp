const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

const mostRecentScore=localStorage.getItem('mostRecentScore');
finalScore.innerText= mostRecentScore;
const highScores =JSON.parse(localStorage.getItem('highScore')) || [];
const MAX_HIGH_SCORES =5;
console.log(highScores);

username.addEventListener('keyup',()=>{
    saveScoreBtn.disabled =!username.value;
});


saveHighScore = e => {
   console.log("SAVED BUTTON CLICKED");
   
    e.preventDefault();

const score =
{
    score: Math.floor(Math.random()*100),
    name: username.value
};

highScores.push(score);
highScores.sort((a,b)=> b.score -a.score);
highScores.splice(5);

console.log(score);

localStorage.setItem('highScore',JSON.stringify(highScores));
window.location.assign('/');
    
};


