let enteredText = prompt('Наберите какой то текст')

for(let i = 0 ; i < enteredText.length ; i++){
    if(!isNaN(enteredText[i]) && enteredText[i] != ' '){

        console.log('В строке есть  числа')
        break;

    } else if( i == enteredText.length - 1 ) {

       console.log('В строке нет  числа')
    }
}




