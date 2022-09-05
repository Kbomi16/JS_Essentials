import getType from './getType'

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])


console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

//산술 연산자(arithmetic operator)
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

//할당 연산자(assignment operator)
let aa =2
aa += 1

console.log(a)

//비교 연산자(comparison operator)
const a = 1
const b = 1

console.log(a === b)

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1,1))
console.log(isEqual(2,'2'))

const aaa = 1
const bbb = 3

console.log(aaa !== bbb)

//논리 연산자(logical operator)
const q = 1 === 1
const w = 'AB' === 'AB'
const e = false

console.log(q)
console.log(w)
console.log(e)

console.log('&&: ', q && w && e)
console.log('||: ', q || w || e)
console.log('!: ', !q)

//삼항 연산자(ternary operator)
const r = 1 < 2

if(a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')

//조건문(IF statement)
import random from "./getRandom"

const u = random()

if(u === 0) {
  console.log('u is 0')
} else if (u === 2) {
  console.log('u is 2')
} else if (u === 4) {
  console.log('u is 4')
} else {
  console.log('rest...')
}

//조건문(SWITCH statement)
switch (a) {
  case 0:
    console.log('u is 0')
    break
  case 2:
    console.log('u is 2')
    break
  case 4:
    console.log('u is 4')
    break
  default: 
    console.log('rest...')
}

//반복문(For Statement)
//for(시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function() {
      console.log(li.textContent)
    })
  }
 
  ulEl.appendChild(li)
}

//변수 유효범위(Variable Scope)
// var, let, const

function scope() {
  
  if (true) {
    var z = 123
    
  }
  console.log(z)
}
scope()

//형 변환(Type conversion)
const m = 1
const n = '1'

console.log(m === n)