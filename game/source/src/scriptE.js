'use strict';
import PopUp from './popup.js'
import Field from './field.js'
import * as sound from './sound.js'

const CARROT_SIZE = 80;
const CARROT_COUNT = 3;
const BUG_COUNT = 3;
const GAME_DURATION_SEC = 3;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

//게임 끝날때 나오는 팝업
const gameFinishBanner = new PopUp(); 
const gameField = new Field(CARROT_COUNT, BUG_COUNT); 

gameField.setClickListener(onItemClick);

function onItemClick(item){
    if(!started){
        return;
    }
    if(item === 'carrot'){
        //당근!
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    }else if(item === 'bug'){
        //벌레!
        finishGame(false);
    }
}

gameFinishBanner.setClickListener(()=>{
    startGame();
});

gameBtn.addEventListener('click',()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
})


function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}
function finishGame(win){
    started = false;
    hideGameBtn();
    if(win){
        sound.playWin();
    }else{
        sound.playBGM();
    }
    stopGameTimer();
    sound.stopBGM();
    gameFinishBanner.showWithText(win? 'YOU WON' : 'YOU LOST')
}
function stopGame(){
    started = false;
    stopGameTimer();
    hideGameBtn();
    gameFinishBanner.showWithText('REPLAY❓')
    sound.playAlert();
    sound.stopBGM();
}
function startGame(){
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
    sound.playBGM();
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
    gameBtn.style.visibility = 'visible';
}


function initGame(){
    //게임 시작할때 초기화
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
}


