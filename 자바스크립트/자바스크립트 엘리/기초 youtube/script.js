'use strict';

class User {
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value <0 ? 0 : value;
    }
}



//Getter and setter
const user1 = new User('steve','job', -1);

console.log(user1.age);


class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectabgke extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectabgke(20,20,'blue');
rectangle.draw();
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());
