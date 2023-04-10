let sortIcon = document.querySelector('.sort-icon')
let sortIconTwo = document.querySelector('.sort-icontwo')
let table = document.querySelector('.goods')
let nameT = document.querySelector('.name')
let price = document.querySelector('.price')
let amount = document.querySelector('.amount')

let arrayTable = Array.from(table.rows)


function getSort(index){
    let sortedRows = arrayTable
      .slice(1)
      .sort((rowA, rowB) => {return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML});

    nameT.classList.toggle('sort')

    if(nameT.classList.contains('sort')){
        table.tBodies[0].append(...sortedRows);

    }


    if(!(nameT.classList.contains('sort'))){
        let reverse = sortedRows.reverse()
        table.tBodies[0].append(...reverse);

    }
}


function sortName(){
    let sortedRows = arrayTable
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    nameT.classList.toggle('sort')

    if(nameT.classList.contains('sort')){
        table.tBodies[0].append(...sortedRows);
        sortIconTwo.style = "display: none"
        sortIcon.style = "display: inline-block"


    }

    if(!(nameT.classList.contains('sort'))){
        let reverse = sortedRows.reverse()
        table.tBodies[0].append(...reverse);
        sortIcon.style = "display: none"
        sortIconTwo.style = "display: inline-block"
    }
}


   

nameT.addEventListener('click',sortName)

price.addEventListener('click',()=>{
    getSort(1)
})

amount.addEventListener('click',()=>{
    getSort(2)
})




