// const num = 1;
// const num2 =2;
// const result = num+num2;
// console.log(result);
// function add(num1,num2){
//     return num1+num2;
// }
// const sum = add(3,4);
// function print(a,b){
//     console.log(`${a}${b}`);
// }
// print(8,23);

// const doSomething = add;
// const result = add(2,3);
// const result2 = doSomething(2,3);
// console.log(result);
// console.log(result2);

function add(num1,num2){
    return num1+num2;
}
function divide(num1,num2){
    return num1/num2
}
function surprise(operator){
    const result = operator(2,3);
    console.log(result);
}
surprise(divide);