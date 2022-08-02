const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png'

const rspX = {
    rock : '0',//가위
    scissors :'-119px',//바위
    paper:'-249px',//보
}; 
let computerChoice = 'rock';

const changeComputer = ()=>{
    if(computerChoice == 'rock'){//바위면 가위로 바꾼다.
        computerChoice = 'scissors';
    }else if(computerChoice == 'scissors'){
        computerChoice = 'paper';
    }else if(computerChoice == 'paper'){
        computerChoice = 'rock';
    }
    rspFn(computerChoice);
}
//변수자리문자열rspX.computerChoice 값자리rspX[computerChoice]
const rspFn = (value)=>{
    $computer.style.background = `url(${IMG_URL})  ${rspX[value]} 0`;
    $computer.style.backgroundSize = 'auto 213px';
}

let intervalId = setInterval(changeComputer,50);
const scoreTable = {
    rock: 0,
    scissors:1,
    paper:-1,
};

let Timerx;
let clickable = true;
let me = 0;
let com =0;
const clickButton = (event)=>{
    if(clickable){
        clearInterval(intervalId);
        clickable= false;
        //clearTimeout(Timerx);
        //점수 계산 및 화면 표시
        const myChoice = event.target.id === 'rock'
            ? 'rock'
            :event.target.id === 'scissors'
             ? 'scissors'
             :'paper';
        const myScore = scoreTable[myChoice];
        const computerScore = scoreTable[computerChoice];
        const diff = myScore - computerScore;
        //diff =='고양이' || diff =='사자' || diff =='강아지' || diff =='거북이'
        //['고양이','사자','강아지','거북이'].includes(diff) 
        let message;
        if([2,-1].includes(diff)){
             
             message = '승리';
             me +=1;
        }else if([-2,1].includes(diff)){
            
            message = '패배';
            com += 1;
        }else{
            console.log('무승부');
            message = '무승부';
        }
        if( me >= 2 ){
            $score.textContent = `나의승리 ${me} : ${com}`;
        }else if( com >= 2 ){
            $score.textContent = `컴퓨터의 승리 ${me} : ${com}`;
        }else{
            $score.textContent = `${message} 내점수: ${me}점 컴퓨터 점수: - ${com}점`;
            Timerx = setTimeout(()=>{
                intervalId = setInterval(changeComputer,50);
                clickable = true;
            },1000);
        }
        
    }
}

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
