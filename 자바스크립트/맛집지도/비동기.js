/*
//객체
let userInfo = {
    email : 'dummy@dummy.com',
    password : 'a1234',
}
//객체 read
console.log(userInfo.email);
console.log(userInfo['email']);

//객체 update
userInfo.email = 'update';
console.log(userInfo.email);
//객체 제거
delete userInfo.email;
console.log(userInfo);
*/

// 콜백함수
/*setTimeout(()=>{
콜백 지옥이 될수 도 있다.
},3000);
*/
// promise 객체
//promise(function(resolve, reject){~~~~})
const hi = new Promise((resolve, reject)=>{
    resolve('good');
});

hi.then((res)=>console.log(res)).catch((err)=>console.log(err));

// async, await


