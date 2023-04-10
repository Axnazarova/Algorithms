
const depositAmount = prompt("Введите сумму вклада");

const numberOfMonths = prompt("Ввведите количество месяцев");

const interestRate = prompt("Введите годовую процентнцю ставку");

const profitPerMonth = (depositAmount * interestRate / 100) / 12;

const profitForEnteredMonths = numberOfMonths * profitPerMonth;

console.log(`Через ${numberOfMonths} месяцев ваша прибыль по вкладу составит  ${profitForEnteredMonths}`);



// Бонус задачи прибыль от вклада с капитализацией.
const depositAmount2 = +prompt("Введите сумму вклада");

const numberOfMonths2 = +prompt("Ввведите количество месяцев");

const interestRate2 = +prompt("Введите годовую процентнцю ставку");

const dayOfOneMonth = 30.46; // взяля среднее значение

const dayOfEnteredMonths = numberOfMonths2 * dayOfOneMonth;

let profitDepositOneDay; //прибыл по вкладу за один день так считается в банке зависимо от банка делится на 360 или 365



let depositAmountForLoop = depositAmount2;
for(let i = 0; i <= numberOfMonths2;i++ ){
    profitDepositOneDay = ((depositAmountForLoop * interestRate2) / 100 ) / 365 

    let profitOneMonth =  profitDepositOneDay * dayOfOneMonth

    depositAmountForLoop += profitOneMonth

    console.log(depositAmountForLoop)
}

console.log(`Через ${numberOfMonths2} месяцев ваша прибыль по вкладу с капитализацией составит  ${depositAmountForLoop - depositAmount2}`);
