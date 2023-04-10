
function numCounter(text){
    let numbers = text.replace(/\D/g, '');
    let length = String(numbers).length;
    console.log(`Все числа в строке ${numbers}`)
    console.log(`Количество цифр в строке ${length}`)
}

numCounter('Hello1274 ме234ня зо65вут 7987,hi256 63bb56,58!')