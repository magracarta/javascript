/**
 * 인터페이스의 확장
 */

type Animal = {
    name: string;
    age :number;
}

interface Dog extends Animal{
    // name : "hello";
    isBark:boolean;
}

const dog : Dog ={
    name: "hello",
    age : 20,
    isBark:true,
}

interface Cat extends Animal {
    isScratch : boolean;
}

interface Chicken extends Animal {
    isFly : boolean;
}

interface DogCat extends Dog, Cat {

}

const dogCat : DogCat ={
    name:"",
    age :30,
    isBark:true,
    isScratch : true,


}