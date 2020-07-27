// const key = 'isMy'
//
// const human = {
//   name:'Jony',
//   walk:true,
//   talk:true,
//   ',':null, // можно задать вот такое имя
//   [key]:true,
// }
// console.log(human)
// // вызов
// const human2 = Object.assign({}, human) // можно записать к пустому({empty}, nameOOP,2,3) ооп уже сущ
// console.log(human2.name)
// console.log(human2.isMy) === (human2['isMy']) // 2 вида вызова
// console.log(human2[','])
//
// // add new element in OOP
// human2.age = 22
// console.log(human2.age)
//
// // delete element in OOP
// delete human2.age
// console.log(human2.age)
//
// for(const key in human2) {
//
// }
// Object.keys(human2).filter(v => v === 'age')

// let obj = {}
//
// function updateObj (object, key, value) {
//   object[key] = value
//   console.log(object)
// }
//
// updateObj(obj, 'key', 'value0')
//

// let b = {
//   status:'active' //01010101
// }
// function changeB(b) {
//   b.status = 'diasbled'
//   console.log(b)
// }
// changeB(b)
// console.log(b)
//

// let computer = {
//   name: 'Lenovo',
//   cores: 8,
//   power: false,
//   start: function() {
//     this.power = true
//     console.log(`${this.name}: Power ON!`)
//   },
//   stop: function() {
//     this.power = false
//     console.log(`${this.name}: Power OFF!`)
//   },
// }
// computer.stop()
// const status = computer.power
// console.log(status)

//class js

// class Computer {
// name;
// cores;
// power;
//
// constructor (n) {
//   this.name = n
// }
// start () {
// this.power = true
// console.log('Power on',this.power)
// }
// check () {
//   console.log('!' in this)
//  }
// }
//
// const c1 = new Computer('Asus')
// const c2 = new Computer('Apple')
// const c3 = new Computer('HP')
// const c4 = new Computer('Lenovo')
//
// console.log(c1)
// console.log(c2)
// console.log(c3)
// console.log(c4)
//
// console.log(Computer)


// class Animal {
//   name = ''
//   hieght = ''
//   constructor (n) {
//     // this.name = n
//   }
//
//   breath () {
//     console.log('breath!')
//   }
// }
//
// class Dog extends Animal { // extends наследовать
// constructor(n) {
//   super ()
//   this.name = n
//   // this.height = h
// }
//   bark () {
//     console.log('Bark!')
//   }
// }
//
// const d = new Dog('Muhtar','80cm')
// console.log(d)
//
// const d2 = new Dog('Rex','60cm')
// console.log(d2)

// Полимарфизм
class Animal {
  name = ''
  hieght = ''
  constructor (n) {
    // this.name = n
  }

  breath () {
    console.log('breath!')
  }
voice () {
  console.log('?')
 }
}

class Dog extends Animal { // extends наследовать
constructor(n) {
  super ()
  this.name = n
  // this.height = h
}
  voice() {
    console.log('Bark')
  }
}
class Cat extends Animal {
  constructor(n) {
    super(n)
  }
  voice() {
    console.log('Meow')
  }
}


const myPets = [new Cat(), new Dog()]
myPets.forEach(function(pet){
  pet.voice()
})
