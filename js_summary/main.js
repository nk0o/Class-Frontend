
function surprise(operator){
    const result = operator(20,5);
    console.log(result);
}

function add (num1, num2){
    return num1 + num2;
}

function divide (num1, num2){
    return num1 / num2;
}
surprise(add);
surprise(divide);

//surprise('더한 값 :' + add +', 나눈 값 : + divide');
let number = 2;
let number2 = 5;

console.log('숫자1 =' + number + ' 숫자2 = ' + number2)

//false : 0, -0, '', null, undefined, NaN
//true : -1, 'hello', [], 'false', 선언만 한 변수
let num; //==> undefined

let obj;
if(obj){
    console.log(obj.name);
}
obj && console.log(obj.name); 
//&&전이 true여야 뒤에꺼가 실행됨으로 위에 if문이랑 같음
//console.log(obj.name); ====> 없어서 파일 오류 뜸

console.log('============CLASS=========');


class Counter {
    constructor(runEveryFiveTimes){//생성이 되면//constructor에서 콜백함수를 받음
        this.counter = 0; //0부터 시작하는 counter라는 변수가 있다
        this.callback = runEveryFiveTimes; //함수를 변수로
    }
    //증가 함수
    //class에서 함수는 function안써도 됨
    //함수 호출할때마다 counter 1씩 증가
    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0 ){
            this.callback && this.callback(this.counter);
        }
    }
}

//클래스는 다양한 object를 만들기 위한 청사진
//쿨카운터는 우리가 만든 오브젝트를 가르키고 있음
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

//counter가 5의 배수일때 yo 콘솔 출력하는 함수
function printSomething(num){
    console.log(`yo! ${num}`);
}
//counter가 5의 배수일때 yo 알림하는 함수
function alertNum(num){
    alert(`yo! ${num}`);
}
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
console.log('======== ');
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();




































