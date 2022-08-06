
//배열의 구조분해 할당
// const arr = [0,1,2,3,4,5];
// const [one,  , , five] = arr;

//오브젝트 객체안에 또 객체를 넣는 방법?
/*
const obj = {
    a:'hello',
    b: {
        c: 'hi',
        d: {e : 'wow'},
    },
};

const { a, b : {c , d: { e}}} = obj;
or 
const {a,b} = obj;
const {d: {e}}=b;
*/

//구조분해 할당 객체
const { body } = document;

const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

/*
    [
        [td,td,td],
        [td,td,td],
        [td,td,td],
    ]
*/
const checkWinner = (target) => {
   let rowIndex = target.parentNode.rowIndex; 
   let cellIndex = target.cellIndex;
  
   //세칸 다 채워졌나?
   let hasWinner = false;
   //가로줄 검사
   if(
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
   ){
    hasWinner = true;
   }
   //세로줄 검사
   if(
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
   ){
    hasWinner = true;
   }
   //대각선 검사
   if(
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
   ){
    hasWinner = true;
   }
   //대각선 검사
   if(
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
   ){
    hasWinner = true;
   }
   return hasWinner;

  };


const callback = (e)=>{
    // e.stopPropagation(); 버블링 만들기
    // 칸에 글자가 있으면 실행 불가!
    if(e.target.textContent !==''){
        
        console.log('빈칸이 아닙니다.');   
        return;
    }
    console.log('빈칸 입니다.');     
    e.target.textContent = turn;
    //승부 판단하기
    if(checkWinner(e.target)){
        $result.textContent = `${turn}님이 승리!`;
        $table.removeEventListener('click',callback);
        return;
    };
    //무승부 검사 flat() 은 2차원 배열을 1차원으로 바꿔주는 메서드
    let draw = rows.flat().every((td)=>td.textContent); //모두가 차이었야 true
    // let draw = rows.flat().some((td)=>td.textContent); 하나라도 차있으면 true

    if (draw){
        $result.textContent = `무승부`;
        return;
    }

    //승부확인 삼항 연산자
    turn = turn === 'O' ? 'X' :'O';
}

for(let i =0; i < 3; i++){ 
    const $tr = document.createElement('tr');
    const cells =[];
    for(let j = 0 ; j < 3; j++){
        const $td = document.createElement('td');
        cells.push($td);
        
        $tr.appendChild($td);
    }
   
    rows.push(cells);
    $table.append($tr);
}
$table.addEventListener('click',callback);
body.append($table);
body.append($result);


/*
    let array = [];
    for(let i =0; i <5; i++){
        const cells = [];
        for(let j=0;  j <4; j++ ){
            cells.push(1);
        }
        array.push(cells)
    }

    Array.from($table.children);
*/