const CARROT_SIZE = 80;
const CARROT_COUNT=5;
const BUG_COUNT = 5;
let GAME_DURATION_SEC = 5;

const field = document.querySelector('.game__field');
const filedRect = field.getBoundingClientRect();

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore  = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', ()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
    started = !started;
});

function stopGame(){
    
}
function startGame(){
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}
function startGameTimer(){
    let remainingTimerSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimerSec);
    timer = setInterval(()=>{
        if(remainingTimerSec<=0){
            clearInterval(timer);
            return;
        }
        updateTimerText(--remainingTimerSec);
        
    },1000);
}
function updateTimerText(time){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}
function showTimerAndScore(){
    gameTimer.style.visibility='visible';
    gameScore.style.visibility='visible';
}
function showStopButton(){
    const icon = gameBtn.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('.fa-paly');
}

function initGame(){
    field.innerHTML='';
    gameScore.innerText = CARROT_COUNT;
    //벌레와 당근을 생성한뒤 field에 추가해줌
    addItme('carrot', CARROT_COUNT , './img/carrot.png');
    addItme('bug', BUG_COUNT , './img/bug.png');
}

function addItme(className, count , imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = filedRect.width - CARROT_SIZE;
    const y2 = filedRect.height - CARROT_SIZE;
    for(let i =0; i < count;  i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);
        item.setAttribute('src',imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1,x2);
        const y = randomNumber(y1,y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber (min, max){
    return Math.random() * (max - min) + min;
}
