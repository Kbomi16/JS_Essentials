// 함수

function sum(x, y) {
  return x + y
}

const a = sum(1, 3)
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(a + b)

// 화살표 함수
const double = function (x) {
  return x * 2
}
console.log('double:', double(7))

const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow', doubleArrow(7))

// 즉시 실행 함수
//IIFE, Immediately-Invoked Fuction Experession
const aa = 7
function double() {
  console.log(aa * 2)
}
double();

(function() {
  console.log(a * 2)
})();

//호이스팅 : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const q = 7

double()

function double() {
  console.log(q * 2)
}

//타이머 함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수를 종료
//clearInterval() : 설정된 Interval 함수를 종료

setTimeout(function() {
  console.log('helloooooo')
}, 3000)

setTimeout(() => {
  console.log('helloooooo')
}, 3000)

const timer = setInterval(() => {
  console.log('helloooooo')
}, 3000)

const heEl = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})

//콜백(Callback) : 함수의 인수로 사용되는 함수
function timeout(cb) {
  setTimeout(() => {
    console.log('world!!!')
    cb()
  }, 1000)
}
timeout(() => {
  console.log('Done!')
})
