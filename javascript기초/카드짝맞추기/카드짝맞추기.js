//카드를 렌덤하게 섞는다
//일정시간을 두고 뒤집어 앞면을 보여준다.
//다시 뒷면으로 모두 뒤집는다.
//대기

const $wrapper = document.querySelector('#wrapper');
const total = parseInt(prompt('카드 개수를 짝수로 입력하세요(최대 20).'));
const colors = ['red','orange','yellow','green','white','pink','cyan','violet','gray','black'];
let colorSlice = colors.slice(0, total/2);
let colorCopy = colorSlice.concat(colorSlice);
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let startTime;
function shuffle(){//피셔-예이츠 셔플
    for(let i =0; colorCopy.length > 0; i+=1){
        const randomIndex = Math.floor(Math.random()*colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex,1));
    }
}


function createCard(i){
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';

    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

//테스크 류 : 8번 9번 
//백 :  addEventListener(12), setTimeout500, setTimeout 500
function onClickCard(){
    if(!clickable || completed.includes(this) || clicked[0] === this ){
        return;
    }
    //클릭 -> 카드를 뒤집고 클릭한 카드 배열에 추가
    //2장이 되엇나?  -> 두카드의 뒷변이 똑같은가 - > 완료카드로 배열에 넣음
    this.classList.add('flipped');
    clicked.push(this);
    if(clicked.length !== 2){
        return;
    }
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
    if(firstBackColor===secondBackColor){
        let endTime = new Date();
        // completed.push(clicked[0]);
        // completed.push(clicked[1]);
        completed = completed.concat(clicked);
        clicked=[];
        if(completed.length !== total){
            return;
        }
        setTimeout(()=>{
            alert(`축하합니다. ${Math.floor((endTime - startTime)/1000)} 초 걸렸습니다.`);
            resetGame();
        },1000);
        return;
    }
    clickable=false;
    setTimeout(()=>{
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked=[];
        clickable=true;
    },500);
   
}

function startGame(){
    clickable = false;
    shuffle();
    for(let i = 0; i<total; i+=1){
        const card = createCard(i);
        card.addEventListener('click', onClickCard);
        $wrapper.appendChild(card);
    }

    document.querySelectorAll('.card').forEach((card, index)=>{
        setTimeout(()=>{//카드보이기
            card.classList.add('flipped');
        },1000+100*index);
    });
    setTimeout(()=>{//카드감추기
        document.querySelectorAll('.card').forEach((card,index)=>{
            card.classList.remove('flipped');
        });
        clickable=true;
        startTime = new Date();
    },5000);
    
    
}

startGame();

function resetGame(){
    $wrapper.innerHTML = '';
    //원본을 안바꾸는 애들 -> concat
    colorCopy = colorSlice.concat(colorSlice);
    shuffled = [];
    completed = [];
    startGame();
}

//console.trace();

/*
    function a(){
        b();
    }
    function b(){
        console.trace();
    }
    a();
    b->a->anonymous


    function aaa(){
        setTimeout(()=>{
            console.log('d');
        },0);
        console.log('c');
    }
    setTimeout(()=>{
        console.log('a');
        aaa();
    },0);
    setTimeout(()=>{
        aaa();
        console.log('b');
    },0);

    //호출스택 : anomyous -> 
    //백그라운드 : 타이머 1-0초, 타이머 2-0초
    //태스크큐 :
    //콘솔 : a, c , c, b ,d ,d
    */
