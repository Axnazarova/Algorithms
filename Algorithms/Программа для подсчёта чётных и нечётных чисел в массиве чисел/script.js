let numbers = [2,5,3,69,8,7,21,223,5,695,111,52,523,5,26,55,89,245,261,55,222,444, 'y', 'text'];

let numbersTwo = [5,85,2,22,42,36,2,1,17,8, 'k','tekst']



function countEvensAndOdds (array) {
    let countEven = 0;
    let countOdd = 0;
    let notNumbers = [];

    array.forEach((element) => {
        if (Number(element) && element%2 === 0){
            countEven+=1
        } else if(Number(element) && element%2 !== 0) {
            countOdd+=1
        } else {

            notNumbers.push(element)

        }
    })

    console.log(`В массиве ${countEven} чётных и ${countOdd} нечётных чисел.В массиве элeменты: ${notNumbers} не являются числом`)
}

countEvensAndOdds(numbers)
countEvensAndOdds(numbersTwo)

// Второй способ

function countEvenAndOdd (array) {
    let even = [];
    let odd = [];
    let notNumbers = [];

    array.forEach((element) => {
        if (Number(element) && element%2 === 0){
            even.push(element)
        } else if(Number(element) && element%2 !== 0) {
            odd.push(element)
        } else {

            notNumbers.push(element)

        }
    })

    let evenLength = even.length;
    let oddLength = odd.length;

    console.log(`В массиве ${evenLength} чётных и ${oddLength} нечётных чисел.В массиве элeменты: ${notNumbers} не являются числом`)
}

countEvenAndOdd(numbers)
countEvenAndOdd(numbersTwo)