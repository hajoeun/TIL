#Declare Objects(객체의 선언)
_from FreeCodeCamp_

## 1. 예제 01
변수로서의 객체 선언

```javascript
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {
  "wheels" : 2,
  "engines" : 1,
  "seats" : 1
};
```

간단하게 `{ }` 안에 key값과 value값을 정의하여 변수로서의 객체를 선언할 수 있다. 이와 같은 표기법을 리터럴(literal) 표기법이라고 한다.


## 2. 예제 02
생성자(constructor)를 이용한 객체 선언

```javascript
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};
```

`function()`과 같은 생성자를 이용하여 객체를 선언할 수 있다. `this`는 생성자 내부에서 해당 객체를 가리키는 키워드이다. 예제에서는 각각 `Car`와 `MotorBike`를 가르킨다.


## 3. 예제 03
`new` 키워드를 이용한 객체의 인스턴스(instance) 선언

```javascript
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();
myCar.nickname = "Pony";
```

`myCar`의 경우와 같이 `new` 키워드를 이용하여 인스턴스를 만들 수 있다. 이 예제의 경우 `myCar`는 `Car`의 인스턴스 객체로 선언된다. 때문에 `myCar`는 `wheels`,`engines`,`seats` 값을 각각 4, 1, 1로 갖는다. `myCar.nickname = "Pony";` 와 같이 속성(property)을 부여할 수 있다.
