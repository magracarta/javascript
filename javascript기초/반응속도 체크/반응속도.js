const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');



$screen.addEventListener('click',(event)=>{
    if($screen.classList.contains('waiting')){//파랑
        $screen.classList.replace('waiting','ready');
        $screen.textContent ='초록색이 되면 클릭하세요.';
        setTimeout(function(){
            $screen.classList.replace('ready','now');
            $screen.textContent ='클릭하세요.';
            //시간 재기

        }, Math.floor(Math.random()*1000)+2000);//2초에서 3초사이
    }else if($screen.classList.contains('ready')){//빨강

        
    }else if($screen.classList.contains('now')){//초록
        //끝시간 재기
        //시간 차이 저장하기
        
    }
});