let twoDigitNumber = +prompt('Введите двухзначное число');

let length = String(twoDigitNumber).length;



if (length === 2 ) {
    while (length < 3) {
        twoDigitNumber += 7
        length = String(twoDigitNumber).length;
    }
    console.log(twoDigitNumber)

} else {
    alert('Вы ввели не двухзначное число')
}
