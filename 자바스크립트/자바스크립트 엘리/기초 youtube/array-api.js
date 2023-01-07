//  Q1. make a string out of an array
{
    const fruits = ['apple', 'banna', 'orange'];
    const result = fruits.join(', ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎,🍌,🍍,🍓';
    const result = fruits.split(',');
    console.log(result);
}
// Q3. make this array look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}


// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
    
}
console.clear();
class Student{
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students =[
    new Student('A', 29 , true , 45),
    new Student('B', 28 , false , 80),
    new Student('C', 30 , true , 90),
    new Student('D', 40 , false , 66),
    new Student('E', 18 , true , 88),
]

// Q5. find a student with the score 90
{
    const result = students.find((student, index)=> student.score === 90 );
    console.log(result);
}
// Q6. make an array of enrolled students
{
    const result = students.filter((students)=> students.enrolled == true);
    console.log(result);
}
// Q7. make an array containing only the students' scores 
// result sholud be: [45,80,90,66,88]
{
    const result = students.map((students)=>students.score);
    console.log(result);
}
// Q8. check if there is a students with the score lower than 50
{
    
}
// Q9. compute students' average score