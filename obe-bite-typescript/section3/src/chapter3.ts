/**
 * unknown 타입
 */

function unknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;
    

    let unknownVar : unknown;

    // let num: number = unknownVar;
    // let str: number = unknownVar;
    // let bool: number = unknownVar;
}

/**
 * Never 타입 -> 공집합
 * 어떤 값도 들어갈수 없는 경우에 사용
 */
function neverExamp(){
    function neverFunc():never{
        while(true){}
    }

    let num:number = neverFunc();
    let str:string = neverFunc();
    let bool:boolean = neverFunc();

    // let never1 : never = 10;
    // let never2 : never = "str";
    // let never3 : never = true;
}

/**
 * Void 타입
 */
function voidExam(){
    function voidFun(): void{
        console.log("hi");
    }
    let voidVar : void = undefined;
}

/**
 * any 타입
 */
function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefineVar : undefined;
    let neverVar : never;

    anyVar = unknownVar;
    undefineVar = anyVar;
    neverVar : anyVar;
}
