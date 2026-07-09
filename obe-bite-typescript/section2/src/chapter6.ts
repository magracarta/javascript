// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar:any = 10;
anyVar = "hello";
anyVar=true;
anyVar = {};

anyVar = ()=>{}

// 런타임 오류가 발생
// anyVar.toUpperCase();
// anyVar.toFixed();


let num : number = 10;
// num = anyVar;

// unkown
let unkownVar : unknown;
unkownVar = "";
unkownVar = 1;
unkownVar = ()=>{};

if(typeof unkownVar ==="number"){
    num = unkownVar;
}

