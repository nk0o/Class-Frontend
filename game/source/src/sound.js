'use strict';

const alertSound = new Audio('source/sound/alert.wav');
const bgSound = new Audio('source/sound/bg.mp3');
const bugSound = new Audio('source/sound/bug_pull.mp3');
const carrotSound = new Audio('source/sound/carrot_pull.mp3');
const WinSound = new Audio('source/sound/game_win.mp3');

//소리 플레이
export function playCarrot(){
    playSound(carrotSound)
};
export function playBug(){
    playSound(bugSound)
};
export function playAlert(){
    playSound(alertSound)
};
export function playWin(){
    playSound(WinSound)
};
export function playBGM(){
    playSound(bgSound)
};

//소리 멈추기
export function stopCarrot(){
    stopSound(carrotSound)
};
export function stopBug(){
    stopSound(bugSound)
};
export function stopAlert(){
    stopSound(alertSound)
};
export function stopWin(){
    stopSound(WinSound)
};
export function stopBGM(){
    stopSound(bgSound)
};

//함수
function playSound(sound){
    sound.currentTime= 0;
    sound.play();
};
function stopSound(sound){
    sound.pause();
};
