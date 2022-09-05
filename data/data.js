//JS 데이터
const result = 'Hello world!'.indexOf('fg')
console.log(result)

const str = '01 23'
console.log(str.length)

const st = 'Hello world      '
console.log(st.indexOf('world') !== -1)
console.log(st.slice(0, 3))
console.log(st.replace('world', 'BOMI'))
console.log(st.trim())

const strr = 'thesecon@gmail.com'
console.log(strr.match(/.+(?=@)/)) //@앞에 있는 문자 출력
console.log(strr.match(/.+(?=@)/)[0])

//배열
const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers)
console.log(fruits[2])
console.log([1,2].length)
console.log(numbers.concat(fruits))

// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array)
// })

fruits.forEach(function (fruits, i) {
  console.log(fruits, i)
})

//map
const a = fruits.forEach(function(fruit, index) {
  console.log(`&{fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function(fruit, index) {
  return `${fruit}-${index}`
})
console.log(b)

//filter()
const aa = numbers.map(number => {
  return number < 3
})
console.log(aa)

const bb = numbers.filter(number => {
  return number < 3
})
console.log(bb)

//find(), findIndex()
const aaa = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(aaa)

const aaaa = fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(aaaa)

//object
const userAge = {
  name : 'BOMI',
  age : 23
}
const userEmail = {
  name: 'BOMI',
  email: 'kimbomi2172@naver.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const q = {k:123}
const w = {k:123}
console.log(a === b)

//구조 분해 할당
//비구조화 할당
const user = {
  name: 'bomi',
  age: '23',
  email: 'bomi2172@gmail.com'
}
const {name, age, email, address} = user

console.log(`사용자 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruitss = ['Apple', 'Banana', 'Cherry']
const [o,p,qq,r] = fruitss
console.log(o,p,qq,r)

//전개연산자
const ffff = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(ffff)
console.log(...ffff)

const toObject = (a, b, ...c) => ({a, b, c})
console.log(toObject(...ffff))

//데이터 불변성
//1. 원시데이터 : String, Number, Boolean, undefined, null...
//2. 참조형 데이터 : Object, Array, Fuction
let x = 1
let y = 4
console.log(x, y, x === y)

y = x
console.log(x, y, x === y)

x = 7
console.log(x, y, x === y) 

let z = 1
console.log(y, z, y === z)


