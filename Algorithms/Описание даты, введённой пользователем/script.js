let enteredDate = prompt("Введите дату в формате YYYY.MM.DD");

let datesArray = enteredDate.split('.')

console.log(datesArray);

let year = datesArray[0];
let month = +datesArray[1];
let day = datesArray[2];



let monthsName = ["Январь", "Февраль","Март", "Апрель","Май", "Июнь", "Июль","Август", "Сентябрь", "Октябрь", "Ноябрь","Декабрь"];




switch(month){
    case 1:
        console.log(`${day} ${monthsName[0]}я ${year} года`);
        break;
    case 2:
        console.log(`${day} ${monthsName[1]}я ${year} года`);
        break;
    case 3:
        console.log(`${day} ${monthsName[2]}a ${year} года`);
        break;
    case 4:
        console.log(`${day} ${monthsName[3]}я ${year} года`);
        break;
    case 5:
        console.log(`${day} ${monthsName[4].replace('й',"")}я ${year} года`);
        break;
    case 6:
        console.log(`${day} ${monthsName[5]}я ${year} года`);
        break;
    case 7:
        console.log(`${day} ${monthsName[6]}я ${year} года`);
        break;
    case 8:
        console.log(`${day} ${monthsName[7]}a ${year} года`);
        break;
    case 9:
        console.log(`${day} ${monthsName[8]}я ${year} года`);
        break;
    case 10:
        console.log(`${day} ${monthsName[9]}я ${year} года`);
        break;
    case 11:
        console.log(`${day} ${monthsName[10]}я ${year} года`);
        break;
    case 12:
        console.log(`${day} ${monthsName[11]}я ${year} года`);
        break;
    default:
        console.log("Введено некорректное число");
        break;

}