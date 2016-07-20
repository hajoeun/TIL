#String()

## 1. String() 객체의 사용
- String() 생성자 함수는 문자열 객체와 문자열 원시값을 만들 때 사용한다.
- String() 생성자를 사용하면 string이 아닌 object로 만들어진다. 때문에 문자열을 만들 때는 가능하다면 리터럴 표기법으로 만드는 것을 권장한다.
```javascript
var stringObject1 = new String('foo'); //new 키워드를 사용해 문자열 객체를 만든다.
console.log(stringObject1, typeof stringObject1); //'[String: "foo"]' 'object'가 기록된다.

var stringObject2 = String('foo'); //new 키워드 없이 문자열 원시값을 만든다.
console.log(stringObject2, typeof stringObject2); //'foo' 'string'이 기록된다.

var stringLiteral = 'foo'; //리터럴 표기법으로 문자열 원시값을 만든다. 생성자가 암묵적으로 사용된다.
console.log(stringLiteral, typeof stringLiteral); //'foo' 'string'이 기록된다.
```


## 2. String() 속성과 메소드
- **속성**
  - prototype
- **메소드**
  - fromCharCode()


## 3. String 객체 인스턴스의 속성과 메소드
- **인스턴스 속성**
  - constructor
  - length
- **인스턴스 메소드**
  - charAt()
  - charCodeAt()
  - concat()
  - indexOf()
  - lastIndexOf()
  - localeCompare()
  - match()
  - replace()
  - search()
  - slice()
  - split()
  - substr()
  - subString()
  - toLocaleLowerCase()
  - toLocaleUpperCase()
  - toLowerCase()
  - toString()
  - toUpperCase()
  - valueOf()
