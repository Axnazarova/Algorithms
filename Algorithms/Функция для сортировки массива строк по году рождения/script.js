let arr = [
'Nicola Tesla, 1856',
'Alan Turing, 1912',
'Ada Lovelace, 1815']



let sorted;

function sortByBirth (arr){
    sorted = arr.sort((a,b) => {
        if(a.slice(-4) < b.slice(-4)){
            return - 1
        }

        return 1

    })

    console.log(sorted)

}

sortByBirth(arr)