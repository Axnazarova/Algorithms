/**
 * 
 * @param {String} question 
 * @param {String} optionA 
 * @param {String} optionB 
 * @param {String} optionC 
 * @param {String} optionD 
 * @param {String} correctOption 
 */
function gameMillionaire(question, optionA, optionB, optionC, optionD, correctOption) {

    let userAnswer = prompt(`${question}  'Введите ответ большую букву,например: A, Если нужна подсказка напишите 50/50' ${optionA} ${optionB} ${optionC} ${optionD}
`)

    if (userAnswer === correctOption) {
       
        count++
        if(count === 2){
            alert('Верно! Ваш выигрыш составляет 100')
        } else if(count === 3){
            alert('Верно! Ваш выигрыш составляет 500')
        } else {
             alert('Верно!')
        }

    } else if(userAnswer === '50/50') {

        userAnswer = prompt(`${question}  'Введите ответ большую букву,например: A '  ${optionB} ${optionC} `)
        if(userAnswer ===correctOption ){

            count++

             if(count === 2){
                alert('Верно! Ваш выигрыш составляет 100')
            } else if(count === 3){
            alert('Верно! Ваш выигрыш составляет 500')
            } else {
             alert('Верно!')
            }
           
        } else if(userAnswer === '50/50'){
            alert('Вы уже использовали подсказку')
            
        } else{
            alert('Ответ неправильный')
            return;
        }
    } else {
        alert('Ответ неправильный')
        return;
    }

}

let count = 0


let firstQuestion = 'В каком году затонул "Титаник"?';
let a = 'A)1930';
let b = 'B)1912';
let c = 'C)1915';
let d = 'D)1925';
let correctAnswer = 'B';



let firstQuestion1 = 'Кто стал  чемпионом мира по футболу 2018 году?';
let a1 = 'A)Аргентина';
let b1 = 'B)Хорватия';
let c1 = 'C)Франция';
let d1 = 'D)Морокко';
let correctAnswer1 = 'C'



let firstQuestion2 = 'Сколько будет 25*25';
let a2 = 'A)125';
let b2 = 'B)225';
let c2 = 'C)625';
let d2 = 'D)725';
let correctAnswer2 = 'C'




gameMillionaire(firstQuestion, a, b, c, d, correctAnswer)

gameMillionaire(firstQuestion1, a1, b1, c1, d1, correctAnswer1)

gameMillionaire(firstQuestion2, a2, b2, c2, d2, correctAnswer2)

console.log(count)

if(count === 3) {
    alert('Вы правильно ответили на 3 вопросa из 3 и Ваш выигрыш составил 600')
} else if(count === 2){
    alert('Вы правильно ответили на 2 вопросa из 3 и Ваш выигрыш составил 100')
} else if(count === 1) {
    alert('Вы правильно ответили на 1 вопрос из 3 и Ваш выигрыш составил 0')
} else {
    alert('Вы проиграли')
}