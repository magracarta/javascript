/**
 * 기본 타입간의 호환성
 */

let num1: number =10;
let num2: 10 =10;


num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 취근해도 괜찮은가?
 */

type Animal = {
    name : string;
    color : string;
}

type Dog = {
    name : string;
    color : string;
    breed : string;
}

let animal : Animal={
    name:"기린",
    color:"yellow"
};

let dog:Dog ={
    name:"돌돌이",
    color:"brown",
    breed:"진도"
}


animal = dog;
// dog = animal;

type Book = {
    name:string;
    price : number;
}

type ProgrammingBook = {
    name:string;
    price:number;
    skill:string;

};

let book:Book;
let programmingBook:ProgrammingBook={
    name:"리액트",
    price:33000,
    skill:"reactjs",
};

book = programmingBook;
// programmingBook =book; 다운 캐스팅으로 오류가 남.

/**
 * 초과 프로퍼티 검사
 */
let book2 : Book ={
    name:"리액트",
    price:33000,
    // skill:"reactjs",
}

let book3: Book = programmingBook;

function func(book: Book):void{
    console.log(book);
}

func({
    name:"합입 북",
    price:3300,
    // skill:"??"
});