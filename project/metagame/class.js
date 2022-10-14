class Character{
    constructor(el){
        this.el = document.querySelector(el);
        this.direction = 'default';
        this.speed = 3;
        this.room = document.querySelector('.game_container');
        this.roomWidth = this.room.offsetWidth;
        this.roomHeight = this.room.offsetHeight;
        this.movex = this.roomWidth/2;
        this.movey = this.roomHeight/2;
        
    }
    keyMotion(){
        if((key.keyDown['left']&&key.keyDown['up'])
            ||(key.keyDown['left']&&key.keyDown['down'])
            ||(key.keyDown['right']&&key.keyDown['up'])
            ||(key.keyDown['right']&&key.keyDown['down'])
        ){
            this.speed = 2.2;
        }else{
            this.speed = 3;
        }

       if(key.keyDown['left']){
        this.direction = 'left';
        this.el.classList.add('walkLeft');
        if(this.movex >= 10 ){
            this.movex -=this.speed;
        };
       }else{ 
        this.direction = 'default';
        this.el.classList.remove('walkLeft');
       } 
       if(key.keyDown['right']){
        this.direction = 'right';
        this.el.classList.add('walkright');
        if(this.movex <= this.roomWidth-(this.size().width + 10)){
            this.movex +=this.speed;
        };
       }else{
        this.direction = 'default';
        this.el.classList.remove('walkright');
       }
       if(key.keyDown['up']){
        this.direction = 'top';
        this.el.classList.add('walktop');
        if(this.movey >= 150){
            this.movey -=this.speed;
        };
       }else{
        this.direction = 'default';
        this.el.classList.remove('walktop');
       } 
       if(key.keyDown['down']){
        this.direction = 'down';
        this.el.classList.add('walkdown');
        if(this.movey <= this.roomHeight-(this.size().height + 10)){
            this.movey +=this.speed;
        };
       }else{
        this.direction = 'default';
        this.el.classList.remove('walkdown');
       }
       
       this.el.style.left = this.movex+'px';
       this.el.style.top = this.movey+'px';
       
    }
    position(){
        return{
            left:this.el.getBoundingClientRect().left,
            right:this.el.getBoundingClientRect().right,
            top:this.el.getBoundingClientRect().top,
            bottom:this.el.getBoundingClientRect().bottom,
        }
    }
    size(){
        return{
            width: this.position().right-this.position().left,
            height: this.position().bottom-this.position().top,
        }
    }
}


