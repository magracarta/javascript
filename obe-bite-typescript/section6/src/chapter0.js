/**
 * 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age : 27,
    study(){
        console.log("열심히 공부함");
    },
    introduce(){
        console.log("안녕하세요!");
    }
}
class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    //메서드
    
    study(){
        console.log("열심히 공부함");
    }
    introduce(){
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}




// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김민주","A+",27);
console.log(studentB);
studentB.study();
studentB.introduce();


class StudentDeveloper extends Student{
    //필드
    favoritSkill;
    // 생성자
    constructor(name, grade, age,favoritSkill){
        super(name, grade, age);
        this.favoritSkill = favoritSkill;
    }
    programming(){
        console.log(`${this.favoritSkill} 로 수정함.`);
        
    }
    
}

const studentDeveloper = new StudentDeveloper("김민주","B+", 27 , "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();