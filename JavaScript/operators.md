#operators(연산자)

## 1. `+` operator
- `+`연산자는 문자열을 이어붙이기도 하는데, 문자열에 어떤 숫자를 더하면 일단 모두 문자열로 바뀌게 된다. 빈 문자열에 어떤 값을 더하면 해당 값은 문자열로 변환된다.
```javascript
var myLiteral = Number(); //숫자 원시값을 정의했다.
console.log(typeof myLiteral); //'number'가 기록된다.

myLiteral += " "; //+연산자로 빈 문자열을 숫자 원시값에 더했다.
console.log(typeof myLiteral); //숫자 원시값이 문자열로 변환되어 'string'이 기록된다.
```


## 2. `?:` 삼중 연산자
- 조건문을 한줄로 쓸 수 있게 해준다.
- 구조: `(condition) ? 'true' : 'false'`
```javascript
var age = 10;
var allowed = (age > 18) ? 'yes' : 'no';

console.log(allowed); //'no'가 기록된다.
```


## 3. `in` 연산자
- 좌변의 피연산자로 문자열(혹은 문자열로 반환되는 것)을 받는다. 우변의 피연산자로는 객체나 배열을 받는다. 좌변 값이 우변 객체의 프로퍼티 이름에 해당할 경우 연산 결과는 true다.
```javascript
var point = {x:1, y:1};
var has_x_coord = "x" in point; //true
var has_y_coord = "y" in point; //true
var has_z_coord = "z" in point; //false
var ts = "toString" in point; //상속된 프로퍼티임으로 true
```


## 4. `instanceof` 연산자
- 좌변의 피연산자로 객체를, 우변의 피연산자로 객체 생성자의 이름을 받는다. 좌변 객체가 우변 객체 생성자의 인스턴스일 경우 연산 결과는 true다.
- 우변의 피연산자가 아예 객체가 아닌 경우에 런타임 에러가 발생한다.
```javascript
var d = new Date();
d instanceof Date; //true
d instanceof Object; //true, 모든 객체는 Object의 인스턴스다.
d instanceof Number; //false
```


## 5. `void` 연산자 [???]
- 단일 피연산자 앞에 쓰이는 단항 연산자로, 피연산자의 타입은 아무 타입이라도 관계없다. 이 연산자는 피연산자의 값을 무시하고 undefined를 반환한다.
- 일반적인 사용처는 클라이언트 측의 javascript: URL이다.
