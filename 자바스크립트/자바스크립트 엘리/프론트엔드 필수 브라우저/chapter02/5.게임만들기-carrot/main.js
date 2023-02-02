const CARROT_SIZE = 80;
const CARROT_COUNT=5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector('.game__field');
const filedRect = field.getBoundingClientRect();

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore  = document.querySelector('.game__score');
const popUp  = document.querySelector('.pop-up');
const popUpText  = document.querySelector('.pop-up__message');
const popUpRefresh  = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const windSound = new Audio('./sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener('click', onfieldClick);
gameBtn.addEventListener('click', ()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
});

popUpRefresh.addEventListener('click',()=>{
    
    startGame();
    hidePopUp();
    showreplayButton();
});

function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPALY?');
    stopSound(bgSound);
    playSound(alertSound);
}

function startGame(){
    started = true;
    score = 0;
    clearInterval(timer);
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    
    playSound(bgSound);
    
}
function finishGame(win){
    started = false;
    hideGameButton();
    stopSound(bgSound);
    if(win){
        playSound(windSound);
    }else{
        playSound(bugSound);
    }
    showPopUpWithText(win? 'you Won!' : 'you Lost!' );
}

function startGameTimer(){
    let remainingTimerSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimerSec);
    timer = setInterval(()=>{
        if(remainingTimerSec<=0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimerSec);
        
    },1000);
}
function stopGameTimer(){
    clearInterval(timer);
    
}
function updateTimerText(time){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}
function showPopUpWithText(text){
    popUpText.innerHTML = text;
    popUp.classList.remove('pop-up--hide');
}
function hidePopUp(){
    popUp.classList.add('pop-up--hide');

}
function showTimerAndScore(){
    gameTimer.style.visibility='visible';
    gameScore.style.visibility='visible';
}

function hideGameButton(){
    gameBtn.style.visibility ='hidden';
}

function showStopButton(){
    const icon = gameBtn.querySelector('.fa');
    icon.classList.add('fa-stop');
    icon.classList.remove('.fa-paly');
}
function showreplayButton(){
    gameBtn.style.visibility ='visible';
    const icon = gameBtn.querySelector('.fa');
    
}
function onfieldClick(event){
    if(!started)return;
    const target = event.target;
    if(target.matches('.carrot')){
        //당근
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    }else if(target.matches('.bug')){
        //벌레!
        stopGameTimer();
        finishGame(false);
    }
}

function playSound(sound){
    sound.currentTime =0;
    sound.play();
}
function stopSound(sound){
    sound.pause();
}

function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
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
