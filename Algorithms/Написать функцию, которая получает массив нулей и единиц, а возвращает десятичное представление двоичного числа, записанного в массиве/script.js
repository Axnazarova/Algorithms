convertToDec([0, 1, 0, 0, 1, 1, 0, 1]); // 77


function convertToDec(array){

    let summ = 0;
    let k = 1

    for(let i= array.length-1; i>=0;i--){


        if(array[i] === 1){
            summ = summ + array[i]*k
        }
        k = k*2

    }

    console.log(summ)

}


convertToDec([0,1,1,1,1,0,1,0,0,1])

