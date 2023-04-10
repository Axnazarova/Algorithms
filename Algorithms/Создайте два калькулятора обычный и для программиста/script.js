
class SimpleCalc {
    constructor(number){
        this.number = number
    }

    plus(number){
        this.number+=number
    }

    mult(number){
        this.number*=number
    }

    divide(number){
        this.number/=number
    }

    minus(number){
        this.number-=number
    }

    toString(){
        return String(this.number)
    }
}

const simpleCalc = new SimpleCalc(8);
simpleCalc.mult(10);
simpleCalc.plus(2);
simpleCalc.minus(7);
simpleCalc.divide(5);
console.log(simpleCalc.toString()); // 15



class ProgrammerCalc extends SimpleCalc {
    constructor(number){
        super(number);
    }

    toString () {
    let num = this.number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary  
    }


}

const programmerCalc = new ProgrammerCalc(8);
programmerCalc.mult(10);
programmerCalc.plus(2);
programmerCalc.minus(7);
programmerCalc.divide(5);
console.log(programmerCalc.toString()); // 1111

