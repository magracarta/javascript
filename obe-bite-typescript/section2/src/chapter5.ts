// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입


 enum Role {
    ADMIN ,
    USER  = 10 , // -> 숫자형 이넘
    GUEST,
 }

 
 enum Language {
    korea = "ko" ,
    english = "en", // 
 }


 const user1 ={
    name:"이정현",
    Role : Role.ADMIN , //0 <- 관리자
    language : Language.korea
 }

 const user2 ={
    name : "홍길동",
    Role: Role.USER, // 1 <- 일반유저
    language : Language.korea
 }

 const user3 ={
    name: "아무개",
    Role : Role.GUEST, // 2 <-게스트
    language : Language.english
 }


 console.log(user1,user2,user3);