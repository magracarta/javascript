
// object
// 구조적 타입 시스템 <-> 명목적 타입 시스템 obj function  등등
// property type system 
let user: {
    id?:number; //선택적 프로퍼티 , 옵셔널 프로퍼티
    name:string;
} = {
    id :1,
    name: "이창환",
}; //객체 리터럴 타입

user.id; //'object' 형식에 'id' 속성이 없습니다.


let dog : {
    name:string;
     color:string;
    } = {
    name:"돌돌이",
    color:"brown",
}

user = {
    name:"홍길동",
}

let config : { readonly apiKey : string;} = {
    apiKey : "My Api Key"
}

//readonly 는 재할당 못함
// config.apiKey = "sdf";