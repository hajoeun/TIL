#function of prototype (함수의 프로토타입)

## 1. 프로토타입 체인
* prototype 속성이 왜 중요한가
  * 네이티브 생성자 함수는 prototype 속성을 사용해 생성자 인스턴스가 메소드와 속성을 상속받도록 하고 있기 때문이다.
  * 사용자 정의 생성자 함수를 만들 때 자바스크립트 네이티브 객체와 동일한 방식을 통해 프로토타입 상속을 구현할 수 있기 때문이다.
  * 프로토타입 상속을 사용하면 동일한 메소드를 공유하는 여러 개의 효율적인 객체 인스턴스를 만들 수 있다.
  * **_프로토타입 상속은 전통적인 객체 지향 프로그래밍 언어에서 볼 수 있던 상속 패턴을 흉내내기 위해 만들어졌다._**

- 모든 Function() 인스턴스에는 prototype 속성이 있다.
- prototype 속성은 Object() 객체다.
```javascript
var myFunction = function() {};
console.log(myFunction.prototype); //빈 객체인 Object{}가 기록된다.
console.log(typeof myFunction.prototype); //'object'가 기록된다.
```

- 생성자 함수를 통해 만든 인스턴스는 생성자 함수의 prototype 속성과 연결되어 있다.
- 프로토타입 체인의 끝은 Object.prototype이다.

- 프로토타입 체인은 체인에서 제일 먼저 찾은 속성을 반환한다.
```javascript
Object.prototype.foo = 'object-foo';
Array.prototype.foo = 'array-foo';
var myArray = [];

console.log(myArray.foo); //먼저 찾은 값인 'array-foo'를 반환한다.

myArray.foo = 'bar';

console.log(myArray.foo); //먼저 찾은 값인 'bar'를 반환한다.
```

- prototype 속성을 새 객체로 대체하면 기본 생성자(constructor) 속성은 삭제된다.
```javascript
var Foo = function Foo(){};

Foo.prototype = {};

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo); //false가 기록된다. 생성자의 prototype을 갱신했기 때문에 Foo()의 인스턴스임에도 불구하고 참조가 일치하지 않는다.
console.log(FooInstance.constructor); //Foo()가 아닌 Object()가 기록된다.


var Bar = function Bar(){};

var BarInstance = new Bar();

console.log(BarInstance.constructor === Bar); //true가 기록된다. 생성자의 prototype을 갱신하지 않았기 때문이다.
console.log(BarInstance.constructor); //Bar()가 기록된다.
```

- prototype 속성을 대체하기 원할 때, 생성자 함수를 참조하는 constructor 속성을 복원하는 방법
```javascript
var Foo = function Foo(){};

Foo.prototype = {constructor:Foo};

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo); //true가 기록된다.
console.log(FooInstance.constructor); //Foo()가 기록된다.
```

- 프로토타입에서 상속한 속성은 가장 최근의 값을 사용한다.
```javascript
var Foo = function Foo(){};

Foo.prototype.x = 1;

var FooInstance = new Foo();

console.log(FooInstance.x); //1이 기록된다.

Foo.prototype.x = 2;

console.log(FooInstance.x); //FooInstance가 갱신되어 2가 기록된다.
```

- prototype 속성을 **새 객체**로 대체하면 이전에 만든 인스턴스는 갱신되지 않는다.
- 객체의 prototype 속성을 새 객체로 대체하면 안된다.
```javascript
var Foo = function Foo(){};

Foo.prototype.x = 1;

var FooInstance = new Foo();

console.log(FooInstance.x); //1이 기록된다.

Foo.prototype = {x:2}; //새로운 Object() 객체로 대체한다.

console.log(FooInstance.x); //1이 기록된다. 인스턴스로 만들어지던 시점의 prototype을 참조하고 있다.
```

- 상속 체인 만들기
```javascript
var Person = function(){this.bar = 'bar'};
Person.prototype.foo = 'foo';

var Chef = function(){this.goo = 'goo'};
Chef.prototype = new Person();
var cody = new Chef();

console.log(cody.foo); //Person.prototype까지 상속 체인이 올라가서 'foo'를 기록한다.
console.log(cody.goo); //Chef.goo까지 상속 체인이 올라가서 'goo'를 기록한다.
console.log(cody.bar); //Person.bar까지 상속 체인이 올라가서 'bar'를 기록한다.
```
