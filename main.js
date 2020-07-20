// 2 hw
//1)
// let a = 1, b = 1, c, d
// c = ++a //2
// alert (c) // 2 префиксный инкремент он сразу же передает +1
//
// d = b++ //1 next +1
// alert (d) // 1 постфиксный инкримент он передает при следующим вывзове +1
//
// c = (2 + ++a)
// alert (c) // c=2(2 + ++a)= 5
//
// d = (2 + b++)
// alert(d) // d=1(2 + b++)= 4
//
// alert (a) //3 a=1 + ++a + ++a
// alert (b) //3 b=1 + b++ + b++
//========================================================================>
//2)
// let a = 2
// let x = 1 + (a *= 2) // 5 *=,*/,+=,-= Этот символ присваивание значение

// let x = 10
// let y = 5
// //  10 + 5
// x = x += y
// // x = x + y
//========================================================================>
//3)
// const myNumA = parseInt(prompt(`Input your value: A`))
// const myNumB = parseInt(prompt(`Input your value: B`))
// if (myNumA > 0 && myNumB > 0) {
//   console.log(`result(-): ${myNumA - myNumB}`)
// }
// else if (myNumA > 0 && myNumB < 0 || myNumA < 0 && myNumB > 0) {
// console.log(`result(+): ${myNumA + myNumB}`)
// }
// else if (Number.isNaN(myNumA) || Number.isNaN(myNumB)) {
// console.log('this is not number')
// }
// else {
//   if (myNumA < 0 && myNumB < 0) {
//     console.log(`result(*):${myNumA * myNumB}`)
//   }
//
// }
//========================================================================>
//4)
// let swit = parseInt(prompt(`This is switch value 1-15`))
// switch (swit) {
//   case 1:
//   console.log(1)
//   case 2:
//   console.log(2)
//   case 3:
//   console.log(3)
//   case 4:
//   console.log(4)
//   case 5:
//   console.log(5)
//   case 6:
//   console.log(6)
//   case 7:
//   console.log(7)
//  case 8:
//  console.log(8)
//  case 9:
//  console.log(9)
//  case 10:
//  console.log(10)
//  case 11:
//  console.log(11)
//  case 12:
//  console.log(12)
//  case 13:
//  console.log(13)
//  case 14:
//  console.log(14)
//  case 15:
//  console.log(15)
//  break
//   default:
//   console.log('You\'re\ out of range' )
// }

// for (let whi = 1; whi <= 15; whi++) {
//   console.log(whi)
// }
//========================================================================>
//5)
// function plus(arg1, arg2) {
// return arg1 + arg2
// }
// console.log(plus(10, 5)) // 15
//
// function minus(arg1, arg2) {
//   return arg1 - arg2
// }
// console.log(minus(5, 3)) // 2
//
// function division (arg1, arg2) {
//   return arg1 / arg2
// }
// console.log(division(100, 10)) // 10
//
// function multiplication (arg1, arg2) {
//   return arg1 * arg2
// }
// console.log(multiplication (5, 4)) // 20
//========================================================================>
//6)
// Этот код я списал не мог понять суть далее буду старатся больше
// function plus(arg1, arg2) {
// return arg1 + arg2
// }
//
// function minus(arg1, arg2) {
//   return arg1 - arg2
// }
//
// function division (arg1, arg2) {
//   return arg1 / arg2
// }
//
// function multiplication (arg1, arg2) {
//   return arg1 * arg2
// }
//
// function mathOperation (value1, value2, operation) {
//   switch (operation) {
//     case '+':
//     return plus(value1, value2)
//
//     case '-':
//     return minus(value1, value2)
//
//     case '/':
//     return division(value1, value2)
//
//     case '*':
//     return multiplication(value1, value2)
//
//     default:
//     alert(`This operation don't work. Try again!`)
//   }
// }
//
// console.log(mathOperation(1,2, '+'))
// console.log(mathOperation(10,2, '-'))
// console.log(mathOperation(100,25, '/'))
// console.log(mathOperation(7,7, '*'))
//========================================================================>
//7)
// null == undefined // true
// null == 0 // false
// null == ''// false
// Если честно не знаю почему null == undefined true (null- это же пустота) (undefined- не определенно)
// почему тогда в null == '' пустой строке не true интересный Баг :)
//========================================================================>
//8)
// console.log(Math.pow(2,4)) // Зачем создавать Велосипед когда он есть )
// шучу я понимаю что мы должны не идти по легкому пути что-бы чему то научится
// можете дать доп материал по рекурсий а то я кажется не понял
//
// function power (val, pow){
//   let result = val
//
// for(i = 1; i < pow; i++) {
//   result *= val
//  }
//   return result
// }
// let val = parseInt(prompt(`Input your value:`))
// let pow = parseInt(prompt(`Input your power:`))
//
// if(pow === 0 || pow === 1){
// alert(`This don't worked try again: ${pow}`)
// }
// else if (Number.isNaN(pow) || Number.isNaN(val)) {
//   alert(`Please input just number`)
// }
// else {
//   alert(`Your power: ${power(val,pow)}`)
// }
