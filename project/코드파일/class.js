class Character{
    constructor(el){
        this.el = document.querySelector(el);
        this.direction = 'default';
        this.speed = 5;
        this.moveX = window.innerWidth/2;
        this.movey = window.innerHeight/2;
    }
    keyMotion(){
       if(key.keyDown['left']){
        this.direction = 'left';
        this.el.classList.add('walkLeft');
       }else{ 
        this.direction = 'default';
        this.el.classList.remove('walkLeft');
       } 
       if(key.keyDown['right']){
        this.direction = 'right';
        this.el.classList.add('walkright');
       }else{
        this.direction = 'default';
        this.el.classList.remove('walkright');
       }
       if(key.keyDown['up']){
        this.direction = 'top';
        this.el.classList.add('walktop');
       }else{
        this.direction = 'default';
        this.el.classList.remove('walktop');
       } 
       if(key.keyDown['down']){
        this.direction = 'down';
        this.el.classList.add('walkdown');
       }else{
        this.direction = 'default';
        this.el.classList.remove('walkdown');
       } 
    }
    position(){
        return{
            left:this.el.getBoundingClientRect().left,
            right:this.el.getBoundingClientRect().right,
            top:this.el.getBoundingClientRect().top,
        }
    }
}
