/**
 * infer
 * inference -> 추론하다.
 */


type FuncA = ()=> string;
type FuncB = ()=> number;

type ReturnTypeA<T> = T extends ()=>  infer R ? R : never;

type A = ReturnTypeA<FuncA>;
type B = ReturnTypeA<FuncB>;


type C = ReturnTypeA<number>;

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
