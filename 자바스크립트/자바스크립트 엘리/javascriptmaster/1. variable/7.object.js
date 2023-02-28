let apple = {
    name: 'apple',
    color:'red',
    display:'🍎',
}

let orange = {
    name: '오렌지',
    color:'orange',
    display:'🍊',
}

let friut ={
    apple: {
        name : '사과',
        color:'red',
        display:'none',
        console: ()=>{
            console.log('사과안에 콘솔이 실해중이에여~');
        }
    },
    orange: {
        name : '오렌지',
        color:'orange',
        display:'block',
        console: ()=>{
            console.log('이것이 객체지향언어');
        }
    },
}

console.log(friut);
friut.apple.console();
friut.orange.console();