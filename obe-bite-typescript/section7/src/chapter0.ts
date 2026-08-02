/**
 * 제네릭
 */

// 제네릭 함수 
//          타입변수
function func<T>(value : T):T{
    return value;
}

let num = func(10);
// num.toUpperCase();
num.toFixed();

let bool = func(true);

let str = func("string");

//튜플타입으로 넣는 방법
let arr = func<[number, number, number]>([1,2,3]);