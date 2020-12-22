window.addEventListener('load', ()=>{
/* 배경음 & 효과음 Start */
const alertSound = new Audio('source/sound/alert.wav');
const bgm = new Audio('source/sound/bg.mp3');
const bugPullSound = new Audio('source/sound/bug_pull.mp3');
const carrotPullSound = new Audio('source/sound/carrot_pull.mp3');
const gameWinSound = new Audio('source/sound/game_win.mp3');
/* 배경음 & 효과음 End */

const header = document.querySelector('header');
const section = document.querySelector('section');
const playContainer = document.querySelector('.play__container');
const playContainerBtn = document.querySelector('.play__container button');
const time = document.querySelector('.time');

//alert 만들기 함수
const makeAlert = function(text){
    const alertContainer = document.createElement('div');
    alertContainer.setAttribute('class', 'alert__container');       
    alertContainer.innerHTML = `
    <div class="play__container">
    <button class="replay__button">
    <i class="fas fa-redo-alt"></i>
    </button>
    </div>
    <div class="alert__text">
    <span>${text}
    <i class="fas fa-question"></i>
    </span>
    </div>
    `;
    section.appendChild(alertContainer);
}

//노래 재생 멈춤 함수
function soundplay(sound){
    sound.play();
}
function soundstop(sound){
    sound.pause();
}

/* 재생버튼 누르면 */
    playContainer.addEventListener('click', ()=>{
        if(playContainerBtn.className == 'play__button'){
        //1.bgm재생
            soundplay(bgm);
            countdown(9, time);
            //재생버튼
            playContainerBtn.classList.remove('play__button');
            playContainerBtn.classList.add('pause__button');
        }else{
            //리플레이
            playContainer.style.visibility = 'hidden';
            countdown(500,'stop');
            makeAlert('Replay');
            soundstop(bgm);        
        };
       
        //2. 벌레당근 무작위 포지션 등장
        //3. 시간 카운트 다운 시작
        function countdown(timeInSeconds, element) {
            let timer = timeInSeconds;
            let minutes;
            let seconds;
            let timerInterval = setInterval(function () {  
                if(timer == 500){
                    clearInterval(timerInterval);
                    console.log('하하');
                }    
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                element.textContent = minutes + ":" + seconds;
                
                /* 카운트 다운 00:00이면 */
                if (--timer < 0) {
                    clearInterval(timerInterval);
                    //1. 팝업
                    makeAlert('YOU LOST');
                }
            }, 1000);
        }
        //4. 정지 버튼으로 바뀜
    }); 


/* 리플레이 버튼 누르면 */
//1. 재생버튼 누른것과 같은 동작들


/* 정지버튼 누르면 */
    //1.팝업 
    //makeAlert('Replay');
    //2.카운터 시간 멈춤

/* 당근갯수 0이면 */
    //1. 팝업
    //makeAlert('YOU WON');
/* 벌레 누르면 */
    //벌레.addEventListner('click',()=>{
        //1. 팝업
        // makeAlert('YOU LOST');
    //})
    
/* 당근 누르면 */
    //당근.addEventListner('click',()=>{
        //1. 당근 이미지 사라지기
        //2. 당근 갯수 -1
    //})

});
