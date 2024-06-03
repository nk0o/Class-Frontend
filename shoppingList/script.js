//1. 사용자가 입력한 텍스트를 받아옴
//2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
//3. items 컨테이너안에 새로 만든 아이템을 추가한다.
//4. 새로 추가된 아이템으로 스크롤링
//5. 인풋을 초기화하고 포커스 준다.

const input = document.querySelector('.input');
<<<<<<< HEAD
const listItems = document.querySelector('ul.list__items');
const addItemBtn = document.querySelector('.addItem__btn');
/* const removeBtn = document.querySelector('.remove__btn'); */


listItems.addEventListener('click', (e)=>{
    
    const dataID = e.target.dataset.id;

    if(e.target.nodeName == 'I' && dataID){
        const toBeDeleted = document.querySelector(`li.list__item[data-id="${dataID}"]`);
        toBeDeleted.remove();
    }
})
/*   아이템 추가 */

    addItemBtn.addEventListener('click',function(e){
        addItem(); 
    });
    input.addEventListener('keypress',function(e){
        const keyName = e.key;
        if(keyName == 'Enter'){
            addItem();
        }
    });
/*  아이템 추가 */

/* 아이템 추가 함수 Start */
const addItem = function(){

    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }

    const item = creatItem(text);
    listItems.appendChild(item);
    item.scrollIntoView();
    input.value = '';
    input.focus();

}
/* 아이템 추가 함수 End */

/* item 만드는 함수 Start*/
let id = 0; //아이템 한줄한줄에 고유한 아이디를 줌
function creatItem(text){
    //아이템 한줄
    const item = document.createElement('li');
    item.setAttribute('class', 'list__item');
    item.setAttribute('data-id', id);
    item.innerHTML = `
    <div class="item__row"}>
        <span class="item-name">${text}</span>
        <button class="remove-btn">
        <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>          
    </div>     
    <div class="item__divider"></div>`;
   id++;
    return item;
    // const itemRow = document.createElement('div');
    // itemRow.setAttribute('class', 'item__row');
    // //아이템 이름
    // const name = document.createElement('span');
    // name.setAttribute('class','item-name');
    // name.innerText = text;
    // //아이템 밑줄
    // const divider = document.createElement('div');
    // divider.setAttribute('class','item__divider');
    // //아이템 삭제 버튼
    // const removeBtn = document.createElement('button');
    // removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    // removeBtn.setAttribute('class', 'remove-btn');
    // removeBtn.addEventListener('click', ()=>{
    //     listItems.removeChild(item);
    // })    
    // item.appendChild(itemRow);
    // itemRow.appendChild(name);
    // itemRow.appendChild(removeBtn);
    // item.appendChild(divider);
   //return item;
}
/* item 만드는 함수 End*/





//쓰레기통 버튼 누르면 그 줄 li 삭제 

const removeBtn = document.querySelector('.remove-btn');
const removeItem = function(){
      console.log(listItem)
}