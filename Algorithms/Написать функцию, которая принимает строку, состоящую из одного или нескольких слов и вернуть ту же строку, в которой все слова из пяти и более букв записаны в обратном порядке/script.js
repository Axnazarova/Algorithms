let strings = prompt('Введите строку из одного или несколько слов разделяя пробелом')

let newArray = strings.split(' ')

console.log(newArray)



function reversed (array){
    let reversed = ''

    array.forEach((element)=>{




        if(element.length >= 5){
            for(let k = element.length-1; k >= 0 ; k--){

                reversed = reversed + element[k]

                if(k === 0){
                    reversed = reversed + ' '
                }


            }
        
        } else {
            reversed = reversed + element + ' '


        }


})

console.log(reversed)
}




reversed(newArray)


