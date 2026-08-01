/**
 * 타입스크립트의 클래스
 */

const employee ={
    name:"김민주",
    age : 27,
    position:"developer",
    work(){
        console.log("일함");
    },
}

class Employee{
    name:string;
    age:number;
    position: string;

    constructor(name:string, age:number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드 정의
        work(){
        console.log("일함");
    };
}

class ExecutiveOfficer extends Employee{
    //필드
    officeNumber:number;
    constructor(name:string,
         age:number, 
         position: string, 
         officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}



const employeeB = new Employee("김민주",31,"개발자");
console.log(employeeB);

const employeeC : Employee ={
    name : "",
    age:0,
    position :"",
    work(){}
}