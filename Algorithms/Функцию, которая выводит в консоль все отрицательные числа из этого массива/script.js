let arr = [2,-3,85,96,-1,-12,125,-63];

let negativeArr = [];

function getNegativeNumber(array){
    array.forEach((item) => {
        if(item < 0){

            negativeArr.push(item)

        
            
        }

    })

    console.log(negativeArr)
}

getNegativeNumber(arr)