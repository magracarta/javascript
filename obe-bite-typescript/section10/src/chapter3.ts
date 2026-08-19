/**
 * Exclude<T, U>
 * -> 제외하다 추방하다
 * -> T에서 U를 제거하는
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<string | boolean | number , boolean>;


/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */
type Extract<T,U> = T extends U ? T : never;
type B = Extract<string | boolean , boolean>;

/**
 * ReturnType
 * -> 함수의 반환값 타입을 추출하는 타입
 */
// type ReturnType<T extends(...args :any) => any> = T extends (...args : any) => infer R ? R :never;


function fucA(){
    return "hello";
}

function fucB(){
    return 10;
}

type ReturnA = ReturnType<typeof fucA>;

type ReturnB = ReturnType<typeof fucB>;

