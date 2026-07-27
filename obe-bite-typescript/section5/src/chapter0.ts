/**
 * 인터페이스
 */

interface Person {
    readonly name : string;
    age? : number;
    sayHi(): void;
    sayHi(a: number, b:number): void;
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;


type Func = {
    (): void;
}

const func : Func = ()=>{};

const person : Person = {
    name : "김민주",
    // age:31,
    sayHi : function(){
        console.log("하이");
    }
}


// person.name  = "홍길동";

person.sayHi();
person.sayHi(1,2);