# JS_Essentials


### #비교 연산자
- === : 일치(ture, false)
- !== : 불일치

### #논리 연산자
- && : 다 true면 true
- || : 하나라도 true면 true
- ! : not

### #삼항 연산자
```js
const r = 1 < 2

if(a) {
  console.log('참')
} else {
  console.log('거짓')
}

//간결한 코드
console.log(a ? '참' : '거짓')
```

### #조건문
```js
//조건문(IF statement)
import random from "./getRandom"

const u = random()

if(u === 0) {
  console.log('u is 0')
  
  ### #화살표 함수 : 함수 최소화
```js
const double = function (x) {
  return x * 2
}
console.log('double:', double(7))

const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow', doubleArrow(7))
```


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
```

# 반복문
```js
for (let i = 0; i < 3; i += 1) {
  console.log(i)
}
```

### #변수 유효범위(Variable Scope)
- var, let, const

### #형 변환(Type conversion)
✔️Truthy(참 같은 값)
- true, { }, [ ], 1, 2, 'false', -12, '3.14'....
 
✔️Falsy(거짓 같은 값)
- false, ' ', null, undefined, 0, -0, NaN



### #호이스팅 : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
```js
const q = 7

double()

function double() {
  console.log(q * 2)
}
```

### #타이머 함수
- setTimeout(함수, 시간) : 일정 시간 후 함수 실행
- setInterval(함수, 시간) : 시간 간격마다 함수 실행
- clearTimeout() : 설정된 Timeout 함수를 종료
- clearInterval() : 설정된 Interval 함수를 종료

### #this
- 일반함수는 호출 위치에서 따라 this 정의
- 화살표함수는 자신이 선언된 함수 범위에서this 정의
} else if (u === 2) {
  console.log('u is 2')
} else if (u === 4) {
  console.log('u is 4')
} else {
  console.log('rest...')
}

