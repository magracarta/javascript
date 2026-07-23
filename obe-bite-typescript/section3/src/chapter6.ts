/**
 * 타입 단언
 * assertion
 */

type Person = {
    name:string;
    age : number;
}

let person = {} as Person;

person.name="민주";
person.age =27;


type Dog ={
    name : string;
    color:string;
}

let dog = {
    name:"돌돌이",
    color:"brown",
    breed:"진도",
} as Dog;


/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

/**
 * 수정할 수 없는 객체가 됨.
 */
let cat ={
    name:"야옹이",
    color:"yellow",
}as const

// cat.name = ''

/**
 * Non Null 단언
 */
type Post ={
    title: string;
    author ?: string;
}

let post:Post ={
    title:"게시글1",
    author:"민주"
}

// ? 은 만약 값이 없으면 undeifned 를 출력하게 한다.
// const len1 :number = post.author?.length;
// !는 값이 무조건 있다는것을 명시해줘서 컴파일오류는 안나지만 런타임 오류가 난다.
const len2 :number = post.author!.length;
