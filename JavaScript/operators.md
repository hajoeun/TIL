#operators(연산자)

## 1. `+` operator
- `+`연산자는 문자열을 이어붙이기도 하는데, 문자열에 어떤 숫자를 더하면 일단 모두 문자열로 바뀌게 된다. 빈 문자열에 어떤 값을 더하면 해당 값은 문자열로 변환된다.
```javascript
var myLiteral = Number(); //숫자 원시값을 정의했다.
console.log(typeof myLiteral); //'number'가 기록된다.

myLiteral += " "; //+연산자로 빈 문자열을 숫자 원시값에 더했다.
console.log(typeof myLiteral); //숫자 원시값이 문자열로 변환되어 'string'이 기록된다.
```


## 2. 삼중 연산자
- 조건문을 한줄로 쓸 수 있게 해준다.
- 구조: `(condition) ? 'true' : 'false'`
```javascript
var age = 10;
var allowed = (age > 18) ? 'yes' : 'no';

console.log(allowed); //'no'가 기록된다.
```
