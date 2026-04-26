// function a(this : Window | typeof obj, a: string){
//  console.log(this.name);   
// }

// const obj = {name: 'minju'};
// const b = a.bind(obj,'123');

// b(); // 'minju'


// type  T = ThisParameterType<typeof a>;
// type NoThis = OmitThisParameter<typeof a>;

 //bind를 통해서 this를 바꿔주는 방법
// const zerocho = {
//     name:'zerocho',
//     sayHello(this:{name: string}){
//         console.log(`hi ${this.name}`);
//     }
// }

// const sayHi = zerocho.sayHello.bind({name:'nero'});
// sayHi();


// function add(a:number, b:number, c:number, d: number , e:number, f: number){
//     return a+b+c+d+e+f;
// }


// const add1 = add.bind(null);
// add1(1,2,3,4,5,6);


// const add2 = add.bind(null,1);
// add2(2,3,4,5,6);
// const add3 = add.bind(null,1,2,3);

// add3(4,5,6);

// const add5 = add.bind(null,1,2,3,4,5);


const a = [1,2,3,[1,2],[[1],['22']]].flat(2);

const b = [1,2,3,[1,2]].flat();


type A = {
    name : string,
    age : number,
}

type B = A[1 extends number ? 'age':'name'];




















