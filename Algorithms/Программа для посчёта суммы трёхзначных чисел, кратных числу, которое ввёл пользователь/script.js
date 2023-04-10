let enteredNumber = +prompt('Введите положительное трехзначное число не превышающим 999')

let length = String(enteredNumber).length

let number = 100;

let summ = 0;


if(length === 3 && enteredNumber <= 999){
    while(number < 1000 ){
        if(number % enteredNumber === 0){
            summ = summ + number
            console.log(`Это число ${number}`)
            console.log(`Это сумма ${summ}`)
        }
    number++
    }

    console.log(`Сумма всех трехзначных кратных числу ${enteredNumber} чисел равно ${summ} `)

} else {
    alert('Вы ввели не правильное значение')
}


