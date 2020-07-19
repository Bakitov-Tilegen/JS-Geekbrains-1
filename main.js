// 2) ДЗ
// alert('this second hw')

// const time = 'evening'
// let time = prompt('Какой время суток сейчас morning, day, evening')
// switch (time) {
//   case 'morning':
//   console.log('Good morning')
//   break
//   case 'day':
//   console.log('Have nice day')
//   break
//   case 'evening' :
//   console.log('Good evening')
//   break
//   default:
//   console.log('Hello)')
// }
//===============================================
// let a = 10
// let b = 20
// let max
// if(a > b) {
//   max = a
// }
// else {
//   max = b
// }
// console.log(max)
//===============================================
//           if true ? if false
// const max = a > b ? a : b
// console.log(max)
//===============================================
// if(a > b && a < 0) {
//   // && И должно выполнется все условия то есть если даже будет 1/2 true уйдет в else
// }
// else if (a === b || a > b) {
//   // || ИЛИ если есть 2 условия должно хотябы выполнется 1/2
// }
// else if (!a === b ) {
//   // ! НЕ это как если у тебя есть друг который спорит что 1+1=11 !true сделает false
// }
//===============================================

// function num(arg1, arg2) {
//   return (arg1 + arg2) / 3
// }
// const result1 = num(10 , 10)
// console.log(result1)
//
// const result2 = num(100 , 50)
// console.log(result2)
//===============================================

// const b = 2 // global

// function num2 (b)  {
//   console.log(b) //0
// }
// num2 (0) // argument b == 0

// console.log(b) // 2
//===============================================

// const c = 3 // global
// function num3 () {
//   const c = 0 // just in function c = 0
//   console.log(c) // 0
// }
// num3() // Вызов Функций
// console.log(c) // global function

//===============================================

// let x = 1
// function example() {
//   x++
//   console.log(x)
// }
// example()
// console.log(x)
//===============================================
// let y = 1
// function example2(y) {
//   y++
//   console.log(y)// example2 y=2
// }
// example2(y) // вызов функций с аргументам (y=1+y++)=2
// console.log(y) // global y = 1  //y++ находится внутри function не передает к global +1
//===============================================

// function example3() {
//   console.log(d)
// }
// const d = 7
// example3()
//===============================================

// function fibb (n) {
//   if (n <= 1) {
//     return n
//   }
//
//   return fibb (n - 1) + fibb (n - 2)
// }
// const res = fibb(5)
// console.log(res)
//===============================================
// let num = 0
// function guess (tC) {
//   if (tC === 1) {
//   num = Math.round(Math.random()*10)
//   console.log(num)
//   }
//
//
// const myAns = parseInt(prompt(`Input:`), 10)
// if (myAns === num) {
//   alert(`You Won! Your Chance: ${tC}`)
// }
// else {
//   guess(tC + 1)
//  }
// }
// guess(1)
