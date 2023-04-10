let strings = prompt('Ввведите строку')

function getReverse(text){
    let reverse = new String;

        for(let i = text.length-1; i >= 0 ; i--){

            reverse = reverse + text[i]

        }

        console.log(reverse)

}

getReverse(strings)