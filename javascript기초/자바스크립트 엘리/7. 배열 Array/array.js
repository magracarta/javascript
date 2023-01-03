'use strict';
//Array 🎉

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

console.clear();

//3. loading over an array
//print all fruits
//a.for
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//b. for od 
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index )=> console.log(fruit));

console.clear();
//4. addtion, deletion, copy
// push: add an item to the end
fruits.push('🍒','🍓');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
//unshift : add an item to the beniggin
fruits.unshift('🍒','🍓');
console.log(fruits);

//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!!! shifr, unshifr are slower than pop, push
//splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,0,'🍏','🍉');
console.log(fruits);

// combine two arrays
const fruit2 = ['🍐','🥥'];
const newfruits = fruits.concat(fruit2);
console.log(newfruits);

console.clear();
//5.Searching
// find the index
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍏'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));


