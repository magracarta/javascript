//처음 테이블을 생성하는 절차와 칸을 좌클리하는 절차, 우클릭하는 절차
const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');


const row =10;//줄
const cell = 10; // 칸
const mine = 10;//지뢰 10개
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
        target.textContent = 'X';
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
 //앞에게 존재하면 실행해라
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
function onLeftClick(event){
    event.preventDefault();
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    const cellData = data[rowIndex][cellIndex];
    if(cellData === CODE.NORMAL){//닫힌칸이면
        const count = countMine(rowIndex, cellIndex);
        //앞에게 ture 면 앞에거만 진행 앞에게 false면 뒤에거를 진행해라 
        target.textContent = count || '';
        target.className = 'opened';
        data[rowIndex][cellIndex] = count;
    }else if(cellData===CODE.MINE){//지뢰칸이면
        target.textContent = '펑';
        target.className = 'opened';
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
                $td.textContent = 'X';//개발 편의 를 위해
            }
            $tr.append($td);
        });
        $tbody.append($tr);
        $tbody.addEventListener('contextmenu',onRightClick);
        $tbody.addEventListener('click',onLeftClick);
    })
};
drawTable();