





// // sub (a.b) a -b
// function sub(a,b){
//     return a - b
// }
// console.log(sub(50,30))
//
// //multiply (a,b) -a * b
// function multiply ( a,b){
//     return a * b
// }
// console.log(multiply(2 , 3))
//
// //div(a,b) - a /b
// function div ( a,b){
//     return a / b
// }
// console.log(div(15,3))
//
//
// //remainder(a,b) - a % b
// function remainder ( a,b){
//     return a % b
// }
// console.log(remainder(20, 10000))
//
// //power(a,b) - a ** b
// function power ( a,b){
//     return a ** b
// }
// console.log(power(3,5))


//
// Строки:

// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной в консоль.
// function s (str){
//    return str
// }
// console.log(s("Привет, Мир!"))
//ARROW
// const s = (str) =>{
//     return str
// }
// console.log(s("Привет, Мир!"))

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
//     С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// function st (str1,str2){
//     return str1 + str2
// }
// console.log(st("Привет,", "Мир!"))
// ARROW
// const st  = (str1,str2) =>{
//     return str1 + str2
// }
// console.log(st("Привет,", "Мир!"))

// // 3. Вам дана переменная name, присвойте ей ваше имя.
// // Выведите в консоль фразу 'Привет, *Имя*!'.
// function f (s,name){
//     return s + name
// }
// console.log(f("Привет,", "Фатима!"))
//ARROW
// const f= (s,name) =>{
//     return s + name
// }
// console.log(f("Привет,", "Фатима!"))

// // 4. Вам дана переменная age , присвойте ей ваш возраст.
// // Выведите в консоль 'Мне *Возраст* лет!'.
// function f (age){
//     return `Мне ${age} лет!`
// }
// console.log(f(16))
//ARROW
// const f =  (age) =>{
//     return `Мне ${age} лет!`
// }
// console.log(f(16))

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// function a(days, planet, residents, sun){
//     return `В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${planet}
//  составляет примерно ${residents}`
// }
// console.log(a(365,"Земля","7 млрд. человек.","Солнце"))
//ARROW
// const a = (days, planet, residents, sun) =>{
//     return `В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${planet}
//  составляет примерно ${residents}`
// }
// console.log(a(365,"Земля","7 млрд. человек.","Солнце"))


// Typeof:

// 1. Вам дана переменная a=50. Выведите в консоль тип значения этой переменной.
// function a1 (a){
//    return typeof a
// }
// console.log(a1(50))

// 2. Вам даны переменные a=10, b=35. Создайте переменную result, и сделайте так,
// чтобы в консоли значение переменной result было string.
// function s(a,b,result){
//     return typeof result
// }
// console.log(s(10,35,"result"))
//ARROW
// const s =(a,b,result) =>{
//     return typeof result
// }
// console.log(s(10,35,"result"))

// // 3. Вам дана переменная a=10, выведите в консоль тип этой переменной - string.
// function a1(a){
//     return typeof a
// }
// console.log(a1("10"))
//ARROW
// const a1 = (a) =>{
//     return typeof a
// }
// console.log(a1("10"))

//
// // 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
//  function a (a) {
//  if ( a === 10){
//      return("Верно")
//  } else {
//      return ("Неверно")
//  }
// }
// console.log(a(10))
// ARROW FUNC
//  const a = (a) => {
//  if ( a === 10){
//      return("Верно")
//  } else {
//      return ("Неверно")
//  }
// }
// console.log(a(10))

// 2. Вам даны две переменные a=50, b=100.
// Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function ab (a,b){
//     if (a > b){
//         return 'a больше b'
//     } else {
//         return 'a меньше b'
//     }
// }
// console.log(ab(50,100))
// console.log(ab(200,10))
// //ARROW
// const ab = (a,b) =>{
//     if (a > b){
//         return 'a больше b'
//     } else {
//         return 'a меньше b'
//     }
// }
// console.log(ab(50,100))
// console.log(ab(200,10))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться
// 'positive' - если число больше 0,
//     'равно' если число равно 0, "negative" если число меньше 0.
// function n (a){
//     if ( a > 0){
//         return 'positive'
//     } else if ( a === 0){
//         return 'равно'
//     } else if ( a < 0){
//         return 'negative'
//     }
// }
// console.log(n(4))
//ARROW FUNC
// const n = (a) =>{
//     if ( a > 0){
//         return 'positive'
//     } else if ( a === 0){
//         return 'равно'
//     } else if ( a < 0){
//         return 'negative'
//     }
// }
// console.log(n(4))

// 4. Вам дана переменная number=45. Составьте условие, по которому будет
// выводиться в консоль "Четное число", "Нечетное число".
// function a(number){
//     if (number % 2===0){
//         return "Четное число"
//     } else {
//       return "Нечетное число"
//     }
// }
// console.log(a(6))
//ARROW FUNC
// const a = (number) =>{
//     if (number % 2===0){
//         return "Четное число"
//     } else {
//       return "Нечетное число"
//     }
// }
// console.log(a(6))

// 5. Вам даны две переменные a=10, b=2.
// Составьте условие, по которому, остаток деления a на b, будет
// выводиться консоль "Четное число", "Нечетное число".
// function ab (a,b){
//     if (( a / b) % 2 === 0){
//         return "Четное число"
//     } else {
//         return "Нечетное число"
//     }
// }
// console.log(ab(10,2))
// console.log(ab(16,2))
// ARROW FUNC
// const ab = (a,b) =>{
//     if (( a / b) % 2 === 0){
//         return "Четное число"
//     } else {
//         return "Нечетное число"
//     }
// }
// console.log(ab(10,2))
// console.log(ab(16,2))

// 6. Вам дана переменная s. Составьте условие, по котором  в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function s1 (s){
// return false
// }
// console.log(typeof s1())
//ARROW
// const s1 = (s) =>{
//     return false
// }
// console.log(typeof s1())

// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
// function a1 (a){
// if ( a >= 1 && a <=9 ){
//     return"Верно"
// } else if ( a >= 10 ){
//      return "Неверно"
// }
// }
// console.log(a1(66))
//ARROW
// const a1  = (a)=>{
// if ( a >= 1 && a <=9 ){
//     return"Верно"
// } else if ( a >= 10 ){
//      return "Неверно"
// }
// }
// console.log(a1(2))

// 8. Вам дана переменная а. Если переменная a равна трем или равна семи,
// // то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
// function a1 (a) {
//     if (a === 3 || a === 7) {
//         return a + 7
//     } else {
//         return a / 10
//     }
// }
// console.log(a1(4))
//ARROW
// const a1 = (a)  =>{
//     if (a === 3 || a === 7) {
//         return a + 7
//     } else {
//         return a / 10
//     }
// }
// console.log(a1(4))

// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// function ab (a,b) {
//     if (a <= 0 && b >= 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(ab(0,5))
//ARROW
// const ab = (a,b) => {
//     if (a <= 0 && b >= 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(ab(0,5))

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// function ab (a,b) {
//     if (a > 4 && a < 10 || b >= 7 && b < 17) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(ab(5,7))
//ARROW
// const ab = (a,b) => {
//     if (a > 4 && a < 10 || b >= 7 && b < 17) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(ab(5,7))

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// function a (month){
//     if (month >= 1 && month <= 2  ||  month ===12 ) {
//        return 'кыш'
//     } else if (month >= 3 && month <=5) {
//       return "жаз"
//     }   else if (month >= 6 && month <=8){
//       return "жай"
//     }   else if (month >= 9 && month <=11){
//        return "куз"
//     }
// }
//ARROW
// console.log(a(1))
// const a = (month) =>{
//     if (month >= 1 && month <= 2  ||  month ===12 ) {
//        return 'кыш'
//     } else if (month >= 3 && month <=5) {
//       return "жаз"
//     }   else if (month >= 6 && month <=8){
//       return "жай"
//     }   else if (month >= 9 && month <=11){
//        return "куз"
//     }
// }
// console.log(a(1))

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// function d (day){
//   if (day >=1 && day <= 10){
//       return "1"
//   } else if ( day >=11 && day <= 20){
//       return "2"
//     } else if ( day >= 21 && day <= 31){
//       return "3"
//     }
// }
// console.log(d(10))
//ARROW
// const d = (day) =>{
//     if (day >=1 && day <= 10){
//         return "1"
//     } else if ( day >=11 && day <= 20){
//         return "2"
//     } else if ( day >= 21 && day <= 31){
//         return "3"
//     }
// }
// console.log(d(18))

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// function f1 (f) {
//     let first = Number(f[0])
//     if ( first === 1 || first === 2 || first === 3) {
//       return true
//      } else {
//      return false
//      }
// }
// console.log(f1(12345))
//ARROW FUNC
// const f1 = (f)  => {
//     let first = Number(f[0])
//     if ( first === 1 || first === 2 || first === 3) {
//       return true
//      } else {
//      return false
//      }
// }
// console.log(f1(12345))

// 14. Вам дана переменная age=*любое двузначное число*.
// Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста.
// Наример мне 21 год, мне 20 лет.
// function age (a){
//     let d =  a%10
//     let c = a%100
//     if (d === 1 && a!==11 && c!== 11){
//         return`мне ${a} год`
//     } else if ((d===2 && d===3 && d===4)  && a>20){
//         return `мне ${a} года`
//     } else{
//         return `мне ${a} лет`
//     }
// }
// console.log(age(21))
// ARROW FUNC  //
// const age = (a) => {
//     let d =  a%10
//     let c = a%100
//     if (d === 1 && a!==11 && c!== 11){
//         return`мне ${a} год`
//     } else if ((d===2 && d===3 && d===4)  && a>20){
//         return `мне ${a} года`
//     } else{
//         return `мне ${a} лет`
//     }
// }
// console.log(age(21))

// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти.
// Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".
// function time1 (time) {
//     if (time >= 1 && time <= 30) {
//         return "Первая четверть"
//     } else if (time >= 31 && time <= 59) {
//         return "Вторая четверть"
//     } else if (time >= 60) {
//         return "Неверное число"
//     }
// }
// console.log(time1(2))
// ARROW FUNC
// const time1 = (time)  =>{
//     if (time >= 1 && time <= 30) {
//         return "Первая четверть"
//     } else if (time >= 31 && time <= 59) {
//         return "Вторая четверть"
//     } else if (time >= 60) {
//         return "Неверное число"
//     }
// }
// console.log(time1(6))


