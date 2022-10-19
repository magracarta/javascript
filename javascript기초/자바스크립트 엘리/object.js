
//object = { key: value };

function print(preson){
    console.log(preson.name);
    console.log(preson.age);
};

const ellie = { name:'ellie',age:4 };
print(ellie);


ellie.hasJob = true;

console.log(ellie.hasJob);

delete ellie.hasJob;

console.log(ellie.hasJob);

//2. Computed properties

console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob']=true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key] );
}

printValue(ellie, 'name');
printValue(ellie, 'age');

//property value shorthand
const person1 = {name : 'bob' , age :2};
const person2 = new Person('box',5);

//4. Constructor function
function Person(name, age){
        this.name=name;
        this.age =age;
}

console.log(person2);

//5 in operator : property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6 for....in vs for...of
//for (key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}

//for (value of iterable)
const  array = [1,2,3,4,5];
for(value of array){
    console.log(value);
}

//7. fun cloning
//object.assign(dest,[obj1, obj2, obj3...])
const user = {name:'ellie', age:'20'};
const user2 = user;
console.log(user2);
console.log(user);

//old way
const user3={};
for(key in user){
    user3[key] = user[key];
}
user3.name = 'coder';
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);


//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big' , smell:'good'};
const fruit3 = {color:'black', size:'small'};
const mixed = Object.assign({},fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed);