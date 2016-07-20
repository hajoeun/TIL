#Boolean()

## 1. Boolean() 객체의 사용
- Boolean() 생성자 함수는 불리언값 객체를 만들 때 사용한다. 불리언값은 불리언 원시값으로도 사용하며, true 또는 false 중 하나의 값을 표현하는 자료형이다.
```javascript
var myBoolean1 = new Boolean(false); //new 키워드를 사용해 불리언 객체를 만든다.
console.log(typeof myBoolean1); //'object'가 기록된다.

var myBoolean2 = Boolean(false); //new 키워드 없이 불리언 원시값을 만든다.
console.log(typeof myBoolean2); //'boolean'이 기록된다.

var myBoolean3 = false; //리터럴 표기법을 사용해 불리언 원시값을 만든다.
console.log(typeof myBoolean3); //'boolean'이 기록된다.
```

- Boolean() 생성자 함수에는 불리언값으로 변환 가능한 한 개의 매개변수를 전달할 수 있다.
- `0`,`-0`, `null`, `false`, `NaN`, `undefined`, ` `(빈 문자열)은 `false`로 그 밖의 값은 `true`로 변환된다.
- false 복합 객체는 true로 변환된다.
```javascript
var myBoolean1 = new Boolean(undefined); //undefined는 'false'로 변환된다.
console.log(typeof myBoolean1); //'object'가 기록된다.

var booleanValue = Boolean(myBoolean1); //false 불리언 객체를 매개변수로 불리언 원시값을 만든다.
console.log(booleanValue); //'true'가 기록된다.
```


## 2. Boolean() 속성과 메소드
- **속성**
  - prototype


## 3. Boolean 객체 인스턴스의 속성과 메소드
- **인스턴스 속성**
  - constructor
- **인스턴스 메소드**
  - toSource()
  - toString()
  - valueOf()
