/* 
AJAX : Asynchronous javaScript and Xml 동적으로 서버에게 데이터를 주고받을수있는 기술 
-xml 
    XHR : XMLHttpRequest  브라우저 api에서 제공되는 api 간단하게 서버에 데이터를 요청하고 받을수있다. 
    fetch :  위 내용과 동일 but 익스에선 작동 x

JSON : Javascript Object Notation
       object { key:  value }
       - simplest data interchange format
       - lightweight text-based structure
       - easy to read
       - key-value pairs
       - used for serialization and transmission of data between the 
         network the network connection
       - independent programming language and platform
*/

//JSON
//javaScript Object Notation

//1. Object to Json
//stringfy(obj)

let json = JSON.stringify(true);
console.log(json);


json = JSON.stringify(['apple','bananan']);
console.log(json);

const rabbit = {
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    jump:()=>{
        console.log(`${name} can jump`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);
// 함수는 오브젝트에 있는 데이커가 아니기때문에 json에서 제거 / 심볼도!
rabbit.jump();

json = JSON.stringify(rabbit, ["name","color","size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


//2. JSON to Onject
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key:${key}, value:${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
// console.log(json);
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());