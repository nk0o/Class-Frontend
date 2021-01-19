
'use strict';

export default class PopUp {  

    constructor(){

        this.popUpMessage = document.querySelector('.popUp__message');

        this.popUpRefresh = document.querySelector('button.popUp__refresh');

        this.popUp = document.querySelector('.popUp');

        this.popUpRefresh.addEventListener('click',()=>{
            this.onClick && this.onClick(); //onClick이라는 변수가 있을때만 뒤 함수 실행
            this.hide();
        });

    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    showWithText(text){
        this.popUpMessage.innerText = text;
        this.popUp.classList.remove('popUp-hide');
    }

    hide(){
        this.popUp.classList.add('popUp-hide');
    }


}