//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals : 1 + 2 = ${1+2}`);

//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //dvide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //expontiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

//counter = counter +1;
//preIncrement = counter; 

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;

//counter = counter +1;
//preIncrement = counter; 


//4. Assingment operators
let x = 3;
let y =6;
x+=y; //  x = x+y;
x-=y;
x*=y;
x/=y;

//5. Comparison operators
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than or equal
console.log(10>=6); // greater than or equal


//6. Logical operator: || (or), && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

//|| (or) finds the first truthy value
console.log(`or: ${value1||value2||check()} ` );

//&& (and), finds the first falsy value
console.log(`or: ${value1&&value2&&check()} ` );


//often used to compress long if-statement
//nullableObject && nullableObject.something


function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('😘');
    }

    return true;
}

//! (not)

console.log(!value1);



//7.Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type convension
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const elie1 = {name:'ellie'};
const elie2 = {name:'ellie'};
const elie3 = elie1;

// 레퍼런스 값(value)이 똑같기 때문에 같다.
console.log(elie1 == elie2); // false
console.log(elie1 === elie2); // false
console.log(elie1 === elie3); // true



// 8. Conditional operators : if
// if, else if , else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name ==='coder'){
    console.log('you are amazing coder');
}else{
    console.log('unknown');
}


//9. Ternary operator: ?
// condition ? value1 : value2;
//삼항 연산자
console.log(name === 'ellie' ? 'yes' : 'no');


//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
        console.log('love you');
        break;

    default:
         console.log('same sll!');
         break;
}

//11. loops
//while loop, while the condition is truthy,
// body code is esxcuted.
//조건문을 먼저 실행
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
//블럭을 미리 실행
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);
//for loop, for (begin; condition; step)
for(let i = 3; i>0; i=i-2){
    console.log(i);
}


// nested loops  
for(let i =0; i<10; i ++){
    for(let j =0; j < 10; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i =0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q1 ${i}`);
}


//Q2. interate from 0 to 10 and print number until reaching 8 (use break)

for(let i=0; i<10; i++){
    if(i>8){
        break;
    }
    console.log(`q2 ${i}`);
}
