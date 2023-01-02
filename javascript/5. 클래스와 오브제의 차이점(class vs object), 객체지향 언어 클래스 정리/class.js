'use strict';

//Object-oriented programing
//class : template
//Onject: instance of a class
//javaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    //countuctor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log(`${this.name}:hello! my age is ${this.age}`);
    }
}

const ellie = new Person('ellie', 18);
ellie.speak();
console.log(ellie.age);


//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // if(value < 0){
        //     throw Error('age can not be nagative');
        // }
        this._age = value < 0? 0 : value ;
    }
}
const user1 = new User('stve', 'job', -1);
console.log(user1.age);



//3. Fields (public, private)
//Too soon!
class Eperiment {
    publicField = 2;
    #privateFiled =0; //클래스 내부에서만 값을 매기가 사용할수있ㅈ만 밖에서는 사용 불가능(사파리에서 지원 x , 사용하려면 바벨이용)
}
const experiment = new Eperiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);

//4.Static properties and methods
//Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublicher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublicher();



//5. Inheritance
// a way for one class to extend another class.
class shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
// extends 연장한다.
class Rectangle extends shape {}
class Triangle extends shape {
    draw(){
        super.draw();//부모의 메서드를 호출
        console.log(`🔼`);
    }
    //over writing
    getArea(){
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(20,20,'red');
rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());


//6. class checking:instance Of
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);