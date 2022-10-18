'use strict';
//Javsscript id synchronous.
//Execute the code block by orger afrter hoisting.
//hoisting : var ,  funciton declaration : 자동으로 함수 선언들이 맨위로 올라가는것
console.log('1');
setTimeout(()=>
    console.log('2')
,1000);
console.log('3');

//Synchronous callback 즉각적으로
function printImmediately(print){
    print();
}

printImmediately(()=>{console.log('hello')});
//Asynchronus callback 언제 실행될지 모를 때

function prinWidthDelay(print, timeout){
    setTimeout(print, timeout);
}

prinWidthDelay(()=>console.log('async callback'),2000);

//callback Hell example

class UserStorage {
    loginUser(id,password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id=='ellie' && password ==='dream') ||
                (id=='coder' && password ==='academy') 
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    };
}

const userStorage = new UserStorage();
const id = prompt('enter Your id');
const password = prompt('enter Your password');
userStorage.loginUser(id,password
    ,(user)=>{
        userStorage.getRoles(user, (userWidthRole)=>{
            alert(`Hello ${userWidthRole.name}, you have a ${userWidthRole.role} role`);
        },(error)=>{
            console.log(error);
        });
    },error=>{
        console.log(error);
    }
);