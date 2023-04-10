let enteredNumber = +prompt('Введите двухзначное число от 1 до 99')

let numbers = ['один',"два",'три','четыре','пять','шесть','семь','восемь','девять']
let tenNumbers = ['десять','двенадцать','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто','сто',	
]


function numberToText(number){
    let length = (String(number)).length

    let firstDigit = parseInt(number/10)

    let lastDigit = number%10;

   

    if (length === 2) {

        if (firstDigit === 1){

            if (lastDigit === 2){
                console.log('Двенадцать')
            } else if (lastDigit === 3){
                console.log('Тринадцать')
            } else {

                console.log(`${numbers[lastDigit -1].slice(0,-1)}надцать`)
            }


        } else if (lastDigit === 0){

            console.log(tenNumbers[firstDigit])
        }
        else {

            console.log(`${tenNumbers[firstDigit]} ${numbers[lastDigit-1]}`)
        }

    } else {
        console.log('Вы ввели не двухзначное число')
    }
   
}



numberToText(enteredNumber);




