//void
//void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 읨하는 타임

function func1() :string{
    return "hello";
}

function func2() :void{
    console.log("hello");
}

let a: void;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입
function func3():never{
    while(true){}
}

function func4():never{
    throw new Error();
}