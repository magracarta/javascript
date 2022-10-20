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
        this.prevmovex;
        this.top = [];
        this.down = [];
        this.left = [];
        this.right = [];
        this.leftcrush;
        this.rightcrush;
        this.topcrush;
        this.downcrush;
        
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

        nailObjectArray.forEach((el, i)=>{
            el.sectionInOut(i);
        });

       if(key.keyDown['left'] ){
        this.direction = 'left';
        this.el.classList.add('walkLeft');
        if(this.movex >= 10 && 
            (character.leftcrush)){
            this.movex -=this.speed;
        };
       }else{ 
        // this.direction = 'default';
        this.el.classList.remove('walkLeft');
       } 
       if(key.keyDown['right']){
        this.direction = 'right';
        this.el.classList.add('walkright');
        if(this.movex <= this.roomWidth-(this.size().width + 10) && character.rightcrush){
            this.movex +=this.speed;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walkright');
       }
       if(key.keyDown['up']){
        this.direction = 'top';
        this.el.classList.add('walktop');
        if(this.movey >= 150 && character.topcrush){
            this.movey -=this.speed;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walktop');
       } 
       if(key.keyDown['down']){
        this.direction = 'down';
        this.el.classList.add('walkdown');
        if(this.movey <= this.roomHeight-(this.size().height + 50) && character.downcrush){
            this.movey +=this.speed;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walkdown');
       }
       this.el.style.left = this.movex+'px';
       this.el.style.top = this.movey+'px';
       
    }
    position(){
        return{
            left:this.el.offsetLeft+0,
            right:this.el.offsetLeft+this.el.offsetWidth-0,
            top:this.el.offsetTop+20,
            bottom:this.el.offsetTop+this.el.offsetHeight,
            middle:this.el.offsetTop+this.el.offsetHeight/2
        }
    }
    size(){
        return{
            width: this.position().right-this.position().left,
            height: this.position().bottom-this.position().top,
        }
    }
    directionFn(){
        nailObjectArray.forEach((el, i)=>{
            let dirOnOff= {sum:0};
            let dirOnOffR= {sum:0};
            let dirOnOfft= {sum:0};
            let dirOnOffb= {sum:0};
            character.left.push(dirOnOff);
            character.right.push(dirOnOffR);
            character.top.push(dirOnOfft);
            character.down.push(dirOnOffb);
        });
    }
}


class NailObject{
    constructor(el){
        this.el = el;
        this.offsetTop = this.el.offsetTop;
        this.offsetLeft = this.el.offsetLeft;
        this.width = this.el.offsetWidth;
        this.height = this.el.offsetHeight;
        this.popup = false;
    }
    sectionInOut(i){
        // console.log(character.direction);
        if(
            character.position().right > this.offsetLeft 
            && character.position().left < this.offsetLeft + this.width 
            &&(character.position().bottom  > this.offsetTop 
            &&character.position().middle+25 < (this.offsetTop+ this.height))
        ){
            if(character.position().left > this.offsetLeft 
            && character.position().right > this.offsetLeft
            &&character.position().bottom  > this.offsetTop+5 
            &&character.position().top < (this.offsetTop+ this.height)-5
            ){
                character.left[i].sum =  5;
            }else{
                character.left[i].sum =  0;
            }
            if(character.position().right > this.offsetLeft 
            && character.position().left < this.offsetLeft
            &&character.position().bottom  > this.offsetTop+5 
            &&character.position().top < (this.offsetTop+ this.height)-5
            ){
                character.right[i].sum =  5;
            }else{
                character.right[i].sum =  0;
            }
            if(character.position().middle > this.offsetTop 
            && character.position().bottom > this.offsetTop+this.height
            && character.position().right > this.offsetLeft+15 
            && character.position().left < this.offsetLeft + this.width-15
            ){
                character.top[i].sum =  5;
            }else{
                character.top[i].sum =  0;
            }
            if((character.position().top) < this.offsetTop
            && character.position().right > this.offsetLeft+15 
            && character.position().left < this.offsetLeft + this.width-15
            ){
                character.down[i].sum =  5;
            }else{
                character.down[i].sum =  0;
            }
            console.log(i);
            if(!this.popup){
                this.popup = true;
                this.popupFn();
            }
            
        }else{
            character.left[i].sum =  0;
            character.right[i].sum =  0;
            character.top[i].sum =  0;
            character.down[i].sum =  0;
            this.popup  = false;
        }
        
        character.leftcrush = (character.left.every((item)=>item.sum == 0));
        character.rightcrush = (character.right.every((item)=>item.sum == 0));
        character.topcrush = (character.top.every((item)=>item.sum == 0));
        character.downcrush = (character.down.every((item)=>item.sum == 0));
        
        
    }
    popupFn(){
       
    }
}