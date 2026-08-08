/**
 * 문자열로 여러개 타입을 섞어서 사용하고 싶을때 사용.
 * 템플릿 리터럴 타입
 */

type Color = "red"|"black"|"green";

type Animal = "dog"|"cat"| "chicken";


type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal : ColoredAnimal = 'black-chicken';