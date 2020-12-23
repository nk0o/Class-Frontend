window.addEventListener('load', ()=>{
    /* 배경음 & 효과음 Start */
    const alertSound = new Audio('source/sound/alert.wav');
    const bgm = new Audio('source/sound/bg.mp3');
    const bugPullSound = new Audio('source/sound/bug_pull.mp3');
    const carrotPullSound = new Audio('source/sound/carrot_pull.mp3');
    const gameWinSound = new Audio('source/sound/game_win.mp3');
    
    /* html요소 */
    const section = document.querySelector('section');
    const playContainer = document.querySelector('.play__container');
    const playContainerBtn = document.querySelector('.play__container button');
    const pullCounter = document.querySelector('.pull_counter');
    const time = document.querySelector('.time');

    //당근 갯수
    let carrotNum = 10;

    //벌레, 당근 랜덤 위치에 만들기 함수
    const pullItems = [
        'bug','bug','bug','bug','bug','bug','bug','bug','bug','bug','carrot','carrot','carrot','carrot','carrot','carrot','carrot','carrot','carrot','carrot'
    ];
    function makepullItems(){
        pullItems.forEach(element=> {
            let randomPositionx= Math.floor(Math.random() * section.clientWidth-80);    
            let randomPositiony= Math.floor(Math.random() * section.clientHeight-80);  
            if(randomPositionx < 0 ){
                randomPositionx = 0;
            }
            if(randomPositiony < 0 ){
                randomPositiony = 0;
            }
            const pullItem = document.createElement('div');
            pullItem.setAttribute('class', `pull__item ${element}`);
            pullItem.innerHTML = `<img src="source/img/${element}.png" alt="${element}">`;
            section.appendChild(pullItem);
            pullItem.style.transform = `translate(${randomPositionx}px, ${randomPositiony}px)`;
        });
    }

    //alert 만들기 함수
    function makeAlert(text){
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
    };

    //노래 재생 멈춤 함수
    function soundplay(sound){
        sound.play();
    };
    function soundstop(sound){
        sound.pause();
    };

    //시간 카운트 다운 함수
    let isStop = false;
    function stopCountdown(){
        isStop = true;
    };
    function countdown(timeInSeconds, element) {
        
        let timer = timeInSeconds;
        let minutes;
        let seconds;
        let timerInterval = setInterval(function () {  
            if (isStop) {
                clearInterval(timerInterval);
            }
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            element.textContent = minutes + ":" + seconds;
            
            if (--timer < 0) {
                clearInterval(timerInterval);
                soundstop(bgm);
                soundplay(alertSound);
                playContainer.style.visibility = 'hidden';
                makeAlert('YOU LOST');
            }
            
        }, 1000);
    };

    //게임 시작 함수
    function gameStart(){   
        section.innerHTML = '';     
        playContainer.style.visibility = 'visible';
        //1.bgm재생
        soundplay(bgm);
        //2. 시간 카운트 다운 시작
        countdown(9, time);
        //재생버튼
        //3. 정지 버튼으로 바뀜
        playContainerBtn.classList.remove('play__button');
        playContainerBtn.classList.add('pause__button');
        //4. 벌레당근 무작위 포지션 등장
        makepullItems();
        //5. 당근 갯수 보여주기
        pullCounter.innerHTML = carrotNum;
    };

    //게임 질 때
    function lost(){
        stopCountdown();
        soundstop(bgm);
        soundplay(alertSound);
        playContainer.style.visibility = 'hidden';
        makeAlert('YOU LOST');
    };

    //게임 이길때
    function win(){
        stopCountdown();
        soundstop(bgm);
        soundplay(gameWinSound);
        playContainer.style.visibility = 'hidden';
        makeAlert('YOU WON');
    };


    //====================================================================================================================

    /* 재생버튼 누르면 */
    playContainer.addEventListener('click', ()=>{
        if(playContainerBtn.className == 'play__button'){
            gameStart();
        }else{
            /* 정지버튼 누르면 */
            stopCountdown();
            soundplay(alertSound);
            playContainer.style.visibility = 'hidden';
            soundstop(bgm);
            makeAlert('Replay');
        };
    }); 

    section.addEventListener('click',(e)=>{
        /* 리플레이 버튼 누르면 */
        if(e.target.parentNode.className == 'replay__button'){
            //1. 재생버튼 누른것과 같은 동작들
            gameStart();
            
        }
        /* 벌레 누르면 */
        //1. 팝업    
        /* 당근 누르면 */
        // 1. 당근 이미지 사라지기
        // 2. 당근 갯수 -1
        if(e.target.parentNode.className == 'pull__item bug'){
            soundplay(bugPullSound);
            e.target.parentNode.remove();
            lost();
        }else if(e.target.parentNode.className == 'pull__item carrot'){
            soundplay(carrotPullSound);       
            e.target.parentNode.remove();
            carrotNum-=1;
            pullCounter.innerHTML = carrotNum;
            /* 당근갯수 0이면 */
            if(carrotNum == 0){
                win();
            }

        }
    });


});