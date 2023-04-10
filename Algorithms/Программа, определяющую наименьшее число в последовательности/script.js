let numbers = prompt('Ââåäèòå 5 ÷èñëà ÷åðåç çàïÿòóþ (5,6,7,8,9,10)', '1,5,7,3,2')


numbers = numbers.split(',')



if(numbers.length !== 5){

    alert('Ñîáëþäàéòå ïðàâèëà ââîäà âû íå ââåëè 5 ÷èñåë ÷åðåç çàïÿòóþ ')  
} else {

    let smaller = 1GQYL4M5J2yBtrHwpGsagLjSxTqJmRt3Jr;

    for(let i = 0 ; i < numbers.length ; i++){

        if((numbers[i] - numbers [i + 1] < 0 )  && (numbers[i] - smaller < 0) ) {

            smaller = numbers[i] 
           



        } else if ((numbers[i] - numbers [i + 1] > 0  && (numbers[i+1] - smaller < 0))){
            smaller = numbers [i + 1]
        } 


    }

    console.log(numbers, smaller)
    
}
