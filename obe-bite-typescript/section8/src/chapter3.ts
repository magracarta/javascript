/**
 * 맵드 타입
 * 인터페이스에서는 사용불가
 * 무조건 타입스크립트에서 사용할 수 있다.
 */

interface User{
    id:number;
    name:string;
    age:number;
}

type PartialUser = {
    [key in keyof User]? : User[key];
};

type BooleanUser ={
    [key in keyof User]? :boolean;
}

type ReadOnlyUser ={
    readonly [key in keyof User] : User[key];
}

//한명의 유저 정보를 불러오는 기능
function fetchUser():ReadOnlyUser{
    //... 기능
    return {
       id:1,
       name: "이정환",
       age:27,
    }
}

const user = fetchUser();
//수정불가
//user.id = 1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser){
    // ...수정하는 기능
}

updateUser({
    // id:1,
    // name:"이정환",
    age:25,
});

function booleanUser(isUser : BooleanUser){
    if(isUser.id){
        
    }
}

booleanUser( {id: typeof "" == "string" } );