#디자인 패턴 (Design Pattern)
객체 생성 패턴 (Object Create Pattern) _from Professional JavaScript_


## 1. 팩토리 패턴, Factory Pattern
- 특정 객체를 생성하는 과정을 추상화하는 패턴
```javascript
function createPerson (name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
    console.log(this.name);
  };
  return o;
}

var person1 = createPerson("Joeun Ha", 27, "Software Developer");
var person2 = createPerson("Goeun Ha", 25, "Musician");
```

- 단점: 비슷한 객체를 만들 때의 코드 중복 문제는 해결할 수 있지만 생성한 객체가 어떤 타입인지 알 수 없다는 문제는 여전하다.


## 2. 생성자 패턴, Constructor Pattern
- 기존의 생성자와 다른 커스텀 생성자를 만드는 패턴
```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}

var person1 = new Person('Joeun Ha', 27, 'Software Developer');
var person2 = new Person('Goeun Ha', 25, 'Musician');
```

- 생성자 함수는 항상 첫글자가 대문자로 시작하도록 해서 다른 함수와 구별하기 쉽도록 한다.
- new 연산자를 사용해서 호출하면 1.객체를 생성하고 > 2.생성자의 this 값에 새 객체를 할당하고 > 3.생성자 내부 코드를 실행하고 > 4.새 객체를 반환하는 과정을 통해 인스턴스가 채워진다.
    - 결과적으로 생성자 함수를 통해서 정의된 인스턴스는 생성한 객체의 타입을 constructor 프로퍼티를 통해서 알 수 있게 된다. (팩토리 패턴에 비해 장점)
- new 연산자를 사용하지 않으면 생성자 함수도 일반 함수와 같은 기능을 한다. (함수로 사용할 때 유의할 사항은 this가 전역 변수를 가르키게 된다는 점이다.)
```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}
var o = new Object();
Person.call(o, "Grey", 30, "Doctor");
```

- 단점: 인스턴스마다 메서드가 생성된다는 점, 그래서 불필요하게 많은 함수를 호출하게 되기 때문에 결과적으로 성능 저하를 초래한다.


## 3. 프로토타입 패턴, Prototype Pattern
- 모든 함수가 가지는 prototype 객체, 이 객체가 가지는 프로퍼티와 메소드는 객체 인스턴스 전체에 공유된다. __이때 인스턴스는 프로토타입을 가리키는 포인터를 가질 뿐 생성자와 연결된 것이 아니다.__
```javascript
function Person() {
  this.name = "Goeun Ha";
}

var proto = Person.prototype;
proto.name = "Joeun Ha";
proto.age = 27;
proto.job = "Developer";
proto.sayName = function(){
  console.log(this.name);
};

var person1 = new Person();

person1.sayName(); // Goeun Ha를 기록한다.

delete person1.name;

person1.sayName(); // Joeun Ha를 기록한다.
```

- 장점: 한번만 프로토타입에 정의하면 다른 인스턴스에서 호출할 때 같은 메소드를 사용할 수 있기 때문에 불필요한 호출이 생기지 않아 성능이 보다 좋아진다.

- 보다 편한 프로토타입 사용법
```javascript
function Person() {}

Person.prototype = {
  constructor: Person, // 해당 값이 꼭 필요한 경우에 이렇게도 사용 가능하다. 하지만 이렇게 정의하면 for/in에 의해 열거될 수 있다는 단점이 존재한다.
  name: "Joeun Ha",
  age: 27,
  job: "Developer",
  sayName: function() {
    console.log(this.name);
  }
};
```

- 프로퍼티와 메서드는 언제든 프로토타입에 추가되어 인스턴스에게 영향을 미칠 수 있지만 전체 프로토타입이 갱신되는 경우에는 즉, 프로토타입을 아예 다른 객체로 대체하는 경우에는 생성자와 원래 프로토타입 간의 연결이 끊어진다.
```javascript
function Person() {}

var person = new Person();

Person.prototype.sayName = function() {
  console.log("Joeun Ha");
};

person.sayName(); // "Joeun Ha"가 기록된다.
```

```javascript
function Person() {}

var person = new Person();

Person.prototype = {
  name: "Joeun Ha",
  age: 27,
  job: "Developer",
  sayName: function() {
    console.log(this.name);
  }
};

person.sayName(); // error!
```

- 단점: 초기화 매개변수를 생성자에게 전달할 수 없어서 인스턴스가 기본적으로 같은 값만 가지게 된다. 무엇보다도 프로토타입의 프로퍼티를 공유하기 때문에 수정했을 경우 이를 상속받은 인스턴스에서의 값이 동시에 변하게 된다는 위험 요소가 존재한다.


## 4. 생성자 패턴과 프로토타입 패턴의 조합
- 생성자 패턴으로 인스턴스 프로퍼티를 정의하고 프로토타입 패턴으로 메서드와 공유 프로퍼티를 정의하는 방법
```javascript
function Person(name, age, job) { // 개별 프로퍼티와 메서드 집합
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Yaboong", "Peter Cha"];
}

Person.prototype = { // 공유될 프로퍼티와 메서드 집합
  sayName: function() {
    console.log(this.name);
  }
};

var person = new Person("Joeun Ha", 27, "Developer");

console.log(person.constructor); // Object가 기록된다.
```


## 5. 동적 프로토타입 패턴
- 모든 정보를 생성자 내부에 캡슐화 하면서, 필요에 따라 프로토타입을 생성자를 내부에서 초기화하여 생성자와 프로토타입의 장점을 모두 취할 수 있는 방범
```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  if (typeof this.sayName != "function") { // 해당 생성자를 호출하는 시점에는 이 함수가 없는 상태이다.
    Person.prototype.sayName = function() {
      console.log(this.name);
    };
  }
}

var person = new Person('Joeun Ha', 27, 'Developer');

console.log(person.constructor); // Person이 기록된다!!!
```