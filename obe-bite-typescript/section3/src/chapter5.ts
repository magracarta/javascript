/**
 * 타입추론
 */

let a = 10; // 타입 넓히기
let b = "B";
let c = {
    id :1,
    name : "김민주",
    profile:{
        nickname: "min"
    },
    urls:["https://test.com"]
}

let {id, name, profile} = c;
let [one, tow, tree] = [1,"hello",true];

function func(message = "hello"){
    return "hello";
}


/**
 * 암묵적으로 any 타입을 추론
 * any 타입의 진화
 */
let d;
d=10; // any => number
d.toFixed();
d= "hello"; // => string
d.toUpperCase();


const num = 10;
const str = "sdf";

let arr = [1,"st",true];





