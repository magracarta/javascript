// const a = '5'; 
// const b: number = 5; 
// const c: boolean = true;
// const d:  undefined = undefined;
// const e: null = null;
// // const f: symbol = Symbol.for('abc');
// // const g: bigint = 1000000n;

// const f : any = true; // 모든 타입이 가능 -> 하지만 any 를 쓰면 타입스크립트가 아닌 자바스크립트.... 타입스크립트를 사용하는 이유가 없다. 


// //                                  리턴값에도 타입을 넣어야함
// // function add(x: number , y:number) : number{return x+y}



// // type Add = (x:number, y:number)=>number;// 함수의 타입을 따로 변수처럼 뺄수 있음.
// interface Add {
//     (x:number , y:number) : number;
// }//인터페이스로 함수를 만드는 방법

// // const add: Add = (x,y) => x+y;

// //객체
// const obj : {lat : number,lon : number} = { lat:2, lon:3 };
// const arr : string [] = ['123','456'];
// const arr2 : Array<number> = [123,456]; //제네릭
// const arr3:[number,number,string] = [123,456,'hello']; // 튜플
// // string || number  파이프

 

// // function add(x: number, y: number): number { return x + y }
// // const add: (x: number, y: number) => number = (x, y) => x + y;
// // const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 



// function add (x: number, y: number):number{ return x+y };
// const result = add(1,2);



// //moduleDetection 가 존재하여 파일 검사 대상에서 제외
// //npx tsc --noEmit


// let aa = 123;
// aa ='hello' as unknown as number;

// // function add(x:number, y:number): number;
// // function add(x,y){
// //     return x+y
// // }


// // try {
// //   const array = []; // noImplicitAny가 false일 때
// //   array.push('hello');
// // } catch(error) {
// //   error;
// // }

// const head = document.querySelector("#head");

// if(head){
//     head.innerHTML ='helloWorld';
//     console.log(head);
// }


// export {};


// type World = "world" | "hell";

// const w :World = "world";

// // type Greeting = "hello world"
// type Greeting = `hello ${World}`;
// const g: Greeting = "hello hell";


// let arr : String [] =[];
// let arr2 : Array<String> = [];

// function rest(a:string,...args: number[]){
//     console.log(args); //'1',[,2,3]
// }
// rest('1',2,3);

// const tuple: [string, number] = ['1',1];
// tuple[2] = "hello";
// tuple.push('hello');


// const enum EDirection {
//     UP = 1,
//     DOWN = 3 ,
//     Left = 4,
//     Right =6,
// }


// const ODirection ={
//      UP : 1,
//     DOWN : 3 ,
//     Left : 4,
//     Right :6,
// } as const

// const a = EDirection.UP;
// let dow =  ODirection.DOWN;

// function walk(dir: EDirection){}

// type Direction = typeof ODirection[keyof typeof ODirection];
// function run(dir: Direction){}

// walk(EDirection.Left);
// run(ODirection.DOWN);

// const obj = {a:'123',b:'234', c:'world'} as const;

// type key = typeof obj[keyof typeof obj];
// type kk = EDirection;


//  type A = {a:string};
//  const a: A = {a: 'hello'};

//  interface B {a:string}
//  const b:B = {a:'hello'};

//  // 객체 지향 프로그래밍 할때는 interface 로 작업하면된다.

// function add (x: string | number, y:string | number): string | number { return x+y }
// const result : string | number = add(1,2);



// add(1,2);
// add('1','2');
// add(1,'2'); 


//type a = string & number;
// type A = {hello : 'world'} & {zero : 'cho'};
//and  이면 모든 속성이 다있어야 하고 | 는 둘중에 하나만 있어도 된다.
// const a : A = {hello:"world", zero:"cho" }

// type A = {a:string};
// const a: A = {a:'hello'};


// 타입을 상속하는 개념 & 는 상속하는 느낌으로 사용.
// type Animal = {breath : true};

// type Poyouryu =Animal& {breed:true };
// type Human = Poyouryu& { think : true };
// const zerocho : Human = {breath:true, breed:true, think:true};

//  interface A {
//     breath : true
//  }

//  interface B extends A {
//     breed:true;
//  }

//  const b:B = { breath: true,breed:true };



// 인터페이스는 중복해서 사용하면 그안에 값을 추가해서 사용할수 있음. 짱인데?
// interface A {
//     talk : ()=> void
// }

// interface A {
//     eat: () => void;
// }

// const a:A = {talk(){} , eat (){}, shit(){}}


// interface A {
//     shit: () => void;
// }

//객체 리터럴에서 잉여 속성검사가 있다.
// interface A {a:string}
// const obj = { a:'hello', b:'world' };
// const obj1 :A = obj;

// function a(): void{
//     // return undefined;
//     return;
// }



// interface Human{
//     talk : ()=> void;
// }
 
// const Human: Human = {
//     talk() { return 'abc'; }
// }

// function a(callBack: () => void):void{
//     //함수에서 사용하는 void 만 return 값이 있으면 오류
//     // return '123';
// }

// a(()=>{return 'a'});


// declare function forEach(arr: number[], callback: (el:number) => void): void;
// let target: number []=[];

// forEach([1,2,3], el => {target.push(el)});
// forEach([1,2,3], el => target.push(el));




//declare
// 다른 파일에서 함수/변수가 선언되어있다는 것을 명시해주는것 (보증한다.) 왜냐 타입스크립트 파일 자체는 그게 있는지 없는지 모르기때문.


// interface A {
//     talk : ()=> void;
//     talk2 : ()=> void;
// }

// const a: A = {
//     talk(){ return 3 },
//     talk2(){ return '3' },
// }

// const b = a.talk() as unknown as number;




// const b : unknown = a.talk();
// (b as A ).talk();
// b.talk2();

//unknown 타입의 예시 error 
//원래 any 였는데 -> 바쓈
// try {

// }catch(error){
//     (error as Error).message
// }

// 타입가드
// unknown 일땐 as를 사용하면 안된다.
// function numOrStr(a:number|number[]){
//     // if(typeof  a === 'string'){
//     //     a.split(',');
//     // }else{
//     //     a.toFixed(1);
//     // }

//     // if(typeof a === 'string'){
//     //     a.charAt(3);
//     // }
//     // if(typeof a === 'boolean'){
//     //     // a => never
//     //     a.toString();
//     // }

//     if(Array.isArray(a)){
//         a.concat(4);
//     }else{
//         a.toFixed(3);
//     }
// }
// numOrStr(123);
// numOrStr([1,2,3]);

// class A {
//     aaa(){}
// }

// class B {
//     bbb(){}
// }

// function aOrB(param: A|B){
//     if(param instanceof A){
//         param.aaa();
//     }
// }


// aOrB(new A());
// aOrB(new B());


type B = { type:'b',bbb:string };
type C = { type:'c',bbb:string };
type D = { type:'d',bbb:string };

function typeCheck(a:B | C | D){
    if(a.type ==='b'){
        a.bbb;
    }else if(a.type ==='c'){
        a.type;
    }
}
