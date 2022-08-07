const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

const hero = {
    name:'',
    lev:1,
    maxHp:100,
    hp:100,
    xp:0,
    att:10,
    attack: function(monster){ //화살표함수가아닌 function 일때만 this 사용 
        //화살표 함수일땐 this -> window가된다.
        //this는 객체 일때 사용 가능
        monster.hp -= this.att;
        this.hp -= monster.att;
    },
    heal(monster){ //객체 리터럴 안에서는 function 메서드일땐 생략 가능
        this.hp += 20;
        this.hp -= monster.att;
    }
};
let monster = null;
const monsterList = [
    {name:'슬라임', hp:25, att:10 , xp: 10},
    {name:'스켈레톤', hp:50, att:15 , xp: 20},
    {name:'마왕', hp:150, att:35 , xp: 50},
]

$startScreen.addEventListener('submit',(event)=>{
    event.preventDefault();
    // 폼에서는 폼안에 있는 인풋 아이디 값을 아래와 같은
    // 형태로 가져올수있다.
    const name = event.target['name-input'].value;
    $startScreen.style.display='none';
    $gameMenu.style.display='block';
    $heroName.textContent=name;

    $heroLevel.textContent= `${hero.lev}Lev`;
    $heroHp.textContent=`HP: ${hero.hp}/${hero.maxHp}`;   
    $heroXp.textContent=`HP: ${hero.xp}/${15*hero.lev}`;   
    $heroAtt.textContent=`ATT: ${hero.att}`;
    hero.name = name;   
});

$gameMenu.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = event.target['menu-input'].value;
    if(input === '1'){//모험
        $gameMenu.style.display='none';
        $battleMenu.style.display='block';
        //깊은 복사
        monster = JSON.parse(
            JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
        );
        monster.maxHp = monster.hp;
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP : ${monster.hp}/${monster.maxHp}`;
        $monsterAtt.textContent = `ATT : ${monster.att}`;
    }else if(input === '2'){//휴식

    }else if(input === '3'){//종료

    }

});
//전투 메뉴
$battleMenu.addEventListener('submit',(event)=>{
    event.preventDefault();
    const input = event.target['battle-input'].value;
    if(input==='1'){//공격
        hero.attack(monster);
        monster.attack(hero);
        $heroHp.textContent = `HP : ${hero.hp}/${hero.maxHp}`;
        $monsterHp.textContent = `HP : ${monster.hp}/${monster.maxHp}`;
        $message.textContent = `${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`;
    }else if(input==='2'){//회복

    }else if(input==='3'){//도망

    }
});

/*
    // 깊은 복사 원본과의 관계가 무관 해당내용이 바뀌어도 원본은 그대로
    const monster1 = JSON.parse(JSON.stringify(monsterList[0]));
    // 참조 원본과 관계가 있음 -> 해당 내용을 바꾸면 원본도 바뀜 
    const monster2 = monsterList[0];
    // 얕은 복사 겉은 복사되지만 내부는 참조
    const monster3 = { ...monsterList[0] };

    //배열의 얕은 복사 and .slice() 도 얕은 복사
    const arr = [...arr];

    monster1.name = '새 몬스터';
    console.log(monsterList[0].name);//슬라임
    
    monster2.name = '새 몬스터';
    console.log(monsterList[0].name);//새몬스터
    console.log(monsterList[0] === monster1);//fals, 깊은 복사
    console.log(monsterList[0] === monster2);//true, 참조 관계

*/

/*
    const a = [];
    const b = 'hello';
    const c ={};
    const arr = [a,b,c];
    const arr1 = arr;

    arr1[1] ='hi';

    // 얕은 복사
    const arr2 = [...arr];
    arr2[1] = 'babo';

    arr2[0].push(1);

    //깊은 복사 객체안에 객체를 복사해야할때 필요
    const arr3= JSON.parse(JSON.stringify(arr));
    arr3[0].push(2)

    //간단하지만 느리다, ->로데시 라는 라이브러리 사용하는것이 좋음


    //얕은 복사 concat
    const g = ['1'];
    g.concat(2,3);
    //['1',2,3]
    // g -> ['1']
*/