let employees = [
  [ 'Jaylee Macy', 'marketing' ],
  [ 'John Smith', 'management' ],
  [ 'Blossom Hartley', 'design' ],
  [ 'Austin Carpenter', 'marketing' ],
  [ 'Joan Knowles', 'development' ],
  [ 'Sally Nunez', 'management' ],
  [ 'Laurel Ward', 'development' ],
  [ 'Lark Simon', 'marketing' ],
  [ 'Jane Stone', 'management' ],
  [ 'Courtney Olson', 'development' ],
];

let development = [];



for(let i = 0 ; i < employees.length ; i++){

    for(let k = 0; k < employees[i].length ; k++){

        if(employees[i][k]=== 'development'){
        development.push(employees[i])
    }
   
    }
}

[firstArr, secondArr,thirdArr] = development

firstArr.pop()
secondArr.pop()
thirdArr.pop()

development = firstArr.concat(secondArr,thirdArr)

console.log(development)