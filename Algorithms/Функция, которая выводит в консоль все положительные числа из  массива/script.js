let arr = [2,-3,85,96,-1,-12,125,-63];

let positiveArr = [];

function getNegativeNumber(array){
    array.forEach((item) => {
        if(item > 0){

            positiveArr.push(item)

        
            
        }

    })

    console.log(positiveArr)
}

getNegativeNumber(arr)