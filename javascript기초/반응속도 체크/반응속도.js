const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
let startTime;
let endTime;
const records = [];
let TimeoutId;

$screen.addEventListener('click',(event)=>{
    if($screen.classList.contains('waiting')){//파랑
        $screen.classList.replace('waiting','ready');
        $screen.textContent ='초록색이 되면 클릭하세요.';
        
        TimeoutId = setTimeout(function(){
            startTime = new Date();
            $screen.classList.replace('ready','now');
            $screen.textContent ='클릭하세요.';
            //시간 재기

        }, Math.floor(Math.random()*1000)+2000);//2초에서 3초사이

    }else if($screen.classList.contains('ready')){//빨강
        clearTimeout(TimeoutId);
        $screen.textContent = '너무 성급하시군요!, 다시 클릭해주세요!';
        $screen.classList.replace('ready','waiting');

    }else if($screen.classList.contains('now')){//초록
        endTime = new Date();
        const current = endTime - startTime;
        records.push(current);
       
        //평균 구하기 
        const average = records.reduce((a,c)=> a+c)/records.length;
        //reduce는 초기값을 안넣으면 첫번째 값이 초기값이다.
        //[1,2,3,4,5].reduce((a,c)=>{ return a+c; },0) 
        //여러개의 값을 하나의 값으로 축소한다.
        //객체로 만드는 법
        //[1,2,3,4,5].reduce((a,c)=>{a[c]=c*10; return a;},{});
        $result.textContent = `현재 ${current}ms, 평균: ${average}ms`;

       
        //top 5순위 정하기
        const topFive = records.sort((p,c)=>p-c).slice(0,5);
        topFive.forEach((top, index)=>{
            $result.append(
                document.createElement('br'),
                `${index + 1 }위 : ${top}ms`
            )
        });
        
        startTime= null;
        endTime = null;
        $screen.classList.replace('now','waiting');
        $screen.textContent ='클릭해서 시작하세요.';
        
    }

    
});

/*

시간 계산 하기 
new Date().getYear();
new Date().getFullYear();
new Date().getMonth();
new Date().getDate();
new Date().getHours();
new Date().getMinutes();
new Date().getSeconds();
new Date().getMilliSeconds();
new Date().setDate(23);

*/