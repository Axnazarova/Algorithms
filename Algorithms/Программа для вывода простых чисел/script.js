let enteredNumber = +prompt('Введите целое число');


let i = 0;

let numberForWhile = enteredNumber

while(i < enteredNumber){
    if((numberForWhile % 2 !== 0  && numberForWhile % 3 !== 0 && numberForWhile % 5 !== 0 && numberForWhile % 7 !== 0) || numberForWhile === 7 || numberForWhile === 5 || numberForWhile === 3 || numberForWhile ===2  ){
        console.log(numberForWhile)
        numberForWhile= numberForWhile - 1
        
    } else {
        numberForWhile= numberForWhile - 1
    }
    i++
}