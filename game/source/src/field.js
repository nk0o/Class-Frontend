'use strict';

const bugSound = new Audio('source/sound/bug_pull.mp3');
const carrotSound = new Audio('source/sound/carrot_pull.mp3');
const CARROT_SIZE = 80;

export default class Field {
    constructor(carrotCount, bugCount){
        //멤버변수 만들기
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;


        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.field.addEventListener('click', this.onClick);
    }

    init(){
        this.field.innerHTML= '';
        //벌레 당근 생성 field에 추가
        this._addItem('carrot', this.carrotCount, 'source/img/carrot.png');
        this._addItem('bug', this.bugCount, 'source/img/bug.png');
    }
    
    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }

    // 언더바(_)를 쓰면 외부에서는 쓰면 안된다는 표시
    _addItem(className, count, imgPath){
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE;
        for(let i=0; i<count; i++){
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src',imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }

    onClick(e){
        const target = e.target;
        //matches() : css 셀렉터랑 일치하는지 체크하는 함수
        if(target.matches('.carrot')){
            //당근!
            target.remove();
            playSound(carrotSound);
            this.onItemClick && this.onItemClick('carrot');
        }else if(target.matches('.bug')){
            //벌레!
            playSound(bugSound);        
            this.onItemClick && this.onItemClick('bug');
        }
    }

}
//클래스 END
function randomNumber(min, max){
    return Math.random() * ( max - min ) + min;
}

function playSound(sound){
    sound.currentTime= 0;
    sound.play();
};