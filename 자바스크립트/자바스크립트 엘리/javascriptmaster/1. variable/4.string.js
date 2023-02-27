// 무자열 타입
let string = "안녕하세요";
string = `안녕하세요`;

console.log(string);

//특수 문자 출력하는법

string = '"안녕하세요"';
console.log(string);


string = '"안녕\n하세요"';
console.log(string);
string = '"안녕\t하세요"';
console.log(string);
string = '"안녕\"하세요\\\u09AC"';
console.log(string);

// mdn 이스케이프 표현 확인

// 템플릿 리터럴 (Template Literal)

let id = '엘리';
let greetings = "'안녕!',"+id+"hihihihi \n 즐거운 하루 보내여!";
console.log(greetings);

greetings = `'안녕!',${id}hihihihi 
 즐거운 하루 보내여!`;
console.log(greetings);


