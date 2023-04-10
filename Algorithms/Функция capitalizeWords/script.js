function capitalizeWords(words){
    let array = words.split(' ')
    let upperCaseArray = [];
    for(let i=0; i < array.length ; i++){
    upperCaseArray += ((array[i][0]).toUpperCase() + (array[i].slice(1, array.length)) + ' ')
    }

    return upperCaseArray
}



console.log(capitalizeWords('Hello my name is Harry'));
