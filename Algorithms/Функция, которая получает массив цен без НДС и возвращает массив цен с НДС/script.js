let price = [20,50,100,25,36];

let priceText = ['text', 'test', 't','1']

function addTax(array){
    let newArr = array.map((element) => {

       if(Number(element)){

           return Number(element) + (element*20)/100

       } else {
           console.log(`${element} Элемент не является числом`)


       }


        
    })

   newArr = newArr.filter((element) => {
       return element !== undefined
   })

    

    console.log(newArr)
    
}

addTax(price)

addTax(priceText)