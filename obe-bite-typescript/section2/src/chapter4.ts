//타입 별칭

type User = {
    id : number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

function func(){
    type User = {};
}

let user :User = {
    id: 1,
    name:"김민주",
    nickname:"winterLood",
    birth:"1996.01.28",
    bio:"안녕하세요",
    location : "부천사"
}

let user2 :User = {
    id: 1,
    name:"김민주",
    nickname:"winterLood",
    birth:"1996.01.28",
    bio:"안녕하세요",
    location : "부천사"
}

// 인덱스 시그니터 추가하려면 받는 타입이 일치해야한다.
type CountryCodes = {
    [key : string] : string;
    Korea : string;
}
//인덱스 시그니처
let conutryCodes : CountryCodes = {
    Korea : 'ko',
    UniteState : "us",
    UniteKingdom : "uk",
}
type CountryNumberCodes = {
    [key : string]:number
}
let countryNumberCodes : CountryNumberCodes = {
    Korea : 410,
    UniteState : 840,
    UniteKingdom : 826,
}