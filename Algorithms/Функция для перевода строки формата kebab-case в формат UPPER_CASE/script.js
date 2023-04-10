
// console.log(kebabToUpper('first-user')); // FIRST_USER

function kebabToUpper (kebab){
    if(kebab.split('-').length === 1){
        console.log('вы ввели не кебаб case')
    } else {
        kebab = kebab.split('-').join('_').toUpperCase()
        console.log(kebab)
    }

}




kebabToUpper('first-user')

kebabToUpper('first-user-developer')

kebabToUpper('first,user,developer')


// Второй способ

function kebabUpper(word) {
    let upperWord = '';

    for(let i = 0; i < word.length; i++){
       
        if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
        
        upperWord = upperWord + String.fromCharCode(word.charCodeAt(i) - 32)
           

    } else if (word.charCodeAt(i) === 45) {
      upperWord = upperWord + String.fromCharCode(95)
    }
   

    }

    console.log(upperWord)

}

kebabUpper('test-t')










