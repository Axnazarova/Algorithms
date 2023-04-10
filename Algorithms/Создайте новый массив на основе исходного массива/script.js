let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

let newNumbersArr = numbers.map((item) => {

    if(item < 0){
        return item * (-1)
    } else {
        return item * 2
    }

})

console.log(newNumbersArr)
