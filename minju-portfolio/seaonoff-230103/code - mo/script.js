(function(){

    // 회전 슬라이드 
    const ring = document.querySelector('.ring');
    let move=false;
    let stopRing ;
    let setId;
    let startx;
    let innerWidht;

    window.addEventListener('resize', ()=>{
        resetFn();
        cancelAnimationFrame(stopRing);
        clearTimeout(setId);
        setId = setTimeout(()=>{
            ringAnifn();
        },100);
    });

    function resetFn(){
        innerWidht= window.innerWidth;
        if(window.innerWidth > 400){
            innerWidht = 400;
       }
        document.querySelectorAll('.img').forEach((elem, index)=>{
            elem.style.transform = `rotateY(calc(var(--i)*60deg)) translateZ(${innerWidht/2.5}px)`;
        });
    }
    
    let ringRotate;
    function ringAnifn(){
        ringRotate =Number((ring.style.transform).split('Y(')[1].split('deg')[0]);
        ring.style.transform = ` rotateY(${ringRotate-=0.05}deg)`;
        stopRing = requestAnimationFrame(ringAnifn);
    }

    resetFn();
    ringAnifn();


    //움직임 감지
    let firstMove;
    let lastMove;
   

    //모바일
    document.querySelector('.stageContainer').addEventListener("touchstart", (e)=>{
        move= true;
        startx = e.touches[0].clientX;
        cancelAnimationFrame(stopRing);
        clearTimeout(setId);
    });
    window.addEventListener("touchend",()=>{
        move = false;
        cancelAnimationFrame(stopRing);
        clearTimeout(setId);
        setId = setTimeout(()=>{
            ringAnifn();
        },0);
    });

    window.addEventListener("touchcancel",()=>{
        move = false;
        document.querySelector('.stage').classList.remove('grabbing');
        cancelAnimationFrame(stopRing);
        clearTimeout(setId);
        setId = setTimeout(()=>{
            ringAnifn();
        },0);
    });
    document.querySelector('body').addEventListener("touchmove",(e)=>{
        if(!move) return;
        cancelAnimationFrame(stopRing);
        lastMove = e.touches[0].clientX;
        ringRotate =Number((ring.style.transform).split('Y(')[1].split('deg')[0]);
        let rotatemove = (startx + e.touches[0].clientX )/(900); 
        if( (lastMove-firstMove) < 0){
           ring.style.transform = ` rotateY(${ringRotate-(rotatemove*1)}deg)`;
         }else ring.style.transform = ` rotateY(${ringRotate+(rotatemove*1.5)}deg)`;
         
     
        firstMove = e.touches[0].clientX;
     });


    // 회전 슬라이드 


    // 기존 슬라이드
    let slideArray = document.querySelectorAll('.mySwiper');
  let sdarray = [];
  slideArray.forEach((element,i) => {
      const swiper2 = new Swiper(element, {
          slidesPerView: 2.3,
          spaceBetween: 10,
          freeMode : true,
          slidesOffsetBefore: 20,
          slidesOffsetAfter: 20,
          navigation: {
              nextEl: document.querySelectorAll('.nextBtn')[i],
              prevEl: document.querySelectorAll('.prevBtn')[i],
            },
        });  
        sdarray.push(swiper2);  
  });


// 카운트 다운 타이머
  let timeDiv = document.querySelectorAll('.timerBox .settingTime');

  timeDiv.forEach((elem, i)=>{
      setInterval(() => {
          const nowTime = new Date().getTime();
          const endTime = new Date(elem.innerText).getTime();
          
          const diff = endTime - nowTime;

          let diffDay = Math.floor(diff / (1000*60*60*24)); //day
          let diffHour = Math.floor((diff / (1000*60*60)) % 24); //100이하 hour
          let nodayHour = Math.floor((diff / (1000*60*60))); //hour
          let diffMin = Math.floor((diff / (1000*60)) % 60); //minutes
          let diffSec = Math.floor(diff / 1000 % 60); //seconds

          //각 시간 영역이 10이하 될때
          if(nodayHour < 10 && nodayHour > 0 ){ nodayHour = '0'+nodayHour;}
          if(diffHour < 10  && diffHour > 0 ){ diffHour = '0'+diffHour; }
          if(diffMin < 10   && diffMin > 0 ){ diffMin = '0'+diffMin; }
          if(diffSec < 10   && diffSec > 0 ){ diffSec = '0'+diffSec; }


          if(nodayHour<=0){ nodayHour = '00';}
          if(diffHour<=0){ diffHour = '00'; }
          if(diffMin<=0){ diffMin = '00'; }
          if(diffSec<=0){ diffSec = '00'; }

          //100시간 이상일때 날짜 등장
          
              document.querySelectorAll('.d-day-hour .no01 p')[i].innerText = nodayHour;
              // document.querySelectorAll('.d-day-hour .no02 p')[i].innerText = nodayHour;
              document.querySelectorAll('.d-day-min .no01 p')[i].innerText = diffMin;
              // document.querySelectorAll('.d-day-min .no02 p')[i].innerText = diffMin;
              document.querySelectorAll('.d-day-sec .no01 p')[i].innerText = diffSec;
              // document.querySelectorAll('.d-day-sec .no02 p')[i].innerText = diffSec;
          
      }, 1000);

  });




    
  
  window.addEventListener('scroll', ()=>{
     if(window.scrollY > document.querySelector('.navWrap').offsetTop-0){
      document.querySelector('.navWrap').classList.add('fixed');
     }else{
      document.querySelector('.navWrap').classList.remove('fixed');
     }
  });

 

  

  document.querySelector('.explanWrap').style.height = 0;
  let open = false; 
  document.querySelector('.exbutton a').addEventListener('click',(e)=>{
    let height = document.querySelector('.explanWrap div').offsetHeight;
    if(open==false){
      open = true;
      document.querySelector('.explanWrap').style.height = height+'px';
      document.querySelector('.exbutton a').classList.add('open');
    }else{
      open= false;
      document.querySelector('.explanWrap').style.height = 0+'px';
      document.querySelector('.exbutton a').classList.remove('open');
    }
  });



  let $timeDisplay = document.querySelectorAll('.tabWrap li');
  $timeDisplay.forEach((elem,i)=>{
      timeDisplay(elem,i );
  });
  //시간 노출 코드
  function timeDisplay (elem ,index){
      const nowTime = new Date().getTime();//현재 시간
      const endTime = new Date('January 01, 2023, 00:00:00').getTime();
      const endTime2 = new Date('January 11, 2023, 00:00:00').getTime();
      const endTime3 = new Date('January 13, 2023, 00:00:00').getTime();
      //예약 시간후에 노출
      if(nowTime > endTime){
          elem.classList.remove('addpick');
          if(index == 0){
              elem.classList.add('addpick');
          }
      }
      if(nowTime > endTime2){
        elem.classList.remove('addpick');
        if(index == 1){
            elem.classList.add('addpick');
        }
      }
      if(nowTime > endTime3){
        elem.classList.remove('addpick');
        if(index == 2){
            elem.classList.add('addpick');
        }
      }
  }
  let $timerWrap = document.querySelectorAll('.timerWrap');
  $timerWrap.forEach((elem,i)=>{
    timerWrap(elem,i );
  });
  //시간 노출 코드
  function timerWrap (elem ,index){
      const nowTime = new Date().getTime();//현재 시간
      const endTime = new Date('January 01, 2023, 00:00:00').getTime();
      const endTime2 = new Date('January 11, 2023, 00:00:00').getTime();
      const endTime3 = new Date('January 13, 2023, 00:00:00').getTime();
      //예약 시간후에 노출
      if(nowTime > endTime){
          elem.classList.remove('addpick');
          if(index == 0){
              elem.classList.add('addpick');
          }
      }
      if(nowTime > endTime2){
        elem.classList.remove('addpick');
        if(index == 1){
            elem.classList.add('addpick');
        }
      }
      if(nowTime > endTime3){
        elem.classList.remove('addpick');
        if(index == 2){
            elem.classList.add('addpick');
        }
      }
  }

})();