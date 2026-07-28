/**
 * 선언 합침
 */

interface Person {
    name :string;
}

interface Person {
    // name: number;//같은 프로퍼티인데 타입이 다르면 -> 충돌남
    age:number;
}

interface Developre extends Person {
    name:"hello";
}

const person : Person ={
    name:"",
    age : 27,
}

/**
 * 모듈 보강
 */

interface Lib{
    a:number;
    b:number;
}

interface Lib {
    c:"hello",
}



const lib : Lib = {
    a:1,
    b:2,
    c:"hello"
}