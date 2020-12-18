

const input = document.querySelector('.input');
<<<<<<< Updated upstream
const listItems = document.querySelector('.list-items');
const addItemBtn = document.querySelector('.addItem-btn');
let array = [];
=======
const listItems = document.querySelector('ul.list__items');
const addItemBtn = document.querySelector('.addItem__btn');
const removeBtn = document.querySelector('.remove__btn');
>>>>>>> Stashed changes
   
/*   아이템 추가 시작  */

    //추가 버튼 누르면 
    addItemBtn.addEventListener('click',function(e){
        addItem(); 
    });
    //input 글씨 입력하고 엔터치면
    input.addEventListener('keypress',function(e){
        const keyName = e.key;
        if(keyName == 'Enter'){
            addItem();
        }
    });
/*   아이템 추가 끝   */

//아이템 추가 함수 : start //
const addItem = function(){
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = creatItem(text);
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    const divider = document.createElement('div');
    divider.setAttribute('class','item__divider');
    listItems.appendChild(item);
    listItems.appendChild(divider);
    //4. 새로 추가된 아이템으로 스크롤링
    console.log(item);
    //5. 인풋을 초기화하고 포커스 준다.
    input.value = '';
    input.focus();
}
//아이템 추가 함수 : end //



function creatItem(text){
    //아이템 한줄
    const item = document.createElement('li');
    item.setAttribute('class', 'list__item');
    //아이템 이름
    const name = document.createElement('span');
    name.setAttribute('class','item-name');
    name.innerText = text;
    //아이템 삭제 버튼
    const removeBtn = document.createElement('button');
<<<<<<< Updated upstream
=======
    removeBtn.setAttribute('class', 'remove__btn');
>>>>>>> Stashed changes
    removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    removeBtn.setAttribute('class', 'remove-btn');
    
    item.appendChild(name);
    item.appendChild(removeBtn);

    return item;

}





//쓰레기통 버튼 누르면 그 줄 li 삭제 

<<<<<<< Updated upstream
=======

const removeItem = function(){
      console.log(listItem)
}

>>>>>>> Stashed changes
