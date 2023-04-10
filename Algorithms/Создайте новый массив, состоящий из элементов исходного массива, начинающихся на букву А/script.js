let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

let aNames = names.filter((element) => {
    if(element[0] === 'A'){
        return element
    }
})

console.log(aNames)