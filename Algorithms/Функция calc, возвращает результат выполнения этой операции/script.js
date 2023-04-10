

function calc(number1, number2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Введено неправильное значение';
            break;
    }

    return result;
}





console.log(calc(4, 6, '+'));
console.log(calc(5,4,'*'))