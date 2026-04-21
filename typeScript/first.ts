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


// type B = { type:'b',bbb:string };
// type C = { type:'c',ccc:string };
// type D = { type:'d',ddd:string };

// function typeCheck(a:B | C | D){
//     if('bbb' in a){
//         a.bbb;
//     }else if(a.type ==='c'){
//         a.ccc;
//     }else{
//         a.ddd;
//     }
// }


// interface Cat {meow : number}
// interface Dog {bow : number}

// function CatOrDog (a: Cat | Dog) : a is Dog {
//     //타입 판별을 직업 만든다.
//     if((a as Cat).meow) {return false;}
//     return true;
// }

// //타입을 구분해주는 커스텀 함수를 여러분이 직접 만들 수 있다.
// const cat : Cat | Dog  = { meow : 3 }
// if(CatOrDog(cat)){
//     console.log(cat.meow);
// }

// if('meow' in cat){
//     console.log(cat.meow);
// }


// //커스텀한 타입가드
// function pet(a: Cat | Dog){
//     if(CatOrDog(a)){
//         console.log(a.bow);
//     }
//     if('meow' in a){
//         console.log(a.meow);
//     }
// }


//커스텀하게 타입가드...
// const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
//    return input.status === 'rejected'
// };
// const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
//   return  input.status === 'fulfilled'
// };

// // Promise -> Pending -> Settled

// const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);

// const errors = promises.filter((promises)=> promises.status === 'rejected');
// // const errors = promises.filter(isRejected);

// export{};


// const x:{} = 'hello';
// const y:Object = 'hi'; // {}, Object  모든타입.
// const xx: object ='hi';
// const yy : object = {hello : 'world'}; //object 지양, interface, type, class
// const z: unknown = 'hi';

// unknown  = {} | null | undefinded
// any와 마찬가지로 모든 갑을 받을수 있다.
// if(z){
//     z;
// }

// interface ReadOnly {
//     readonly a: string;
//     b: string;
// }

// const readonly : ReadOnly = {a:'hello', b: 'world'};

// readonly.a ='12';
// readonly.b ='12';

//인덱스 시그니처
// interface A {
//     [key: string] : string
// }
// const aaaa: A = {a:'hello', b:'world'};


// type B = 'Human' | 'Mammal' | 'Animal';
// type C = 'Human1' | 'Mammal2' | 'Animal3';

// type A = {[key in B]:C};

// const aaa:A = {Human: 'Human1', Mammal:'Mammal2', Animal:'Animal3'};


// class A {
//     private a : string = '123'; // 타입스크립트에서 제공하는 
//     #b : number = 123; // 자바스크립트의 프라이빗
//     method(){
//         console.log(this.a, this.#b);
//     }
// }

// type AA = A;
// const a : A = new A('123');


// interface A {
//     readonly a : string;
//     b: string;
//     method():void;
// }

// class B implements A {
//    private a :string = '123';
//    protected b: string = 'world';
//    c:string = 'wow';

//    method(){
//     console.log(this.a);
//     console.log(this.b);
//     console.log(this.c);
//    }
// }



// class c extends B {
//  method(){
//     console.log(this.a);
//     console.log(this.b);
//     console.log(this.c);
//    }

// }

// new c().a;
// new c().b;
// new c().c;


//              public           protected       private
// 클래스내부       O                   O              O
// 인스턴스         O                   X              X
// 상속클래스        O                   O              X

// function abc(a:number, b?:number, c?: number){

// }

// abc(1);
// abc(1,2);
// abc(1,2,3);
// abc(1,2,3,4);

// let obj : {a:string, b?:string} = {a:'hello', b:'world'};
// obj = {a:'hello'};



// function add<T extends number | string , K extends string>(x:T, y:T):T {
//     return x+y;
// };

// add(1,2);
// add('1','2');
// add('1',2);

// function add<T extends string>(x: T, y: T): T { return x + y }
// add(1, 2);
// add('1', '2')

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol



// const a = (b:number=3, c:number=5)=>{
//     return '3';
// }

// const add= <T extends unknown> (x:T , y:T) => ({x,y});

// const result = add(1,2);


// interface Array<T>{
//     forEach(callbackfn :(value:T, index:number, array: T[])=> void, thisArg?:any ):void;
// }


const a: Array<number> = [1,2,3];
// a.forEach((value)=>{console.log(value);});
// //콘솔의 1,2,3

['1','2','3'].forEach((value)=>{console.log(value);});
// [true, true, true].forEach((value)=>{console.log(value);});
// [true, '1', 3].forEach((value)=>{console.log(value);});



// function add<T>(x:T, y:T){

// }

// // add(1,'2');
// // add('1',1);
//  add(1,1);
// // 

// const strings = [1,2,2].map((item)=>item+1);

interface Array<T>{
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const predicate = (value: string|number):value is string => typeof value == 'string';
const filterd = ['1', 2, 3, '4', 5].filter(predicate );

