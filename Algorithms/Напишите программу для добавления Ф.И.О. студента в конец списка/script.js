
function addStudent(fullName) {

    const ul = document.querySelector('ul')

    const li = document.createElement('li')

    ul.append(li)

    li.textContent = `${fullName}`

}


addStudent('Adam Johnson');
addStudent('Zhang Weili');
addStudent('Tim Cook');


const studentsList = document.querySelectorAll('li');
console.log(studentsList)



//Бонус-задачи

const studentListArray = ['Andrey Sitnik','Charlie Gerard','Alex Blom','Emma Brillhart','Luis Montes','Dylan Schiemann','Christian Heilmann','Jyoti Bishnoi','Paul Shannon','Liz Parody','Abdul-Majeed Ahmed','Alec Lombardo','Anna Henningsen','Daniel Khan','Frederic Harper','James Snell','Kamil Mysliwiec','April Wensel','Yan Cui','Marcus Blankenship','Tony Edwards','Emma Wedekind','Nader Dabit','Callum Macrae','Kye Hohenberger','Evan You','Sarah Dresner','Natalia Tepluhina',]

function addStudent2(student){
    studentsList.forEach((element)=>{element.remove()}) // Удалить список


    studentListArray.push(student)

    const ul = document.querySelector('ul')

    studentListArray.forEach((element)=>{

        const li = document.createElement('li')

        li.textContent = element

        ul.append(li)

    })



}

addStudent2('Adam Johnson');
addStudent2('Zhang Weili');
addStudent2('Tim Cook');
addStudent2('test')
