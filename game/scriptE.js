'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME_DURATION_SEC = 3;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUpMessage = document.querySelector('.popUp__message');
const popUpRefresh = document.querySelector('.popUp__refresh');
const popUp = document.querySelector('.popUp');

let started = false;
let score = 0;
let timer = undefined;

popUpRefresh.addEventListener('click',()=>{
    startGame();
})
field.addEventListener('click', onFieldClick)

gameBtn.addEventListener('click',()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
    started = !started;
})
function onFieldClick(e){
    if(!started){
        return;
    }
    const target = e.target;
    //matches() : css 셀렉터랑 일치하는지 체크하는 함수
    if(target.matches('.carrot')){
        //당근!
        target.remove();
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    }else if(target.matches('.bug')){
        //벌레!
        stopGameTimer();
        finishGame(false);
    }
}
function finishGame(win){
    started = false;
    hideGameBtn();
    showPopUpWithText(win? 'YOU WON' : 'YOU LOST')
}
function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}
function stopGame(){
    started = false
    stopGameTimer();
    hideGameBtn();
    showPopUpWithText('REPLAY❓')
}
function refreshGame(){
    hidePopUp();
}
function showPopUpWithText(text){
    popUp.classList.remove('popUp-hide');
    popUpMessage.innerText = `${text}`
}

function hidePopUp(){
    popUp.classList.add('popUp-hide');
}
function startGame(){
    started = true
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
}

function startGameTimer(){
    let remaingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remaingTimeSec);
    timer = setInterval(() => {
        if(remaingTimeSec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remaingTimeSec);
    }, 1000);
}
function stopGameTimer(){
    clearInterval(timer);
}
function updateTimerText(time){
    const minutes = Math.floor(time / 60); //60으로 나눈 값을 정수로 5이면 0분, 60이면 1분, 120이면 2분
    const seconds = time % 60; //60으로 나눈 나머지 값, 5면 5초, 10이면 10초, 60이면 0초
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showTimerAndScore(){
    gameTimer.style.visibility = 'visible'
    gameScore.style.visibility = 'visible'
}
function hideGameBtn(){
    gameBtn.style.visibility = 'hidden';
}
function showGameBtn(){
    gameBtn.style.visibility = 'visible';
}
function showStopBtn(){
    const icon = gameBtn.querySelector('i');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}


function initGame(){
    //벌레 당근 없애고 담기 위해서 
    field.innerHTML= '';
    gameScore.innerText = CARROT_COUNT;
    //벌레 당근 생성 field에 추가
    addItem('carrot', CARROT_COUNT, 'source/img/carrot.png');
    addItem('bug', BUG_COUNT, 'source/img/bug.png');
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for(let i=0; i<count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src',imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max){
    return Math.random() * ( max - min ) + min;
}