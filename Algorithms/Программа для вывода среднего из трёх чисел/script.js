let validation = first.length === 2 && second.length === 2 && third.length === 2 ? true : false;

first = + first;
second = + second;
third = + third;




if (validation && ((first - second > 0 && first - third < 0) || (first - second < 0 && first - third > 0))) {

    console.log(`Среднее число -${first}`)

} else if (validation &&  ((second - first > 0 && second - third < 0) || (second - first < 0 && second - third > 0))) {

    console.log(`Среднее число -${second}`)

} else if (validation &&  ((third - second > 0 && third - first < 0) || (third - second < 0 && third - first > 0))) {

    console.log(`Среднее число -${third}`)

} else if (validation &&  (first === second || first === third || second === third)) {

    console.log('Два или три введённых числа равны')

} else {

    console.log('Введено некорректное значение');
}
