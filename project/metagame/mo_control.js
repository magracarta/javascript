var joy = document.getElementById("joy");
    joy.width = 120;
    joy.height = 120;
    joy.addEventListener("touchstart", down);
    joy.addEventListener("touchmove", move);
    joy.addEventListener("touchend", up);
    // joy.addEventListener("mousedown", down);
    // joy.addEventListener("mousemove", move);
    // joy.addEventListener("mouseup", up);
    var ctx = joy.getContext("2d");
    ctx.lineWidth = 10;
    clearBackground();
    drawCircle(60, 60, 25, " rgb(255 255 255)");
    var startX, startY, moveX, moveY;
    var joyPos = joy.getBoundingClientRect();
    var onTouch = false;
    
    function down(event) {
      try {
        startX = Math.round(event.touches[0].clientX - joyPos.left);
        startY = Math.round(event.touches[0].clientY - joyPos.top);
        
      } catch{
        startX = Math.round(event.clientX - joyPos.left);
        startY = Math.round(event.clientY - joyPos.top);
      }
      onTouch = true;
    }

    var moveMax = 30;
    var msgPrev = "s";
    var msg = "s";
    function move(event) {
      if (onTouch) {
        try {
          moveX = Math.round(event.touches[0].clientX - joyPos.left) - startX;
          moveY = Math.round(event.touches[0].clientY - joyPos.top) - startY;
        } catch{
          moveX = Math.round(event.clientX - joyPos.left) - startX;
          moveY = Math.round(event.clientY - joyPos.top) - startY;
        }

        if (moveX > moveMax) moveX = moveMax;
        else if (moveX < -moveMax) moveX = -moveMax;
        if (moveY > moveMax) moveY = moveMax;
        else if (moveY < -moveMax) moveY = -moveMax;

        clearBackground();
        drawCircle(60 + moveX, 60 + moveY, 25, " rgb(255 255 255)");
        // console.log( moveX);


        if (moveX >= 30) {key.keyDown[key.keyValue[39]] =true; key.keyDown[key.keyValue[37]] =false;}
        else if (moveX <= -30) {key.keyDown[key.keyValue[37]] =true;  key.keyDown[key.keyValue[39]] =false;}
        else if( moveX <= 28 && moveX >= -28 ){ key.keyDown[key.keyValue[39]] =false; key.keyDown[key.keyValue[37]] =false;}

        if (moveY <= -30){key.keyDown[key.keyValue[38]] =true; key.keyDown[key.keyValue[40]] =false; } 
        else if (moveY >= 30){key.keyDown[key.keyValue[40]] =true; key.keyDown[key.keyValue[38]] =false; }
        else if( moveY <= 28 && moveY >= -28 ){ key.keyDown[key.keyValue[38]] =false; key.keyDown[key.keyValue[40]] =false;}
        
      }

      let userAngent = navigator.userAgent;
    
      

    }

    function up() {
      clearBackground();
      drawCircle(60, 60, 25, " rgb(255 255 255)");
      
      onTouch = false;
      
      key.keyDown[key.keyValue[39]] =false; 
      key.keyDown[key.keyValue[37]] =false;
      key.keyDown[key.keyValue[38]] =false; 
      key.keyDown[key.keyValue[40]] =false;  
    }

    

    function clearBackground() {
      ctx.clearRect(0, 0, joy.width, joy.height);
      ctx.beginPath();
    //   ctx.strokeStyle = "rgb(153,000,051)";
      ctx.arc(75, 75, 70, 0, 2 * Math.PI);
    //   ctx.stroke();
    }

    function drawCircle(x, y, r, c) {
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
    }


    document.querySelector('.enter').addEventListener("touchstart", ()=>{
        key.keyDown[key.keyValue[13]] =true;
    });
    document.querySelector('.enter').addEventListener("touchend", ()=>{
        key.keyDown[key.keyValue[13]] =false;
    });

    document.querySelector('.enter').addEventListener("mousedown", ()=>{
        key.keyDown[key.keyValue[13]] =true;
    });
    document.querySelector('.enter').addEventListener("mouseup", ()=>{
        key.keyDown[key.keyValue[13]] =false;
    });

    window.addEventListener("touchmove",()=>{
      if(userAngent.indexOf('KAKAO')>-1){
        window.scrollTo(0, 0)
      }
    });