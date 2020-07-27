// 3 hw
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// // 1)
//  let i = 0
//  while (i <= 100) {
//    let j = 2
//    while (j < i) {
//     if (i % j === 0){
//       break
//     }
//     j++
//   }
//   if (i === j) {
//     console.log(i)
//   }
//   i++
//  }
//======================================================================>
//2)
// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости
// корзины в зависимости от находящихся в ней товаров.
//
// let basketArrMaker = ['HP','Apple','Sony','Samsung','Dji',]
// // console.log(basketArrMaker)
// let basketArrPrice = [990,1490,590,450,1120]
// // console.log(basketArrPrice)
//
// let resultOnebyOne = (`${basketArrMaker[0]} price: ${basketArrPrice[0]} USD`)// можно ли это сделать циклом
// // for(i = 0; i <= resultOnebyOne.length; i++){
// //   console.log(resultOnebyOne[i])
// // } хотел чтобы менял индекс у двух масивов одновреммено Maker[1],Price[1]
//
// alert(resultOnebyOne)


//======================================================================>
//3)
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// let basketArrMaker = ['HP','Apple','Sony','Samsung','Dji',]
// // console.log(basketArrMaker)
// let basketArrPrice = [990,1490,590,450,1120]
// // console.log(basketArrPrice)
// let result = basketArrPrice.reduce(function(sum, current) {
//   return sum + current
// })
//
// alert(`Total: ${result} USD`)

//======================================================================>

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
//  Выглядеть это должно так:
// for(…){// здесь пусто}
//4)
// for(let i = 0; i < 10; console.log(i++)){}
//======================================================================>

// 4.1) *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

//4.1)
// let arr = []
// for (let i = 1; i <= 20; i++) {
//   arr.push('x')
//   console.log(arr)
// }
