const $table = document.getElementById('table');
const $score = document.getElementById('score');
const $back = document.getElementById('back');
let data = [];
let history = [];

$back.addEventListener('click', ()=>{
    const prevData = history.pop();
    if(!prevData)return;
    $score.textContent = prevData.score;
    data=prevData.table;
    draw();
});

function startGame(){
    //fragment->성능 때문에 사용 메모리에만 저장되는 것들이다.
    //빈번한 화면조작을 하는 사람에겐 좋다.
    const $fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(()=>{
        const rowData = [];
        data.push(rowData);
        const $tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            rowData.push(0);
            const $td = document.createElement('td');
            $tr.appendChild($td);
        });
        $fragment.appendChild($tr);
    });
    $table.appendChild($fragment);
    put2ToRandomCell();
    draw();
}
/*
data.flat().filter((v)=>v===0);
*/
function put2ToRandomCell(){
    const emptyCells = [];
    data.forEach(function (rowData, i){
        rowData.forEach(function(cellData,j){
            if(!cellData){//0인지 아닌지 판단
                emptyCells.push([i,j]);
            }
        });
    });
    const randomcell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
    data[randomcell[0]][randomcell[1]]=2;
}

function draw(){
    data.forEach((rowData, i)=>{
        rowData.forEach((cellData, j)=>{
            const $target = $table.children[i].children[j];
            if(cellData>0){
                $target.textContent = cellData;
                $target.className = 'color-'+cellData;
            }else{
                $target.textContent='';
                $target.className='';
            }
        });
    });
}

startGame();

function moveCells(direction){
    history.push({
        table: JSON.parse(JSON.stringify(data)),
        score: $score.textContent,
    });
    switch(direction){
        case 'left':{
            const newData=[[],[],[],[]];
            data.forEach((rowData, i)=>{
                rowData.forEach((cellData,j)=>{
                    if(cellData){
                        const currentRow = newData[i];
                        const prevData = currentRow[currentRow.length-1];
                        if(prevData === cellData){//이전값과 지금값이 같으면
                            const score =parseInt($score.textContent);
                            $score.textContent = score+currentRow[currentRow.length-1]*2;
                            currentRow[currentRow.length - 1]*=-2;
                        }else{
                            newData[i].push(cellData);
                        }
                    }
                });
            });
            console.log(newData);
            [1,2,3,4].forEach((rowData,i)=>{
                [1,2,3,4].forEach((cellData, j)=>{
                    data[i][j] = Math.abs(newData[i][j]) || 0;
                });
            });
            break;
        }
        case 'right':{
            const newData=[[],[],[],[]];
            data.forEach((rowData, i)=>{
                rowData.forEach((cellData,j)=>{
                    if(rowData[3-j]){
                        const currentRow = newData[i];
                        const prevData = currentRow[currentRow.length-1];
                        if(prevData === rowData[3-j]){//이전값과 지금값이 같으면
                            const score =parseInt($score.textContent);
                            $score.textContent = score+currentRow[currentRow.length-1]*2;
                            currentRow[currentRow.length - 1]*=-2;
                        }else{
                            newData[i].push(rowData[3-j]);
                        }
                    }
                });
            });
            console.log(newData);
            [1,2,3,4].forEach((rowData,i)=>{
                [1,2,3,4].forEach((cellData, j)=>{
                    data[i][3-j] = Math.abs(newData[i][j]) || 0;
                });
            });
            break;
        }
        case 'up':{
            const newData=[[],[],[],[]];
            data.forEach((rowData, i)=>{
                rowData.forEach((cellData,j)=>{
                    if(cellData){
                        const currentRow = newData[j];
                        const prevData = currentRow[currentRow.length-1];
                        if(prevData === cellData){//이전값과 지금값이 같으면
                            const score =parseInt($score.textContent);
                            $score.textContent = score+currentRow[currentRow.length-1]*2;
                            currentRow[currentRow.length - 1]*=-2;
                        }else{
                            newData[j].push(cellData);
                        }
                    }
                });
            });
            console.log(newData);
            [1,2,3,4].forEach((cellData,i)=>{
                [1,2,3,4].forEach((rowData, j)=>{
                    data[j][i] = Math.abs(newData[i][j]) || 0;
                });
            });
            break;
        }
        case 'down':{
            const newData=[[],[],[],[]];
            data.forEach((rowData, i)=>{
                rowData.forEach((cellData,j)=>{
                    if(data[3-i][j]){
                        const currentRow = newData[j];
                        const prevData = currentRow[currentRow.length-1];
                        if(prevData === data[3-i][j]){
                            const score =parseInt($score.textContent);
                            $score.textContent = score+currentRow[currentRow.length-1]*2;
                            currentRow[currentRow.length - 1]*=-2;
                        }else{
                            newData[j].push(data[3-i][j]);
                        }
                    }
                });
            });
            console.log(newData);
            [1,2,3,4].forEach((cellData,i)=>{
                [1,2,3,4].forEach((rowData, j)=>{
                    data[3-j][i] = Math.abs(newData[i][j]) || 0;
                });
            });
            
        }
        break;
    }
    if(data.flat().includes(2048)){
        draw();
        setTimeout(()=>{
            alert('축하합니다. 2048을 만들었습니다.');
        },0);
    }else if(!data.flat().includes(0)){//빈칸이 없으면 패배
        alert(`패배하였습니다... ${$score.textContent}점`);
    }else{
        put2ToRandomCell();
        draw();
    }
}
window.addEventListener('keyup',(event)=>{
    if(event.key === 'ArrowUp'){
        moveCells('up');
    }else if(event.key === 'ArrowDown'){
        moveCells('down');
    }else if(event.key === 'ArrowLeft'){
        moveCells('left');
    }else if(event.key === 'ArrowRight'){
        moveCells('right');
    }
});

let startCoord;
window.addEventListener('mousedown',(event)=>{
    startCoord = [event.clientX, event.clientY]
});

window.addEventListener('mouseup',(event)=>{
    const endCoord = [event.clientX, event.clientY];
    const diffx = endCoord[0] - startCoord[0];
    const diffy = endCoord[1] - startCoord[1];
    //abs -> 음수값을 절대값으로 만든다.
    if(diffx<0 && Math.abs(diffx) > Math.abs(diffy)){
        moveCells('left'); 
    }else if(diffx>0 && Math.abs(diffx) > Math.abs(diffy)){
        moveCells('right');
    }else if(diffx>0 && Math.abs(diffx) <= Math.abs(diffy)){
        moveCells('down'); 
    }else if(diffx<0 && Math.abs(diffx) <= Math.abs(diffy)){
        moveCells('up'); 
    }
   
});