let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];

let bonus = [

    [20, 20, 20, 20, 20, 20, 60, 60, 60, 60, 60, 60],
    [55, 55, 75, 75, 75, 55, 70, 57, 75, 55, 70, 75],
    [160, 150, 170, 150, 180, 150, 150, 180, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [50, 50, 80, 80, 50, 80, 80, 115, 105, 125, 105, 105],
    [95, 65, 95, 65, 95, 65, 65, 65, 65, 65, 85, 65],
    [50, 50, 50, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [15, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [20, 80, 80, 80, 20, 80, 20, 90, 90, 70, 70, 70],
    [85, 85, 85, 75, 75, 75, 95, 95, 95, 75, 70, 75]

];


/*Напишите функцию, возвращающую сумму зарплат всего отдела за год. + Бонус */


function getAnnualSalary(salary,bonus){
    let summ = 0;
    let summBonus = 0;

    for(let k = 0; k < salary.length ; k++){
        for(let i = 0; i < salary[k].length ; i++){
            summ = summ + +salary[k][i]
        }
    }

    for(let k = 0; k < bonus.length ; k++){
        for(let i = 0; i < bonus[k].length ; i++){
            summBonus = summBonus + bonus[k][i]
        }
    }

    console.log(`суммa зарплат всех сотрудников за год  ${summ} а сумма бонуса всех сотрудников за год ${summBonus} `)
}

getAnnualSalary(salary,bonus)


/*Напишите функцию для получения массива зарплат сотрудников по номеру месяца. + Бонус */



function getMonthlySalary(month){

    if(month > 0 && month < 13){

        let arrSalary = [];

        let bonusArr = [];

        for(let k = 0 ; k < salary.length ; k++){

            for(let i = 0; i <= salary[k].length ; i++){

                if(month - 1 === i){

                    arrSalary.push(salary[k][i])
                
                }

            }
        }


        for(let k = 0 ; k < bonus.length ; k++){

            for(let i = 0; i <= bonus[k].length ; i++){

                if(month - 1 === i){

                    bonusArr.push(bonus[k][i])
                
                }

            }
        }


     console.log(`${month} месяце зарплата сотрудников ${arrSalary}, бонус сотрудников в этом месяце ${bonusArr} `)


    } else {
        alert('Введите правилно номер месяца от 1 до 12')
    }
}

getMonthlySalary(1)


/*Напишите функцию, возвращающую сумму зарплат за квартал. + Бонус*/


function getQuarterSalary(quarter){


    let summSalary = 0;

    let summBonus = 0;


    for (let k = 0 ; k < salary.length ; k++){

        let i;
        let condition;

        
        if(quarter === 1){
            i = 0;
            condition = 3
        } else if(quarter === 2){
            i = 3; 
            condition = 6
        } else if (quarter === 3){
            i = 6;
            condition = 9
        } else if (quarter === 4){
            i = 9;
            condition = 12
        }


        while(i < condition){

            summSalary = summSalary + salary[k][i]

            summBonus = summBonus + bonus[k][i]

            i ++
        }
    }

    console.log(`Сумма зарплат всех сотрудников отдела за ${quarter} квартал составляет ${summSalary}, Сумма бонусов всех сотрудников отдела за ${quarter} квартал составляет ${summBonus}`)
}

getQuarterSalary(4)



/*Напишите функцию, возвращающую зарплату сотрудника за год по его индексу. +Бонус */

function getIndexSalary(index){

    
    if(index >=12 || isNaN(index) === true ){

        alert('Нет такого индекса')
    } else {

        let summSalary = 0;

        let summBonus = 0;

        for (let k = 0 ; k < salary.length ; k++){

            for (let i = index ; i <= index ; i ++){

                summSalary = summSalary + salary[k][i]

                summBonus = summBonus + bonus[k][i]

            }
        }


        console.log(`Зарплата за год сотрудника под индексом ${index} равна ${summSalary}, Бонус за год сотрудника под индексом ${index} равна ${summBonus}`)


    }



}

getIndexSalary(6)

