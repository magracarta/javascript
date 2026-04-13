const a = '5'; 
const b: number = 5; 
const c: boolean = true;
const d:  undefined = undefined;
const e: null = null;
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;

const f : any = true; // 모든 타입이 가능 -> 하지만 any 를 쓰면 타입스크립트가 아닌 자바스크립트.... 타입스크립트를 사용하는 이유가 없다. 


//                                  리턴값에도 타입을 넣어야함
// function add(x: number , y:number) : number{return x+y}



// type Add = (x:number, y:number)=>number;// 함수의 타입을 따로 변수처럼 뺄수 있음.
interface Add {
    (x:number , y:number) : number;
}//인터페이스로 함수를 만드는 방법

// const add: Add = (x,y) => x+y;

//객체
const obj : {lat : number,lon : number} = { lat:2, lon:3 };
const arr : string [] = ['123','456'];
const arr2 : Array<number> = [123,456]; //제네릭
const arr3:[number,number,string] = [123,456,'hello']; // 튜플
// string || number  파이프

 

// function add(x: number, y: number): number { return x + y }
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 



function add (x: number, y: number):number{ return x+y };
const result = add(1,2);



//moduleDetection 가 존재하여 파일 검사 대상에서 제외
//npx tsc --noEmit


let aa = 123;
aa ='hello' as unknown as number;

// function add(x:number, y:number): number;
// function add(x,y){
//     return x+y
// }


// try {
//   const array = []; // noImplicitAny가 false일 때
//   array.push('hello');
// } catch(error) {
//   error;
// }

const head = document.querySelector("#head");

if(head){
    head.innerHTML ='helloWorld';
    console.log(head);
}


export {};