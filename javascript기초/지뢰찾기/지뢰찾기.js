//처음 테이블을 생성하는 절차와 칸을 좌클리하는 절차, 우클릭하는 절차
const $form = document.querySelector('#form');
const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');
const $timer = document.querySelector('#timer');

let row;//줄
let cell; // 칸
let mine;//지뢰 10개
const CODE = {
    NORMAL : -1, // 닫힌칸
    QUESTION : -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    MINE: -6,
    OPENED:0,//0이상이면 다 모두 열린칸
}
let data;
let openCount;
let startTime;
let interval;
const dev = true;

$form.addEventListener('submit', onsubmit);
function onsubmit(event){
    event.preventDefault();
    row = parseInt(event.target.row.value);
    cell = parseInt(event.target.cell.value);
    mine = parseInt(event.target.mine.value);
    openCount = 0;
    firstClick = true;
    clearInterval(interval);
    $tbody.innerHTML = ``;
    drawTable();
    startTime = new Date;
    interval = setInterval(()=>{
        const time = Math.floor((new Date()-startTime)/1000);
        $timer.textContent = `${time}초`;
    },1000);
}

// 지뢰심기
function plantMine(){
    const candidata = Array(row*cell).fill().map((arr,i)=>{
        return i;
    });
    
    const shuffle = [];
    while (candidata.length > row*cell - mine){
        const chosen = candidata.splice(Math.floor(Math.random()*candidata.length),1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for(let i =0; i<row; i++){
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++){
            rowData.push(CODE.NORMAL);
        }
    }
    
    for(let k=0; k < shuffle.length; k++){
        const ver = Math.floor(shuffle[k]/cell);
        const hor = shuffle[k]%cell;
        data[ver][hor] = CODE.MINE;
    }
    console.log(shuffle);
    return data;
}

function onRightClick(event){
    event.preventDefault();
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;//tr
    const cellIndex = target.cellIndex;//td
    const cellData = data[rowIndex][cellIndex];
    if(cellData=== CODE.MINE){//지뢰면
        data[rowIndex][cellIndex]=CODE.QUESTION_MINE;//물음표 지뢰로
        target.className = 'question';
        target.textContent = '?';

    }else if(cellData === CODE.QUESTION_MINE){//물음표 지뢰면
        data[rowIndex][cellIndex] = CODE.FLAG_MINE;//깃발지뢰로
        target.className='flag';
        target.textContent = '!';
    }else if (cellData === CODE.FLAG_MINE){//깃발 지뢰면
        data[rowIndex][cellIndex] = CODE.MINE;//지뢰로
        target.className='';
        target.textContent = '';
    }else if (cellData === CODE.NORMAL){//깃발이면
        data[rowIndex][cellIndex] = CODE.QUESTION;//닫힌칸으로
        target.className='question';
        target.textContent = '?';
    }else if (cellData === CODE.QUESTION){//물음표면
        data[rowIndex][cellIndex] = CODE.FLAG;//깃발으로
        target.className='flag';
        target.textContent = '!';
    }else if (cellData === CODE.FLAG){//깃발이면
        data[rowIndex][cellIndex] = CODE.NORMAL;//닫힌칸으로
        target.className='';
        target.textContent = '';
    }
}
function countMine(rowIndex, cellIndex){
 const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE];
 let i = 0;
 //?. 은 세트 보호 연산 ex if(data[-1]){~~}
 //앞에게 존재하면 실행해라 옵셔널 체이닝 undefined 를 걸러내는 코드
 mines.includes(data[rowIndex-1]?.[cellIndex-1])&& i++;
 mines.includes(data[rowIndex-1]?.[cellIndex])&& i++;
 mines.includes(data[rowIndex-1]?.[cellIndex+1])&& i++;
 mines.includes(data[rowIndex][cellIndex-1])&& i++;
 mines.includes(data[rowIndex][cellIndex])&& i++;
 mines.includes(data[rowIndex][cellIndex+1])&& i++;
 mines.includes(data[rowIndex+1]?.[cellIndex-1])&& i++;
 mines.includes(data[rowIndex+1]?.[cellIndex])&& i++;
 mines.includes(data[rowIndex+1]?.[cellIndex+1])&& i++;
 return i;
}
function open(rowIndex, cellIndex){
    if(data[rowIndex]?.[cellIndex] >= CODE.OPENED)return; //이미 열린 칸은 계산하지 않는다.
    const target = $tbody.children[rowIndex]?.children[cellIndex];
    if(!target){
        return;
    }
    const count = countMine(rowIndex, cellIndex);
    target.textContent = count || '';
    target.className='opened';
    data[rowIndex][cellIndex] = count;
    openCount++;
    console.log(openCount);
    if(openCount === row*cell - mine){
        const time = Math.floor((new Date() - startTime)/1000);
        clearInterval(interval);
        $tbody.removeEventListener('contextmenu',onRightClick);
        $tbody.removeEventListener('click',onLeftClick);
        setTimeout(()=>{
            $result.textContent=(`승리했습니다. ${time}초가 걸렸습니다.`);
        },100);
    }
    return count;
}
//재귀함수 maximum call stack size 해결 방법
function openedAround(rI,cI){
    setTimeout(()=>{
        const count = open(rI,cI);
        //console.log(count);
        if(count === 0){
            openedAround(rI-1, cI -1);
            openedAround(rI-1, cI);
            openedAround(rI-1, cI+1);
            openedAround(rI, cI-1);
            openedAround(rI, cI);
            openedAround(rI, cI+1);
            openedAround(rI+1, cI-1);
            openedAround(rI+1, cI);
            openedAround(rI+1, cI+1);
        }
    },0);
}
//------------------------------- 여기까지~
let normalCellFound = false;
let searched;
let firstClick = true;
function transferMine(rI,cI){
    if(normalCellFound)return;//이미 빈칸을 찾았으면 종료
    if(rI<0||rI>=row||cI<0||cI>=cell)return;
    if(searched[rI][cI])return; //이미 찾은 칸이면 종료
    if(data[rI]?.[cI] === CODE.NORMAL){ //빈칸인 경우
        normalCellFound = true;
        data[rI][cI] = CODE.MINE;
    }else{//지뢰 칸인 경우 8방향 탐색
        searched[rI][cI] = true;
        transferMine(rI-1, cI-1);
        transferMine(rI-1, cI);
        transferMine(rI-1, cI+1);
        transferMine(rI, cI-1);
        transferMine(rI, cI+1);
        transferMine(rI+1, cI-1);
        transferMine(rI+1, cI);
        transferMine(rI+1, cI+1);
    }
}
function showMines(){
    const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE];
    data.forEach((row, rowIndex)=>{
        row.forEach((cell, cellIndex)=>{
            if(mines.includes(cell)){
                $tbody.children[rowIndex].children[cellIndex].textContent = 'X';
            }
        });
    });
}

function onLeftClick(event){
    event.preventDefault();
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    let cellData = data[rowIndex][cellIndex];
    if(firstClick){
        firstClick = false;
        searched = Array(row).fill().map(()=>[]);
        if(cellData === CODE.MINE){//첫클릭이 지뢰면
            transferMine(rowIndex, cellIndex);//지뢰 옮기기
            data[rowIndex][cellIndex]=CODE.NORMAL;//지금칸을 빈칸으로
            cellData = CODE.NORMAL;
        }
    }
    if(cellData === CODE.NORMAL){//닫힌칸이면
        // const count = countMine(rowIndex, cellIndex);
        // //앞에게 ture 면 앞에거만 진행 앞에게 false면 뒤에거를 진행해라 
        // target.textContent = count || '';
        // target.className = 'opened';
        // data[rowIndex][cellIndex] = count;
        openedAround(rowIndex,cellIndex);
    }else if(cellData===CODE.MINE){//지뢰칸이면
        showMines();
        target.textContent = '펑';
        target.className = 'opened';
        clearInterval(interval);
        $tbody.removeEventListener('contextmenu',onRightClick);
        $tbody.removeEventListener('click',onLeftClick);
    }//나머지는 무시
}

// 테이블설정
function drawTable(){
    data = plantMine();
    data.forEach((row)=>{
        const $tr = document.createElement('tr');
        row.forEach((cell)=>{
            const $td = document.createElement('td');
            if(cell===CODE.MINE){
               //$td.textContent = 'X';//개발 편의 를 위해
            }
            $tr.append($td);
        });
        $tbody.append($tr);
        $tbody.addEventListener('contextmenu',onRightClick);
        $tbody.addEventListener('click',onLeftClick);
    })
};
