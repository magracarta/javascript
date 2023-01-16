class Counter {
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
        }
    }
}


function printSomething(num){
    console.log(`yo!${num}`);
}
function alertNum(num){
    alert(`yo!${num}`);
}
const Coolcounter = new Counter(printSomething);
const alertcounter = new Counter(alertNum);
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();
Coolcounter.increase();