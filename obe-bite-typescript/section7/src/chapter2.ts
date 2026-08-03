/**
 * map 메서드
 */

const arr =[1,2,3];
const newArr = arr.map((it)=>it*2);
// [2,4,6]

function map<T, U>(arr:T[], callback:(item:T)=>U){
    let result = [];
    for(let i =0; i< arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it)=> it*2);
map(["hi","hello"], (it)=> parseInt(it));

/**
 * forEach
 */
const arr2 = [1,2,3];
arr2.forEach(function(this:number[],it){
    console.log(it  + this[0])
},arr);

function forEach<T>(arr: T[], callback:(item: T)=>void){
    for(let i =0; i<arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2,(it)=>{
    console.log(it.toFixed());
});

forEach(['123','345'], (it)=>{
    it;
});