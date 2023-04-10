function isLucky(sixDigitNumber){
    first = (String(sixDigitNumber))[0] 
    second = (String(sixDigitNumber))[1] 
    third = (String(sixDigitNumber))[2] 
    fourth = (String(sixDigitNumber))[3]
    fifth = (String(sixDigitNumber))[4]  
    sixth = (String(sixDigitNumber))[5] 

    if((+first + +second + +third) === (+fourth + +fifth + +sixth) ){
        return true;
    } else {
     return false;
    }
}



console.log(isLucky(234801));

console.log(isLucky(152369));