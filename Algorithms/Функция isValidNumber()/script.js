/**
 * 
 * @param {String} phoneNumber 
 */

function isValidNumber(phoneNumber) {
    let length = String(phoneNumber).length-1;
    let startWith = String(phoneNumber).slice(0,2)


    if(startWith === '+7' && length === 11){
        return true;
    } else {
        return false;
    }


}



console.log(isValidNumber('+91234567891'))

console.log(isValidNumber('+71234567891'))

console.log(isValidNumber('+912345678915'))