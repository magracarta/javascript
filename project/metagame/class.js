let displayArra=[];
class ObjectSEction {
    constructor(el){
        this.el = el;
        this.width = this.el.offsetWidth;
        this.height = this.el.offsetHeight;
        this.left = this.el.offsetLeft;
        this.top = this.el.offsetTop;
        this.right = this.left + this.width;
        this.bottom = this.top+ this.height;
        this.answer = false;
        this.answerBox = document.querySelector('.text_box');
        this.displaynone= {sum:0};
        this.popUpTF = true;
        this.enter =0;
    }
    crush(i){
        if(character.position().bottom-10 > this.top &&
            character.position().bottom-10 < this.bottom &&
            character.position().left < this.right &&
            character.position().right > this.left
        ){
            displayArra[i].sum = 3;
            if(key.keyDown['enter']){
                this.answerFn();  
                this.answer =true;
                this.enter = 0;
            }
            document.querySelector('.close').addEventListener('click',()=>{
                this.answer= false;
                keyMotionAnswer = false; 
                this.outFn();
                this.enter = 0;
            });
            document.querySelector('.dim').addEventListener('click',()=>{
                    this.answer= false;
                    keyMotionAnswer = false; 
                    this.outFn();
                    this.enter = 0;
            });
            if(key.keyDown['esc']){
                this.answer= false;
                keyMotionAnswer = false; 
                this.outFn();
                this.enter = 0;
            }
            // displayArra.push(this.displaynone);
        }else{
            displayArra[i].sum = 0;
            this.answer= false;
        }
        this.display();
        //  (document.querySelector('.character-wrap span').style.display);
    }
    array(){
        displayArra.push(this.displaynone);
    }
    answerFn(){
        if(this.answer==false){
            document.querySelector('.text_wrap').style.display = 'block';
            keyMotionAnswer = true;  
            // ('작동'+this.el.className+'  '+keyMotionAnswer);
            this.popupFn();
        }
        
    }
    outFn(){
        document.querySelector('.text_wrap').style.display = 'none';
    }
    popupFn(){
        if(eval(this.el.dataset.id)){
            if(this.el.className.indexOf('peopleAction')> 0){
                this.answerBox.querySelector('h2').style.display='block';
                this.answerBox.querySelector('h2').innerHTML =(eval(this.el.dataset.id).name);
                let text=(eval(this.el.dataset.id).first);
                let charset = text.split('');
                this.answerBox.querySelector('p').innerHTML = ' ';
                this.answerBox.querySelector('a').style.display='none';
                this.answerBox.querySelector('a').innerHTML =' ';
                document.querySelector('.text_box img').style.display = 'none';
                charset.forEach((Elem,i)=>{
                    setTimeout(()=>{
                        this.answerBox.querySelector('p').innerHTML += (Elem);
                        },15*i);
                        
                });
                
                document.querySelector('.text_box > span').style.display='block';
                
                setTimeout(()=>{
                    let text2 = '';
                    if(this.popUpTF){
                        let charset2 = text2.split('');
                        let chatSecond =15;
                        window.addEventListener('keyup',(e)=>{
                            if(e.keyCode ==13 ){
                                this.chatsecondFn(text2,charset2,chatSecond);
                            };
                            
                        });
                        document.querySelector('.text_box').addEventListener('click',(e)=>{
                            this.chatsecondFn(text2,charset2,chatSecond);
                        });
                        this.popUpTF = false;
                    }
                },300);
            }else{
                
                this.answerBox.querySelector('h2').style.display='block';
                this.answerBox.querySelector('h2').innerHTML =(eval(this.el.dataset.id).name);
                this.answerBox.querySelector('a').style.display='none';
                this.answerBox.querySelector('a').innerHTML =' ';
                let text=(eval(this.el.dataset.id).first);
                let charset = text.split('');
                this.answerBox.querySelector('p').innerHTML = ' ';
                let chatSecond = 0;
                charset.forEach((Elem,i)=>{
                    setTimeout(()=>{
                        this.answerBox.querySelector('p').innerHTML += (Elem);
                        },10*i);
                        chatSecond = 10*i;
                });
                if((eval(this.el.dataset.id).href)){
                    setTimeout(()=>{
                        this.answerBox.querySelector('a').innerHTML ='보러가기';
                        this.answerBox.querySelector('a').href =(eval(this.el.dataset.id).href);
                        this.answerBox.querySelector('a').style.display='inline-block';
                    },chatSecond+200);
                }
                
                if((eval(this.el.dataset.id).img)){
                    document.querySelector('.text_box img').src = (eval(this.el.dataset.id).img);
                    document.querySelector('.text_box img').style.display = 'block';
                }else{
                    document.querySelector('.text_box img').style.display = 'none';
                }    
                document.querySelector('.text_box > span').style.display='none';
            }

            
        }else{
            document.querySelector('.text_box img').style.display = 'none';
            this.answerBox.querySelector('h2').style.display='none';
            this.answerBox.querySelector('h2').innerHTML =' ';
            let text='준비중입니다. 기다려주세요!';
            let charset = text.split('');
            this.answerBox.querySelector('p').innerHTML = ' ';
            charset.forEach((Elem,i)=>{
                setTimeout(()=>{
                    this.answerBox.querySelector('p').innerHTML += (Elem);
                    },15*i);
            });
            this.answerBox.querySelector('a').style.display='none';
            this.answerBox.querySelector('a').innerHTML =' ';
            document.querySelector('.text_box > span').style.display='none';
        }
        
    }
    display(){
        
        // character.leftcrush = (character.left.every((item)=>item.sum == 0));
        const fandt = (displayArra.every((ietm)=>ietm.sum == 0));
        if(fandt){
            document.querySelector('.character-wrap span').style.display='none';
            document.querySelector('.enter').style.display='none';
        }else{
            document.querySelector('.character-wrap span').style.display='block';
            document.querySelector('.enter').style.display='flex';
        }

    }

    chatsecondFn(text2,charset2,chatSecond){
        if(character.position().bottom-10 > this.top &&
        character.position().bottom-10 < this.bottom &&
        character.position().left < this.right &&
        character.position().right > this.left){

        
        this.enter+=1;
        if(this.enter == 2){
            text2=(eval(this.el.dataset.id).second);
            charset2 = text2.split('');
            chatSecond =15;
            this.answerBox.querySelector('p').innerHTML = ' ';
            charset2.forEach((Elem,i)=>{
                setTimeout(()=>{
                    this.answerBox.querySelector('p').innerHTML += (Elem);
                    },15*i);
                    chatSecond = 15*i;
            });
            if((eval(this.el.dataset.id).img)){
                document.querySelector('.text_box img').src = (eval(this.el.dataset.id).img);
                document.querySelector('.text_box img').style.display = 'block';
            }else{
                document.querySelector('.text_box img').style.display = 'none';
            } 

            if((eval(this.el.dataset.id).href)){
                setTimeout(()=>{
                    this.answerBox.querySelector('a').innerHTML ='보러가기';
                    this.answerBox.querySelector('a').href =(eval(this.el.dataset.id).href);
                    this.answerBox.querySelector('a').style.display='inline-block';
                },chatSecond+200);
                document.querySelector('.text_box > span').style.display='none';
            }
        }
    }
        
    }
        
}

class Character{
    constructor(el){
        this.el = document.querySelector(el);
        this.direction = 'default';
        this.speed = 3;
        this.room = document.querySelector('.game_container');
        // this.roomWidth = this.room.offsetWidth;
        this.roomWidth = 465;
        this.roomHeight = this.room.offsetHeight;
        this.movex = this.roomWidth/2;
        this.movey = this.roomHeight/2;
        this.top = [];
        this.down = [];
        this.left = [];
        this.right = [];
        this.leftcrush;
        this.rightcrush;
        this.topcrush;
        this.downcrush;
        this.screenleft = false;
        this.screenright = false;
        this.screentop = false;
        this.screenbottom = false;
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
            this.screenleft = true;
        };
       }else{ 
           // this.direction = 'default';
           this.el.classList.remove('walkLeft');
           this.screenleft = false;
       } 
       if(key.keyDown['right']){
        this.direction = 'right';
        this.el.classList.add('walkright');
        if(this.movex <= this.roomWidth-(this.size().width + 10) && character.rightcrush){
            this.movex +=this.speed;
            this.screenright = true;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walkright');
        this.screenright = false;
       }
       if(key.keyDown['up']){
        this.direction = 'top';
        this.el.classList.add('walktop');
        if(this.movey >= 150 && character.topcrush){
            this.movey -=this.speed;
            this.screentop = true;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walktop');
        this.screentop = false;
       } 
       if(key.keyDown['down']){
        this.direction = 'down';
        this.el.classList.add('walkdown');
        if(this.movey <= this.roomHeight-(this.size().height + 30) && character.downcrush){
            this.movey +=this.speed;
            this.screenbottom = true;
        };
       }else{
        // this.direction = 'default';
        this.el.classList.remove('walkdown');
        this.screenbottom = false;
       }
       this.el.style.left = this.movex+'px';
       this.el.style.top = this.movey+'px';
       
       this.screenmove();
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
    screenmovereset(){
        if(window.innerWidth<600){
            this.room.style.position='absolute';
            let left = (window.innerWidth - this.roomWidth)/2;
            this.room.style.left=left+'px';
        }   
        if(window.innerHeight < this.roomHeight){
            let top = (window.innerHeight - this.roomHeight)/2;
            this.room.style.top=top+'px'
        }else{
            // this.room.style.top=50+'%'
        }
    }
    screenmove(){
        let movenum=3;
        let leftStr = (this.room.style.left);
        let leftNum = (parseInt(leftStr||0, 10));
        if(leftNum <= 0 && leftNum >= (window.innerWidth-this.roomWidth )){
            if( this.movex < (this.roomWidth/window.innerWidth)*150 && this.screenleft && !this.screenright){
                this.room.style.left = leftNum+movenum +'px';
                if(leftNum >= -3){
                    this.room.style.left=-3+'px';
                }
            }
            if(this.movex > (this.roomWidth/window.innerWidth)*200 && this.screenright && !this.screenleft){
                this.room.style.left = leftNum-movenum +'px';
                if(leftNum <= (window.innerWidth-this.roomWidth )+3){
                    this.room.style.left=(window.innerWidth-this.roomWidth )+3+'px';
                }
            }
           
        }
        let topstr = (this.room.style.top);
        let topNum = (parseInt(topstr));
        if(topNum <= 0 && topNum >= (window.innerHeight - this.roomHeight )){
           
            if( this.movey < (this.roomWidth/window.innerHeight)*400 && this.screentop && !this.screenbottom){
                this.room.style.top = topNum+movenum +'px';
                if(topNum >= -5){
                    this.room.style.top=-5+'px';
                }
            }
            if( this.movey > (this.roomHeight/window.innerHeight)*250 && !this.screentop && this.screenbottom){
                this.room.style.top = topNum-movenum +'px';
                if(topNum <= (window.innerHeight-this.roomHeight )+5){
                    this.room.style.top=  (window.innerHeight-this.roomHeight )+5 +'px';
                }
            }
            
        }
    
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
        //  (character.direction);
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
            //  (i);
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