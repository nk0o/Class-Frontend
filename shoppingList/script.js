const input = document.querySelector('.input');
const listItems = document.querySelector('.list-items');
const addItemBtn = document.querySelector('.addItem-btn');


//아이템 추가하는 함수 : start //
const addItem = function(){            
    const item = document.createElement('li');            
    item.setAttribute('class', 'list-item');
    item.textContent=`${input.value}`;

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    removeBtn.setAttribute('class', 'remove-btn');
    
    if(input.value.trim() !== ''){
        item.appendChild(removeBtn);
        listItems.appendChild(item);           
    }
        input.value = '';
}
//아이템 추가하는 함수 : end //
//input 글씨 입력하고 엔터치면 아이템 추가
input.addEventListener('keydown',function(e){
    const keyName = e.key;
    if(keyName == 'Enter'){
        addItem(); 
    }
});

//input 글씨 입력하고 추가 버튼 누르면 아이템 추가
addItemBtn.addEventListener('click',function(e){
    addItem(); 
});

//쓰레기통 버튼 누르면 그 줄 li 삭제 

