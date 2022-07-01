//  web development - frontend - backend
//  OS - operation system
//  game development

// data - information



// 8 data types


// primitive data type -
// number - числа
// string - строка
// boolean - true false
// undefined - неопределенное значение - value
// null - нуловое значение
// bigint - 12132e34434
// symbol - символы

// reference type
// object - обьект


// variable - переменная


// var - variable - deprecated - устаревший



// let
// const - constant - константа


// variable initialization

// var myNumber = 123456789
//
// myNumber = 0
//
// let myHome = 37
//
// myHome = 40
//
//
// const mathPi = 3.14
//mathPi = 5


// console.log(myHome)
// console.log(myHome + myNumber)
// node script.js


// Math operations
// let a = 10
// let b = 5
// let year = 2022

// +
// -
// *
// /
// % - mode
//

// console. log (a + b)
// console. log (a - b)
// console. log (a * b)
// console. log (a / b)
// console. log (a % b)
// console. log (a  b)
// let result = year / 13
//
// console.log (Math.floor(result))
// console.log(Math.ceil(result))
// console.log(Math.round(result))
// console.log(Math.trunc(result))

// Math.floor()
// Math.ceil()
// Math.round()
// Math.trunc()
// console.log(Math.sqrt(101))
// // power
//
// // **
// console.log(Math.pow(10, 3))

// Math.random() - 0 - 1
// let number = Math.random()
//
// console.log(Math.floor(number *   ( 100 - 50 ) ) + 50)
//
// // Math.abs()
// console.log(Math.abs(-10))
// console.log(Math.abs(10))
//
//
// let x = 5
// let  y = 10


// let x = Math.floor(Math.random() * (50 - 1)) + 1
// let y = Math.floor(Math.random() * (100 - 50)) + 50
//
// console.log("start of the diapasone: ", x, "end of the diapasone: ", y)
//
// let middle = Math.floor((x + y) / 2)
//
// console.log("middle of the diapasone: ", middle)


// 1. Вам дана переменная num, присвойте ей значение.
// // Выведите значение этой переменной в консоль.
// let num = 15
// console.log(num)
// 2. Вам даны переменные a=10, b=2 и c=5.
// Выведите в консоль их сумму.
// let a = 10
// let b =2
// let c = 5
// console.log( a + b + c )
// 3. Вам дана переменная со значением 100, выведите в консоль умноженную переменную на 2.
// let  n = 100
// console.log(n*2)
// 4. Вам дана переменная со значением 67. Выведите в консоль остаток деления на 7.
// const  s = 67
// console.log(s% 7)
// 5. Вам даны переменные a=10 и b=2.
// Выведите в консоль их сумму, разность, произведение и частное (результат деления).
// let a =10
// let b = 2
// console.log( a+b,a-b, a*b, a/b )
// 6. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result.
// Выведите в консоль значение переменной result.
// let c =15
// let d =2
// let result = c+ d
// console.log(result)
// 7. Вам даны переменные a=30, и b=15 Сложите переменные a и b и результат присвойте переменной c.
// Затем выведите в консоль остаток деления на 4 переменной c.
// let a = 30
// let b = 15
// let c = a + b
// console.log( c % 4)
// 8. Вам даны переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
// Затем создайте переменную d, присвойте ей значение.
// Сложите переменные c и d, а результат запишите в переменную result.
// Выведите в консоль значение переменной result.
// let a=17
// let b =10
//  let c  = a -b
//  let d = 5
// let result = c+ d
// console.log(result)
//




// // string - строка
// let name = "Bakai"
// // length
// // index  - []
//
// console.log(name)
// console.log(name.length)
// console.log(name[0])
// console.log(name[name.length - 1])


// let message = "Kyrgyzstan"
//
// // toLoverCase()
// // toUpperCase()
// console.log(message.toLowerCase())
// console.log(message.toUpperCase())


// slice()
// console.log(message.slice(0, 6))
// console.log(message.slice(6))
// console.log(message.slice(-5))
//
// // substring()
//
// console.log(message.substring(0,6))
// console.log(message.substring(5))
//
//
// // substr()
//
// console.log(message.substr(0, 9))
//
//
// // indexOf
//
// console.log(message.indexOf("s"))
// console.log(message.indexOf("y"))
// console.log(message.indexOf("o"))


// lastIndexOf()

// console.log(message.lastIndexOf("y"))
// console.log(message.lastIndexOf("s"))
//
//
// // charAt()
//
// console.log(message.charAt(8))

//repeat

// console.log(message.repeat(5))
//
//
// //includes()
// console.log(message.includes("a"))
// console.log(message.includes("o"))
// console.log(message.includes("tan"))
//
// //startsWith
// console.log(message.startsWith("K"))
//
//
// //endsWith
// console.log(message.endsWith("n"))

//replace
// console.log(message.replace("t", "d"))
//
// //concat()
// let city = "Bishkek"
//
// console.log(message.concat(city))
// console.log(city + " " + message)

// шаблон литерал - интерполяция

//backtick ``
// let name = "Bakai"
// let age = 30
// let greenting = `Hello, ${name}, how are you? He is ${age} years old`
// console.log(greenting)
//
// let country = "Kyrgyzstan is located in Central Asia"
// let city1 = "It's capital is Bishkek"
//
// console.log(country.slice(33))
// console.log(country.slice(-4))
// console.log(country.indexOf("A"))
// console.log(country.substring(33))
// console.log(country.substr(  33, 4))
//
// console.log(country.length)
// console.log(country[Math.floor(country.length/2)])
//
// console.log(country.concat(city1))
// console.log(country+ " " + city1)
// let country1 = "Uzbekistan"
// let city1 = "Tashkent"
//
// let a = 60
// let b = "60"
// let c = "abc"
// console.log(a,b)
// //число к страке
//
// //string
//
//
// //toString
// console.log(a.toString())
//
//
// //" " +
// console.log(a + "")
// console.log(100 + "gff")
//
//
//
// //строка  к числу
// // Number
// console.log(Number(b))
// // parseInt
// console.log(parseInt(b))
// // +
// console.log(+b)
//
//
// //NaN - not a number
//
// //typeof
// console.log(typeof a)



//
// let month = 7
//    if (month >= 1 && month <= 2  ||  month ===12 ) {
//        console.log("кыш")
//    } else if (month >= 3 && month <=5) {
//        console.log("жаз")
//    }   else if (month >= 6 && month <=8){
//         console.log("жай")
//    }   else if (month >= 9 && month <=11){
//        console.log("куз")
//    }






