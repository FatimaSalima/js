// Array - Массив - []

// collection
// reference type
//
// let array = [1, "string", true, false, null, [1,2,3,4,], {}]
//
// //array.length = 100
// array[100] = 10
// console.log(array[100])
// // length
// console.log(array.length)
//index - []
// console.log(array)
// console.log(array[5][3])
//
//
// let secondArray = new Array(10).fill("x")
// // .fill()
// console.log(secondArray)
//
//
// const generateArr = (len, value) => {
//     return new Array(len).fill(value)
// }
//
//
// let a  = generateArr(5, "z")
// console.log(a)
// console.log(generateArr(100,0))
// // [z,z,z,z,z]
// new


// let arrNumbers = [1,2,3,4,5,6,7,8,9,10]
// //slice ()
//
// console.log(arrNumbers.slice(0,5))
//push ()
// arrNumbers.push(11,12)
// console.log(arrNumbers)
// //pop ()
// arrNumbers.pop()
// //
// console.log(arrNumbers)
// // shift ()
// arrNumbers.shift()
// console.log(arrNumbers)
//
// //unshift ()
// arrNumbers.unshift(0)
// console.log(arrNumbers)
//
//splice
// let anames = ["Askar","Adilet", "bek", "dastan"]
// let names = ["Fatima", "Nazar", "Salima", "Tattygul", "Bakai", "Solton"]

// // 1 - start - index
// // 2 - deleteCount
// // 3 - items -
//
// let deletedNames = names.slice(4,2)

// console.log(names)
// console.log(deletedNames)
//
// names.splice(6,0,"Bekxhan", "Zhyldyzbek")
// names.splice(2,0,"Kerez")
// names.splice(names.length,0,anames)
// names.splice(1000, 0, anames[0], anames[1])
// console.log(names)
//
// //concat
//
// console.log(names.concat(anames))
// console.log(names + anames)


//indexOf
// console.log(names.indexOf("Fatima"))

//
// console.log(names.includes("Nazar"))
// console.log(names.includes("Umar"))
//
// console.log(arrNumbers.includes(0))
// const getRandomName = (array) => {
//     const randomIdx =  Math.floor(Math.random()* array.length)
//         return array[randomIdx]
// }
//
// console.log(getRandomName(names))
// console.log(getRandomName(arrNumbers))


//[Переслано от Askar]

// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let letters = ["a", "b", "c"]
// letters.splice(3,0,"1","2","3")
// console.log(letters)

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a.concat(b))

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let numbers = [1,2,3]
// numbers.splice(3,0,4,5,6)
// console.log(numbers)

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let numbers = [1,2,3]
// numbers.unshift(4,5,6)
// console.log(numbers)

// // 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let array = ["js","css", "jq"]
// array.splice(1,2)
// console.log(array)
//
// // 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let array = ["js", "css", "jd"]
// array.splice(0,2)
// console.log(array)

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let num = [1,2,3,4,5]
// console.log(num.slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let num = [1,2,3,4,5]
// console.log(num.slice(3))

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let num = [1,2,3,4,5]
// num.splice(1,2)
// console.log(num)

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let num = [1,2,3,4,5]
// num.splice(0,1,)
// num.splice(3,1)
// console.log(num)

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
// [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let num = [1,2,3,4,5]
// num.splice(3,0,"a","b","s")
// console.log(num)

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let num = [1,2,3,4,5]
// num.splice(1,0,"a","b")
// num.splice(6,0,"c")
// num.splice(8,0,"e")
// console.log(num)

// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let numbers = [3,4,1,2,7]
// numbers.unshift(1,2)
// numbers.splice(4,2)
// console.log(numbers)

// 14 биринчи элемент кайтарып берет
// let array = [1,2,3,4,5,6,7,8,9]
//  function getFirst(array) {
//   return array.indexOf(2))
// }
// console.log(array.indexOf(2))

// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
//
//  function getLast(array, n) {
//     ваш код
// };




//23-июнь//

//split ()
// join ()
// reverse ()
// console.log("machine car house".split(" ").join(" "))
// console.log(["a", "b", "c"].join(""))
// console.log([1,2,3,4,5,6,7,8,9].reverse())

/** Array methods
 * map
 * filter
 * reduce()
 * reduceRight
 * sort ()
 * **/

//**MAP**//
// let nums = [1,2,3,4,5,6,7,8,9]
// // nums[0] = nums[0] + 1
// console.log(nums)
//
// const increment = (array) => {
//     return array.map(function (item,index,arr){
//         // console.log(item, index)
//         // return item + 1
//         return item * 2
//     })
//
// }
// console.log(increment(nums))

// 1-100
// let newArr = new Array(100).fill(0).map(function (item, index,){
//     console.log(item, index)
//     return index + 1
//
// })
// console.log(newArr)

// let string = ["1","2","3","4","5"]
// console.log(string.map(function (el){
    // return + el
    // return Number(el)
    // return parseInt(el)
// }))

//**FILTER**//
// let arr = [1,2,3,4,5,6,7,8,9,10]
//
// console.log(arr.filter(function (el, idx,arr){
//      return el % 2 === 0
//  }))
//  [2,4]
// let data = [NaN, 0, 77, false, -17, '',undefined, 99, null]
//
// console.log(data.filter(function (el){
//     return el
// }))
// //
// let colors = ["red", "darkred", "cyanred", "lightred", "blue", "yellow", "black", "grey"]
//
// console.log(colors.filter(function (el){
//     return el.includes("red")
// }))

// //**SORT**//
// let unsortedNumbers = [0,9,100,3,5,6,2,7]
// console.log(unsortedNumbers.sort())
// console.log(unsortedNumbers.sort(function (a,b){
//     return a - b
// }))
//
// // console.log(unsortedNumbers.sort())
// console.log(unsortedNumbers.sort(function (a,b){
//     return b - a
// }))
//
//
// let letters = ["x","a","q","z","b"]
// console.log("x".charCodeAt(0))
// console.log("a".charCodeAt(0))
// console.log("b".charCodeAt(0))
// console.log(letters.sort(function (a, b){
//     // if (a > b){
//     //     return 1
//     // } else if (a < b){
//     //     return -1
//     // } else {
//     //     return 0
//     // }
//     return a > b ? 1 : -1
// }))
// console.log(letters.sort(function (a, b){
//     // if (a > b){
//     //     return -1
//     // } else if (a < b){
//     //     return 1
//     // } else {
//     //     return 0
//     // }
//     return a > b ? -1 : 1
// }))
// console.log(letters.sort(function (a, b){
//     return a.localeCompare(b)
// }))
// console.log(letters.sort(function (a, b){
//     return b.localeCompare(a)
// }))


/** Д/З
 */
//Во всех задачах используйте только методы map, filter.

// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// let names = ['Аскар', 'Баяман', 'Калмамат']
// const task1 2 = array =>{
//     return array.map((el)
// }

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
// которая выводит только те имена, где есть буква к и выведите в консоль.
// const task3 = (names) => {
//     return names.filter(el =>{
//         return el.toLowerCase().includes("к")
//     })
// }
// console.log(task3(names))


// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.


// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// const arr = [3134, 4, -143, -245, -214];
// const result = arr.filter(item => item < 0)
//     .sort((a, b) => a - b);
//
// console.log(result);

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let num = [3,51,30,54,60]
//
// console.log(num.filter(function (el, idx,arr){
//     return el % 2 === 0
// }))

//  7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.
// let name = ['Бегимай', 'Баяман', 'Калмамат']
// let names = name.filter(word => word.length > 5);
// console.log(names)

// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// const task8 = nums => {
//     return nums.filter(n => {
//         return n > 0
//     }).length
// }
// console.log(task8([-13,96,-41,-28,40]))

// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr =  [3, 51, -30, -54, 60]
// let result = arr.filter(item => item > 0)
//     .sort((a, b) => a - b);
// console.log(result);
//
// function get (a) {
//     if (result > 30 ){
//         return Math.sqrt(result)
// } else {
//     return
//     }
// }
//
// console.log(get(3,51,60))

// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let names = [55, 44, 55, 44, 15, 49]
//
// const task10 = nums =>{
//     return nums.filter( n => {
//
//     })
// }

// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
// Создайте функцию, которая очищает массив от ложных (false) значений:
// false, null, undefined, 0, –0, NaN и "" (пустая строка).
// let data =  [NaN, 0, 77, false, -17, '',undefined, 99, null]
// console.log(data.filter(function (el){
//     return el
// }))

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.


// 24
// let arr = [ 3, 67, 8, 90,88]
// console.log(arr.map(el => {
//     return el.toString()
// }))


// let  array = [12, 65, 84,93,3]
// console.log(array.map(el => {
//     if ( el % 2 ===0){
//         return "жуп сан"
//     } else {
//         return "так сан"
//     }
// }))
//
// let data = ["aa", 1, true,null, undefined, {}]
// console.log(data.map(n => {
//     return typeof n
// }))
//
// const bob = (number) => {
// return new Array(number).fill(0).map(n =>{
//     return Math.floor(Math.random() * 10 + 1)
// })
// }
// console.log(bob(15))
//
//
// let base = [1,2,3,4,5,6,7,8,9]
// console.log(base.filter(function (el){
//     return el% 2 === 0
// }))


// let nam = ["nazar", "bakai", "chapai"]
// console.log(nam.map(en => {
//     return en.slice(1,-1)
// }))

// console.log(nam.map(el=> {
//     return el.split("").map(n, idx)=>{
//         return n
//     }
// }))
//
//
// (function($) { "use strict";

    //Page cursors

    // document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    //     t.style.left = n.clientX + "px",
    //         t.style.top = n.clientY + "px",
    //         e.style.left = n.clientX + "px",
    //         e.style.top = n.clientY + "px",
    //         i.style.left = n.clientX + "px",
    //         i.style.top = n.clientY + "px"
    // });
    // let t = document.getElementById("cursor"),
    //     e = document.getElementById("cursor2"),
    //     i = document.getElementById("cursor3");
    // function n(t) {
    //     e.classList.add("hover"), i.classList.add("hover")
//     }
//     function s(t) {
//         e.classList.remove("hover"), i.classList.remove("hover")
//     }
//     s();
//     for (let r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
//         o(r[a])
//     }
//     function o(t) {
//         t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
//     }
//
// })(jQuery);


// 28-июнь

//reduce - reduceRight
// //some
// //every
// //find
//
// let prices = [100,2300,400,230,340,6000]
// const getTotalSum = (array) => {
//     return array.reduce(function (acc, el,idx){
//         console.log("accumulator", acc)
//         console.log("element", el)
//         return acc + el
//     },0)
// }
// console.log(getTotalSum(prices))
//
//
// let names  = ['Kerez', 'zhyldyzbek', 'Salima', "Fatima", 'Nazar']
// console.log(names.map((el,idx)=> {
//     if (idx % 2 !== 0) {
//         return el.toUpperCase()
//     } else {
//         return el.toLowerCase()
//     }
// } ))
// console.log(names.reduce((acc,el,idx) => {
//     if (idx % 2 !==0 ){
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[]))
//
//
// const makeString = (string) =>{
//     return string.split("").map((el,idx) =>{
//         if (idx % 2 === 0){
//     return el.toLowerCase()
//         } else{
//             return  el.toUpperCase
//         }
//     }).join("")
// }
// console.log(makeString("weightlifting"))
//
//
// const getEven = (arr) =>{
//     // return arr.filter(el => % 2 === 0)
//     return arr.reduceRight((acc,el) => {
//         if (el % 2 === 0){
//             acc.push(el)
//             return acc
//         } else {
//             return  acc
//         }
//     }, [])
// }
// console.log(getEven([1,2,3,4,5,6,7,8,9,10]))
//
// //reduceRight
// //some
// console.log([1,2,3,4,5].some(function (el,idx,array){
//     return el > 4
// }))
// //every
// console.log([1,2,3,4,5].every(function (el,idx,arr){
//     return el> 1
// }))
// console.log([1,2,3,4,5].every(function (el,idx,arr){
//     return el> 0
// }))
//
// // find()
//
// console.log([1,3,3,3,3].filter(el => el === 3))
// console.log([1,3,3,3,3].find(el => el === 3))




// Д-З
//Во всех задачах используйте только методы map, reduce.

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let num = [5,15,315,2,13,20,9]
// console.log(num.reduce(function (acc,el){
//     return acc+ el
// }))


// // 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let nums = [5,12,314,2,13,20,9]
// console.log(nums.reduce(function (acc,el){
//    if ( el % 2 === 0){
//        return acc + el
//    } else {
//        return acc
//    }
// }, 0))


// // 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// console.log(nums.reduce(function (acc,el){
//     if ( el > 10){
//         return acc + el
//     } else {
//         return acc
//     }
// }, 0))

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.,
// console.log(nums.reduce(function (acc,el){
//     if ( acc - el){
//         return acc + el
//     } else {
//         return acc
//     }
// }, 0))

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let names = ['Аскар', 'Баяман', 'Калмамат', 'Nazar']
// // console.log(names.reduce(function (acc,el){
// //     return acc.concat(el)
// // }, ''))
//
// console.log(names.map(function (el,idx){
//     if ( idx % 2 === 1 ){
//         return el.toUpperCase()
//     }else{
//         return el.toLowerCase()
//     }
// }))
//
// console.log(names.reduce(function (acc,el,idx){
//     if (idx % 2 === 1){
//         acc.push(el.toUpperCase())
//         return acc
//     } else{
//         acc.push(el.toLowerCase())
//         return acc
//     }
// }, []))

// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.
// console.log(names.map(function (el){
//     return el.toUpperCase()
// }))
//
// console.log(names.reduce(function (acc,el){
//    acc.push(el.toLowerCase())
//     return acc
// } , []))

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.


// 8. Напишите функцию, которая принимает str, target. И возвращает true или false,
// если targer присутствует в str. Использовать .reduce для этого.
// const task8 = (str, target) => {
//     return str.split().reduce((acc,el) =>{
//         return el.includes(target)
//         }, false)
//     }
// console.log(task8('frontend', 'a'))
// console.log(task8('frontend', 'e'))
// Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false
//

// // 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// const task9 = (array) => {
//     return array.map((el) =>{
//         return el[0].toUpperCase() + el.slice(1).toLowerCase()
//     })
// }
// console.log(task9(['асКар', 'бЯяман', 'калМмамат']))
// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]


// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.


// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.
const dataCheck = (data) => {
    return data.every((el)=>{
        return typeof data[0] ===typeof el
    })
}
console.log(dataCheck([true,'1234', 325]))
console.log(dataCheck([1,2,3,4, 325,'e']))
console.log(dataCheck([1,2,3,4, 325]))


// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.


// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.


// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
// Верните сумму всех отрицательных чисел, которые больше 10.


// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.


// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.


// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.


// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-)
// между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.


// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.





