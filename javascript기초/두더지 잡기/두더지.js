const $timer = document.querySelector('#timer');
const $score = document.querySelector('#score');
const $life = document.querySelector('#life');
const $game = document.querySelector('#game');
const $start = document.querySelector('#start');
const $$cells = document.querySelectorAll('.cell');

const holes = new Array(9).fill(0);
let started =  false;
let score = 0;
let time =60;
let life = 3;
let timeId , tickId;
//한번만 눌려야하는 것들은 플래그를 만들어야 한다. 
$start.addEventListener('click', ()=>{
    if(started) return;//이미 시작했으면 무시
    started = true;
    console.log('시작');
    life=3;
    score = 0;
    $score.textContent = score;
    $life.textContent = life;
    timeId = setInterval(()=>{
        time = (time*10-1)/10;//소수점 계산시 큰문제 있음
        $timer.textContent = time;
        if(time ===0){
            endGame();
        }
    },100);
    tickId = setInterval(tick,1000);
    tick();
});

let gopherPercent = 0.3;
let bombPercent = 0.5;

function tick(){
    holes.forEach((hole, index)=>{
        if(hole) return; // 무언가 일어나고 있으면 return
        const randomValue = Math.random();
        if(randomValue < gopherPercent){
            animaiton('gopher', index);
        }else if(randomValue < bombPercent){
            animaiton('bomb', index);
        }else{

        }
    });
}

function animaiton(element, index){
    const $element = $$cells[index].querySelector('.'+element);
            holes[index] = setTimeout(()=>{
                $element.classList.add('hidden');
                holes[index] =0;
            },1000);
            $element.classList.remove('hidden');
}

$$cells.forEach(($cell, index)=>{
    $cell.querySelector('.gopher').addEventListener('click', (e)=>{
        if(!e.target.classList.contains('dead')){
            score +=1;
            $score.textContent = score;
        }
        e.target.classList.add('dead');
        e.target.classList.add('hidden');
        clearTimeout(holes[index]);
        setTimeout(()=>{
            holes[index] = 0;
            e.target.classList.remove('dead');
        },1000);
    });
    $cell.querySelector('.bomb').addEventListener('click', (e)=>{
        e.target.classList.add('boom');
        e.target.classList.add('hidden');
        clearTimeout(holes[index]);
        setTimeout(()=>{
            holes[index] = 0;
            e.target.classList.remove('boom');
        },1000);
        life -=1;
        $life.textContent = life;
        if(life <= 0){
            endGame();
        }
    });
});

function endGame(){
    setTimeout(()=>{
        clearInterval(timeId);
        clearInterval(tickId);
        alert(`게임 오버! 점수는 ${score}점`);
        started =  false;
        time =10;
        
    },50);
}