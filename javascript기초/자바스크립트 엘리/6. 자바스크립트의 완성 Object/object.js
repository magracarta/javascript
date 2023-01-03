//object
//one of the javascript's data types.
//a collection of related data and/or functionally.
//Nearly all Object in javascript are instance of Object
//object = {key: value}

//1. Literals and properties
const obj1={}; //object literal syntax
const obj2=new Object(); // object constructor syntax

function print( person){
    console.log(person.name);
    console.log(person.age);
};

const ellie = {name:'ellie', age: 4};
print(ellie);

//with javascript magic (dramatically typed language)
//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can dlelte
delete ellie.hasJob;
console.log(ellie.hasJob);

//2.computed properties
// key should be aways string
console.log(ellie.name); // 코딩하는 순간 해당하는 값을 받아오고싶을때
console.log(ellie['name']); //스트링 형태로 출력가능 
//정확하게 어떤키가 필요한지 모를때 runtime 진행할때(실시간으로)
ellie['hasJob'] = true;
console.log(ellie.hasJob);


function printValue(obj,key){
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('ellie', 30);

console.log(person4);

//4.constructor funstion
function Person(name, age){
        // this = {}
        this.name =name;
        this.age = age;
        //return this;
}


//5. in operator: property exitence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


//6. for ..in vs for ..of
//for (key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}
// for (balue of interable)
const array = [1,2,3,4];
for(value of array){
    console.log(value);
}


//7. fun cloning
//Object.assign(dest, [obj1,obj2, obj3...]);
const user = {name:'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);


//old way
const user3= {};
for(key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const fruit3 = {color:'black'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);