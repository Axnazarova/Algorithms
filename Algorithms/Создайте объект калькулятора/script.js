const operation = {
    addition: function(number,number2){
        this.lastAddition = number + number2
        return  this.lastAddition},

    substraction: function(number,number2){
        this.lastSubstraction = number - number2
        return this.lastSubstraction},

    multiplication: function(number,number2){
        this.lastMultiplication = number * number2
        return this.lastMultiplication},

    division: function(number,number2){
        this.lastDivision = number / number2
        return this.lastDivision},

    deleteInformation: function(){
        return this.lastAddition = '',
        this.lastSubstraction = '',
        this.lastMultiplication = '',
        this.lastDivision = ''},

    lastAddition: '',
    lastSubstraction: '',
    lastMultiplication: '',
    lastDivision: '',
};

// Сложение
console.log(operation.addition(15,65));

// Вычитание
console.log(operation.substraction(15,65));

//Умножение
console.log(operation.multiplication(15,65));

//Деление
console.log(operation.division(15,65));

//  хранящее значение Сложения
console.log(operation.lastAddition);

//  хранящее значение Вычитания
console.log(operation.lastSubstraction);

//  хранящее значение Умножения
console.log(operation.lastMultiplication);

//  хранящее значение Деления
console.log(operation.lastDivision);

// очистка памяти
operation.deleteInformation();


// После очистки памяти
console.log(operation.lastAddition);

console.log(operation.lastSubstraction);

console.log(operation.lastMultiplication);

console.log(operation.lastDivision);
