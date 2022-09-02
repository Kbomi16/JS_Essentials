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
