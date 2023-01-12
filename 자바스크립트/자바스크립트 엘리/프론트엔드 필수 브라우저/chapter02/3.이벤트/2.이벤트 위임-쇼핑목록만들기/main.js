const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');
const form = document.querySelector('.new_form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    onAdd();
});
function onAdd(){
    
    //1. 사용자가 입력한 텍스트를 받아옴.
    const text = input.value;
    if(text===''){
        input.focus();
        return;
    }
    //2. 새로운 아이테을 만든다 (텍스트+삭제버튼)
    const item = createItem(text);
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    //4. 새로 추가된 아이콘으로 스크롤링
    item.scrollIntoView({block:'center'});
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}
let id =0; //UUID
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    itemRow.setAttribute('data-id',id);
    itemRow.innerHTML = `
            <div class="item" >
                <span class="item_name">${text}</span>
                <button class="item_delete">
                    <i class="fa fa-trash" data-id = ${id}></i>
                </button>
            </div>
            <div class="item_dvider"></div>
    `;
    
    id++;
    return itemRow;
}

// addBtn.addEventListener('click',()=>{
//     onAdd();
// });

// input.addEventListener('keydown', (e)=>{
//     if(e.isComposion){ //글자가 다 만들어질때까지 엔터 안되게(한글같을거에서..사용)
//         return;
//     }
//     if(e.key == 'Enter') onAdd();
// })
items.addEventListener('click', event=>{
    const id =event.target.dataset.id;
    if(id){
        const tobeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        tobeDeleted.remove();
    }
});