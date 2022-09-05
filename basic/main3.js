// const bomi = {
//   firstName: 'Bomi',
//   lastName: 'Kim',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(bomi.getFullName())

// const amy = {
//   // firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smitih',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const bomi = new user('Bomi', 'Kim')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smitih')

console.log(bomi.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

//this
// 일반함수는 호출 위치에서 따라 this 정의
// 화살표함수는 자신이 선언된 함수 범위에서this 정의
const heropy = {
  name: 'Heropy',
  normal: function () {  //일반함수
    console.log(this.name)
  },
  arrow: () => {   //화살표함수
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const am = {
  name: 'am',
  normal: heropy.normal,
  arrow: heropy.arrow
}
am.normal()
am.arrow()

//ES6 Classes
const gg = {
  name: 'gg',
  normal: function() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
gg.normal()
gg.arrow()


//상속
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}