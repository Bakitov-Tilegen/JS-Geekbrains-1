// 1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
let number = prompt('Value:0-999')
numLen = number.length
obj = {}
f(number)
function f(num) {
if (num < 0 || num > 999) {
  alert('Выход из диапозона!')
}
else if (num === 0 ) {
  alert('Это ноль!')
}
else {
  switch (numLen) {
    case 3:
    obj.ed = num[2]
    obj.ten = num[1]
    obj.hundred = num[0]
    break

    case 2:
    obj.ed = num [1]
    obj.ten = num [0]
    break
    default:obj.ed = num
 }
console.log(obj)
return obj

}
}
//
// 2) Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов.
// Какими объектами можно заменить их элементы? Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
//
// let arrSizeStorage = [64,128,256,512,1024,2048]
// class Cart {
//     constructor(brand, model, price, color, storage) {
//       this.brand = brand
//       this.model = model
//       this.price = price
//       this.color = color
//       this.storage = storage
//     }
//     calcCoast() {
//       console.log(`${this.price} `)
//     }
//     storage() {
//       console.log(`Storage: ${arrSizeStorage[this.size]}GB`)
//     }
//
//     tellAboutYou() {
//       console.log(`${this.brand} ${this.model} ${this.price} ${this.color} ${storage()}`)
//     }
//   }
// class Smartphone extends Cart {
//
// }
// class Laptop extends Cart {
//
// }
//
// let iphone = new Smartphone ('Apple', 'Iphone 11 PRO MAX', 1099, 'Midnight-Green', '256 GB')
// console.log(iphone)
// // iphone.storage()
// let pixel = new Smartphone ('Google','Pixel 4 XL', 1000, 'Black', '128 GB')
// console.log(pixel)
// // pixel.storage()
// let macbook16 = new Laptop ('Apple', 'Macbook-16 inch', 2399, 'Space-Gray', '512 GB')
// console.log(macbook16)
// // macbook16.storage()
//
// function calcInCart() {
//   return iphone.price + pixel.price + macbook16.price
//
// }
// calcInCart()
// Этот код не рабочий я не мог решить код который внизу я его нашел в интернете

let basket = {
  products:[],
  countBasketPrice: function() {
    let sum = 0;
    for(let i = 0; i < this.products.length; i++) {
      sum = sum + this.products[i].price * this.products[i].count;
    }
    return sum;
  }
}

let products = [
  {name:'Iphone 11 PRO MAX', price: 1099, count:1 },
  {name:'Google Pixel 4XL', price: 959, count:1 },
  {name:'Apple Macbook 16', price: 2399, count:2},
];
basket.products = products;

console.log('Total: $' + basket.countBasketPrice());




//
// 3)* Подумать над глобальными сущностями. К примеру, сущность
//  «Продукт» в интернет-магазине актуальна не только для корзины,
// но и для каталога. Стремиться нужно к тому, чтобы объект
// «Продукт» имел единую структуру для различных модулей сайта,
// но в разных местах давал возможность вызывать разные методы.
