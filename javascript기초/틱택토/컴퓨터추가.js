
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

  const checkWinnerAndDraw = (target)=>{
    const hasWinner = checkWinner(target);
    //승자가 있으면, 
    if(hasWinner){
        $result.textContent = `${turn}님이 승리!`;
        $table.removeEventListener('click',callback);
            return;
    }
     //무승부 검사 flat() 은 2차원 배열을 1차원으로 바꿔주는 메서드
     let draw = rows.flat().every((td)=>td.textContent); //모두가 차이었야 true
     // let draw = rows.some().every((td)=>td.textContent); 하나라도 차있으면 true
     if (draw){
        $result.textContent = `무승부`;
        return;
    }
    //승부확인 삼항 연산자
    turn = turn === 'O' ? 'X' :'O';
  }
let clickkable = true;
const callback = (e)=>{
    if(!clickkable) return;
    // e.stopPropagation(); 버블링 만들기
    // 칸에 글자가 있으면 실행 불가!
    if(e.target.textContent !==''){
        
        console.log('빈칸이 아닙니다.');   
        return;
    }
    console.log('빈칸 입니다.');     
    e.target.textContent = turn;

    checkWinnerAndDraw(e.target);
    //컴퓨터 추가
    if(turn === 'X'){
        clickkable = false;
        setTimeout(()=>{
            const emptyCells = rows.flat().filter((v)=> !v.textContent);
            const randomCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
            randomCell.textContent = 'X';
            checkWinnerAndDraw(e.target);
            clickkable = true;
        },500);    
    }
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


