// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Vaiavle, rw (read/write)
// let (aeede in ES6)
let name = 'ellie';//글로벌 스코프
{
    let name = 'ellie';//렉시컬 스코프
    console.log(name);
    name='hello';
    console.log(name);
    
}
console.log(name);


//var (don't ever use this!)
//var  hoisting (move declaration from bottom to top)
// has no block scope
{

    console.log(age);
    age = 4;
    var age;
}
console.log(age);

// 3. Constants r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInweek = 7;
const maxNumber = 5;


//4. variable type
// primitive, single  item: number, string, boolean, null, undefined, symbol
// object , box container
// function

const count = 17;
const size = 17.1;
console.log(`value : ${count} , type: ${typeof count}`);
console.log(`value : ${size} , type: ${typeof size}`);

//number - special numeric values : infinity, -infinty, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet);
const bigInt = 123456789456123789123456789452135798n;
console.log(`value: ${bigInt} , type: ${typeof bigInt}`);


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;//template literals (string)
console.log(`value: ${helloBob}, type:${typeof helloBob}`);

//boolean
//false : 0, null, undefined, NaN, ''
//true: any other value

//symbol, create uniqur identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 == symbol2);
//그냥 출력하면 오류가 뜸 -> .description을 붙여야함
console.log(symbol1.description);

//object, real-life object, data structure
const ellie = { name : 'ellie', age:20};
console.log(ellie.name);
ellie.name = 'hilo';
console.log(ellie.name);

//5. Dynamic typing: dynamically typed language
//이를 해결하기 위해 타입스크립트가 나옴 -> 자바스크립트 위에 타입을 얹음
// 자바스크립트 -> 타입 스크립트로 옮겨짐.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type:${typeof text}`);
text = '7'+5; // string 과 string을 합해버린다.
console.log(`value: ${text}, type:${typeof text}`);
text = '8'/'2'; // string을 변환해서 number로 타입이 변환
console.log(`value: ${text}, type:${typeof text}`);
