//==================================================>
//1)
// function numToObj (n) {
// const obj = {}
//
// if (n >= 0 && n <= 999) {
//  const splitter = []
//  for(let i = 1; i <= 3; i++){
//    splitter.push(n % 10)
//    n = Math.trunc(n / 10)
//  }
// [obj.ed, obj.ten, obj.hun] = splitter
// }
// return obj
// }
// let result = numToObj(123)
// console.log(result)
//==================================================>
// let [firstName, , secondName] = 'Tilegen Adilbekovich Bakitov'.split(' ')

// function numToObj(n) = {
//  const obj = {}
//   if (n >= 0 && n <= 999) {
//     [obj.ed, obj.ten, obj.hun] = `${n}`.split('').reverse()//123-> ['1','2','3']->['3','2','1']
//   }
// }
// numToObj(123)
//==================================================>
// const obj = {
//   a:'qwer',
//   b:[100,200,300],
//   c:3,
// }
// let {a, b, c} = obj
// console.log(a, b, c)
//
// function soSomething (obj) {
//   const {price, count} = obj
// }

//==================================================>
// Диструктивное присвоение
// let obj = {
//   count:100,
//   qwerty:200,
//   color: ['red','gold','black','white',],
//   storage:[32,64,128,256,],
//   price:[499, 799, 1099,],
//   // qwe:[{},{},{},],
// }
//   function doSomething () {
//     let {color, storage, price} = obj
//    // let color = obj.color //
//     console.log(color[0], `${storage[0]}GB`, '$'+price[1] )
//   }
//   doSomething(obj)
//==================================================>
// DOCUMENT OBJECT MODULE

// const el = document.getElementById('qwerty')
// console.log(el)

// const elClass = document.getElementsByClassName('link')
// console.log(elClass)

// const elQuery = document.querySelector('.link') // возвр Первый элемент
// console.log(elQuery)

// const elQAll = document.querySelectorAll('.link')
// console.log(elQAll); // все элементы

// const elName = document.querySelectorAll('[name=dont_know]')
// console.log(elName);
//==================================================>

// const navSite = document.querySelector('.nav_site')
// const navLink = navSite.querySelectorAll('.link')
// console.log(navLink)
//==================================================>

// 1) Этот метод перезапишется будет только один li
// const listContainer = document.querySelector('#list')
// console.log(listContainer)
// listContainer.innerHTML = '<li>New Element In Js</li>'

// 2) Здесь же будет три li
// const listContainer = document.querySelector('#list')
// console.log(listContainer)
//
// const newListElement = document.createElement('li')
// newListElement.innerHTML = 'New element JS'
//
// listContainer.appendChild(newListElement)
//==================================================>

// const logo = document.querySelector('.logo')
// // logo.classList.add('red') // Добав класса
// //
// // logo.classList.remove('red') // Удал класса
// logo.classList.toggle('red') // переключатель если нету то доба если есть то убирает


// const btn = document.querySelector('.button')
// btn.addEventListener('click', () => {
//   btn.classList.toggle('red',)
//   btn.style.height = '100px'
//   // btn.style.display = 'none'
//   // min-width ////css
//   btn.style.minWidth = '200px' // camelCase
// })

//==================================================>
// Системный Атрибуты в HTML обращение к ним
//  const input = document.querySelector('input')
//  const value = input.value
//  console.log(value)
//
// const link = document.querySelector('.link_news')
// console.log(link.href)
//
// // Можно уст и собственный Атрибуты пример
// input.setAttribute('myattribute', true)
// const newAttr = input.getAttribute('myattribute')
//
// // console.log(input.myattribute); //// не работает нужно передать через get
// console.log(newAttr)

//==================================================>
// const menu = ['Home', 'About', 'Media', 'Links', 'News', 'Partner', 'NEW',]
// const nav = document.querySelector('nav') // передал тег nav из html в js nav
//
// if(nav) { // условия если (nav) будет выпылнено
//   menu.forEach(link => { //???
//     const linkElement = document.createElement('a')// создал тег а и записал в linkElement
//     linkElement.innerText = link // что же оно делает записывает ли оно значение который находитсЯ в массиве?
//     linkElement.setAttribute('href',`/${link.toLowerCase()}/`) // атрибуту href как поставить например 1ссылке cart.html 2) gallery.html 3)news.html?
//     linkElement.classList.add('link')// add class в тег
//     console.log(linkElement) // вывод в консоль
//     nav.appendChild(linkElement) // помести linkElement в nav
//   })
// }
//==================================================>
