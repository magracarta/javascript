//처음 테이블을 생성하는 절차와 칸을 좌클리하는 절차, 우클릭하는 절차
const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');


const row =10;//줄
const cell = 10; // 칸
const mine = 10;
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
    })
};
drawTable();