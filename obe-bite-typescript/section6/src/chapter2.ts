/**
 * 접근제어자
 * access modifier
 * => public private protected
 */


class Employee{
    // private name:string;
    // protected age:number;
    // public position: string;

    /**
     * 생성자에 접근제어자를 사용하면 자동 할당 =>필드를 삭제해줘야한다.
     * @param name 
     * @param age 
     * @param position 
     */
    constructor(private name:string, protected age:number, public position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드 정의
        work(){
        console.log(`${this.name} 일함`);
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
    func(){
        // this.name;
        this.age;
    }
}




const employee = new Employee("김민주",31 , "developer");

// employee.name ="홍길동";
// employee.age = 30;
employee.position ="디자이너";
console.log(employee);