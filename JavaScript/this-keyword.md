#this keyword

## 1. this의 사용
- 함수 안에서 사용된 this는 함수를 포함하고 있는 객체를 참조한다.
- 이는 함수를 호출할 때 자바스크립트가 자동으로 만들어 삽입하는 객체이다.
```javascript
var cody = {
  living: true,
  age: 32,
  gender: 'male',
  getGender: function() {return this.gender;} //this.gender는 cody.gender와 같은 의미
};

console.log(cody.getGender()); //'male'이 기록된다.
```


## 2. this의 값은 어떻게 정해지는가?
- this의 값은 함수가 호출될 때의 컨텍스트(context)에 따라 달라진다.
```javascript
var foo = 'foo';
var myObject = {foo: 'I am myObject.foo'};

var sayFoo = function() {
  console.log(this['foo']);
};

myObject.sayFoo = sayFoo;

myObject.sayFoo(); //문맥상 myObject에서 호출된 this가 된다. 따라서, 'I am myObject.foo'가 기록된다.
sayFoo(); //문맥상 전역에서 호출된 this가 된다. 따라서, 'foo'가 기록된다.
```

### 1. 중첩된 함수의 this는 머리 객체(head object)를 참조한다.
- 함수 내에 함수를 정의하거나 다른 함수의 컨텍스트 내에서 호출되면 this의 값은 항상 머리 객체를 참조한다.
- 브라우저의 경우 머리 객체는 window 객체다.
```javascript
var foo = 'I am window.foo'

var myObject = {
  foo: 'I am myObject.foo',
  func1: function() {
    console.log(this.foo); //'I am myObject.foo'가 기록된다.
    var func2 = function() {
      console.log(this.foo); //중첩된 함수이다. 따라서, 'I am window.foo'가 기록된다.
      var func3 = function() {
        console.log(this.foo); //역시 중첩된 함수이다. 'I am window.foo'가 기록된다.
      }();
    }();
  }
}

myObject.func1();
```

- 중첩된 함수 문제는 스코프 체인을 사용해 우회한다.
```javascript
var myProperty = 'I am window.myProperty';

var myObject = {
  myProperty: 'I am myObject.myProperty',
  myMethod: function(){
    var that = this; //this에 대한 참조를 myMethod의 스코프에 별도로 저장한다.
    var helperFunction = function() {
      console.log(that.myProperty); //중첩된 함수 내에 있지만 that을 이용하여 myMethod.myProperty를 참조한다.
      console.log(this.myProperty); //this를 사용하여 중첩된 함수 문제를 그대로 가지고 머리 객체를 참조한다.
    }();
  }
}

myObject.myMethod();
```

### 2. call() 또는 apply()를 사용한 this 값 설정
- apply()나 call()을 사용해 함수를 호출할 때 this가 참조할 객체를 정해주는 식으로 this의 값을 조작할 수 있다. "이봐, X 함수를 호출해. 하지만 X 함수에는 this 값으로 Z 객체를 사용해라고 일러둬"
- 이 방식을 사용하면 바로 자바스크립트에서 설정한 this의 값을 재정의할 수 있다.
```javascript
var myObject = {};

var myFunction = function(param1, param2) {
  this.foo = param1;
  this.bar = param2;
  console.log(this); //call()혹은 apply()에 의해 this가 myObject로 설정되었다.
};

myFunction.call(myObject, 'I am foo', 'I am bar'); //myObject를 this로 설정하고 함수를 호출한다.
//myFunction.apply(myObject, ['I am foo', 'I am bar']); //위와 동일한 역할을 한다.
```

### 3. 사용자 정의 생성자 함수 내에서 this 키워드 사용하기
- new 키워드를 사용해 함수를 실행할 때 생성자 함수 내에 코딩된 this의 값은 생성자 인스턴스를 가리킨다.
- new 키워드를 사용해 생성자 함수를 호출하면 이때의 this는 '만들어질 객체'를 참조한다.
- new 키워드를 사용하지 않았다면 this의 값은 사용자 정의 함수가 호출된 컨텍스트가 된다.
```javascript
var Person = function(name) {
  this.name = name || 'Jason Bone';
}

var cody = new Person('Cody Lindley');
var matt = Person('Matthew Damon');

console.log(cody.name); //new 키워드에 의해 생성된 'Cody Lindley'가 기록된다.
// console.log(matt.name); //undefined이다. name값은 컨텍스트에 맞게 window에 위치하고 있다.
console.log(window.name); //'Matthew Damon'이 기록된다.
```

- 프로토타입 메소트 안의 this는 생성자 인스턴스를 참조한다.
```javascript
var Person = function(name) {
  this.name = name || 'Jason Bone';
}

Person.prototype.whatIsMyName = function() {
  return this.name; //이때 사용되는 this 키워드는 Person()을 통해 만들어진 인스턴스를 참조한다.
}

var cody = new Person('Cody Lindley');
var matt = new Person('Matthew Damon');

console.log(cody.whatIsMyName());
console.log(matt.whatIsMyName());
```
