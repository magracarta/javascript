//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value


//1. function decleration
//function name (paraml, param2) {body... return;}
//one function === one thing
//naming : doSomegthing, command, verb
//e.g. createCardAndPoint -> ctrateCard , createPoint (세분화 할수 있는지 한번더 리펙토링 깨끗하게 사용하기)
//function is object in JS
//function은 object 이다 -> 변수에 할당 할수있고, 파라미터로 전달 가능 , 함수를 리턴 할수 잇다.
function printHello(){
    console.log('Hello');
}
printHello();
function log(message){
    console.log(message);
}
log('hello@');


//2. parameters 
//premitive parameters: passed by value
//object parameters: passed by refrence
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);


//3. Default parameters (added in ES6)
function shomessage(message, from = 'unknown'){
    
    console.log(`${message} by ${from}`);

}
shomessage('HI!');


//4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
}

printAll('dream','coding','ellie');


//5. Local scope 
//밖에서는 안이 보이지 않고 안에서만 밖을 볼수있다.
let globalMessage = 'global'; //global variable;
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let  childMessage = 'hello';
    }
}

printMessage();


//6.  Return a value
function sum(a,b){
    return a+b;
}

const result = sum(1,2); //3
console.log(`sum : ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...

    }
}

//good
function upgradeUser(user){
    if(user.point <= 10) return;
    //long upgrade logic...
}

//First-class function
//funtion are treated like any other variable 변수에 할당
//can be assigned as a value to variable 
//can be passed as an argument to other funtion.
//can be returned by another function

//1. function expression
//a function declaration can be called earlier than it is defined. (hoisted).
//a function expression is created when the execution reaches it.
const print = function(){
    console.log();
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));