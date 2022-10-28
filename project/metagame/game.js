const key = {
    keyDown:{},
    keyValue:{
        37:'left',
        39:'right',
        38:'up',
        40:'down',
        13:'enter',
        27:'esc',
    }
}

let displayTrue = false;
let keyMotionAnswer = false;



//키모션
const windowEvent = ()=>{
    window.addEventListener('keydown',(e)=>{
        // console.log(e.keyCode);
        if(e.keyCode == '27'){
            key.keyDown[key.keyValue[e.keyCode]] =true;
        }
        if(keyMotionAnswer)return;
        if(!key.keyValue[e.keyCode])return;
        key.keyDown[key.keyValue[e.keyCode]] =true;
        // console.log(key.keyDown);
    }); 
    
    window.addEventListener('keyup',(e)=>{
        if(!key.keyValue[e.keyCode])return;
        key.keyDown[key.keyValue[e.keyCode]] =false;
        // console.log(key.keyDown);
    }); 
}

const rendGame = ()=>{
    character.keyMotion();
    ItsectionArray.forEach((el,i)=>{
        el.crush(i);
       
    });
    requestAnimationFrame(rendGame);
}

const mogileReset=()=>{
    let gameContent =  document.querySelector('#gameContent');
    // gameContent.style.height = window.innerHeight + 'px';
    // chatBox.style.width= window.innerWidth+'px';
}

//이미지 미리로드
const imgLoad =()=>{
    const preLoadImgSrc = ['./img/char-walk-left.png','./img/char-walk-right.png','./img/char-walk-top.png','./img/char-walk-down.png'];
    preLoadImgSrc.forEach((arr)=>{
        const img = new Image();
        img.src=arr;
    });
}

let character;
let nailObjectArray =[];
let ItsectionArray = [];
let nailObject = document.querySelectorAll('.object');
let Itsection = document.querySelectorAll('.sectioncolor');
const init=()=>{
    imgLoad();
    character = new Character('.character-wrap');
    nailObject.forEach((el, i)=>{
        const nailObjectC =  new NailObject(el);
        nailObjectArray.push(nailObjectC);
    });
    Itsection.forEach((el,i)=>{
        const itObject = new ObjectSEction(el)
        ItsectionArray.push(itObject);
    });
    
    ItsectionArray.forEach((el,i)=>{
       
        el.array();
    });


    character.directionFn();

    if(window.innerWidth<468){
        mogileReset();
    }
}



window.onload=()=>{
    init(); 
    windowEvent();
    rendGame();
    const userAngent = navigator.userAgent;
    
    if(window.outerHeight > 800 || userAngent.indexOf('KAKAO')>-1){
        character.screenmovereset();
        addEventListener('resize', (event) => {
            character.screenmovereset();
        });
        
    }else if(window.outerHeight > 590 && userAngent.indexOf('KAKAO')>-1){
        character.screenmovereset();
        addEventListener('resize', (event) => {
            character.screenmovereset();
        });
        alert(window.outerHeight +'안밖'+ window.innerHeight)
        
    }else{
        character.screenmovereset();
        
    }
}


