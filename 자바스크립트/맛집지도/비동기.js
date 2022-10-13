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
/*
const helloPromise = new Promise((resolve, reject) => {
    // 생성 자체는 pending
    let isSuccess = true;
  
    if (!isSuccess) {
      reject(false); // catch 호출
      return;
    }
  
    console.log("1등");
    setTimeout(() => {
      resolve(); // then 호출
    }, 2000);
  });
  
  helloPromise
    .then((res) => {
      console.log("2등");
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
      });
    })
    .then((res) => {
      console.log("3등");
    })
    .catch((err) => {
      console.log(err);
    });

*/
// async, await
//사람이 읽기 쉽다!!
/*
async function asyncFunction() {
  console.log("1등");
  await second();
  await third();
}

function second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2등");
      resolve();
    }, 2000);
  });
}

function third() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3등");
      resolve();
    }, 2000);
  });
}

asyncFunction();
*/
async function asyncFunction() {
  try {
    console.log(1);
    const result = await getResult();
    console.log(result);
    console.log(3);
  } catch (err) {
    console.log(err);
  }
}

function getResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("에러발생 예시"));
    }, 500);
  });
}

asyncFunction();