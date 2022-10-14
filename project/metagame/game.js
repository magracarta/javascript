const key = {
    keyDown:{},
    keyValue:{
        37:'left',
        39:'right',
        38:'up',
        40:'down',
    }
}

//키모션
const windowEvent = ()=>{
    window.addEventListener('keydown',(e)=>{
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

    requestAnimationFrame(rendGame);
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
const init=()=>{
    character = new Character('.character-wrap');
    imgLoad();
}

window.onload=()=>{
    init(); 
    windowEvent();
    rendGame();
}
