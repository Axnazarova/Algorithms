
function getLargestNumber(first,second,third){

    
if (first - second > 0 && first - third > 0 ) {

    console.log(`Наибольшее число -${first}`)

} else if (second - first > 0 && second - third > 0) {

    console.log(`Наибольшее число -${second}`)

} else if (third - second > 0 && third - first > 0) {

    console.log(`Наибольшее число -${third}`)

}else if(first - second === 0 && second - third === 0){

    console.log('Все введенные числа равны');

} else if (first === second || second === third || first === third){

    console.log('Два из введенных чисель равны');
}
 else {

    console.log('Введено некорректное значение');
}

};



getLargestNumber(21,21,20);

getLargestNumber(21,21,21);

getLargestNumber(21,20,21);

getLargestNumber(1005,12,365);

getLargestNumber(125,489,15);


