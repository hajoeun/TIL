#Function()

## 1. Function() 객체 사용
- 함수는 괄호를 사용해 호출할 코드 문장들을 모아두는 곳이다.
- 함수를 실행할 때 괄호 안에 매개변수를 전달할 수 있어 함수 안의 문장에서 특정한 값에 접근하도록 만들 수 있다.
- 기본적으로 함수란, 문장을 실행할 수 있는 고유한 스코프(scope)다.
- Function() 생성자는 매겨변수를 무한정 가질 수 있지만, **마지막 매개변수는 항상 함수의 몸체를 구성할 코드를 나타내는 문자열이어야 한다.**
```javascript
//new 키워드와 생성자를 이용한 방식
var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
console.log(addNumbersA(2,4));

//리터럴 방식, 이 방식이 더 많이 사용된다.
var addNumbersB = function(num1, num2) {return num1 + num2;}; //함수 표현식
function addNumbersC(num1, num2) {return num1 + num2;}; //함수 선언문
console.log(addNumbersB(2,5), addNumbersC(4,4));
```


## 2. Function() 속성과 메소드
- **속성**
  - prototype


## 3. Function 객체 인스턴스의 속성과 메소드
- **인스턴스 속성**
  - arguments
  - constructor
  - length 매개변수의 개수를 반환한다.
- **인스턴스 메소드**
  - apply()
  - call()
  - toString()


## 4. 함수의 특징
- 함수는 항상 값을 반환한다. 반환할 값을 설정하지 않으면 undefined가 반환된다.
- 함수는 1급 클래스다.
  - 자바스크립트에서 함수는 객체다. 변수, 배열, 객체에 저장될 수 있다. 객체로서 속성도 가지고 있다.
  ```javascript
  //함수는 변수, 배열, 객체에 저장될 수 있다.
  var funcA = function(){}; //funcA()로 호출한다.
  var funcB = [function(){}]; //funcB[0]()로 호출한다.
  var funcC = {method: function(){}}; //funcC.method() 또는 funcC['method']()로 호출한다.

  //함수는 함수로 전달할 수도, 함수에서 반환될 수도 있다.
  var funcD = function(func) {
    return func;
  };
  ```


## 5. this와 arguments
- arguments 객체는 함수로 전달된 매개변수를 저장하고 있는 배열과 유사한 객체다.
```javascript
var add = function() {
  return arguments[0] + arguments[1];
};

console.log(add(3,4));
```

- arguments 객체에는 callee(사전; 피호출자)라는 속성이 있다. 이 속성은 현재 실행 중인 함수의 참조(self-reference)를 가능하게 한다. 이를 이용해 재귀 함수를 구현할 수 있다.
```javascript
function foo() {
  console.log(arguments.callee); //foo()가 기록된다.
};

foo();
```

- this 키워드는 함수를 포함하고 있는 객체에 대한 참조다. 자세한 내용은 [this-keyword.md](http://til.wiki.dev/JavaScript/this-keyword)을 참고



## 6. 함수의 정의와 호출
- 함수는 함수 생성자, 함수 선언문, 함수 표현식 세 가지의 다른 방식으로 정의할 수 있다.
```javascript
//함수 생성자, 가장 마지막 매개변수는 함수의 로직 부분이다.
var addConstructor = new Function('x','y','return x + y');

//함수 선언문
function addStatement(x, y) {
  return x + y;
};

//함수 표현식
var addExpression = function(x, y) {
  return x + y;
};
```

- 함수는 네 가지 시나리오나 패턴을 사용해 호출할 수 있다.
  - 함수로서
  - 메소드로서
  - 생성자로서
  - apply() 혹은 call()을 사용해서
```javascript
//함수 패턴
var functionPattern = function(){return 'function pattern';};
console.log(functionPattern());

//메소드 패턴
var methodPattern = {myFunction: function(){return 'method pattern';}};
console.log(methodPattern.myFunction());

//생성자 패턴
var ConstructorPattern = function() {
  this.boolVal = true,
  this.numVal = 12,
  this.strVal = 'string',
  this.getString = function() {return this.strVal;}
}
var cPattern = new ConstructorPattern();
console.log(cPattern);

//apply()와 call() 패턴
var greet = {
  runGreet: function() {
    console.log(this.name,arguments[0],arguments[1]);
  }
}
var PersonCody = {name:'cody'};
var PersonLisa = {name:'lisa'};

//call()과 apply()를 이용해 this 값을 설정하여 함수를 호출한다.
greet.runGreet.call(PersonCody,': Hello,','lisa?');
greet.runGreet.apply(PersonLisa, [': Hello,', 'cody!']);
```


## 7. 익명 함수(anonymous function)
- 익명 함수란 이름이 없는 함수를 뜻한다. 익명 함수는 대부분 다른 함수의 매개변수로서 사용되는 경우가 많다.
```javascript
var sayHi = function(f) {
  f(); //익명 함수를 실행한다.
}

sayHi(function(){console.log('hi');}); //익명 함수가 매개변수로 전달된다.
```


## 8. 자기 호출 표현식
- 함수 표현식은 괄호 연산자를 사용하면 정의하자마자 곧장 실행할 수 있다. 이를 자기 호출 함수라고 한다.
```javascript
var sayWord = function() {console.log("Hello, world~");}(); //'Hello, world~'가 기록된다.
```

- 자기 호출 익명 함수(self-invoking anonymous function)도 만들 수 있다.
```javascript
(function(msg) {
  console.log(msg);
})('Hi');
 //or
(function(msg) {
  console.log(msg);
}('Hi'));
```


## 9. 고차함수(higher - order function)
- 고차함수란 함수를 인수로 받거나 반환하는 함수를 의미한다.
- 다른 값과 마찬가지로 함수도 함수에 전달할 수 있다.
```javascript
var foo = function(f) {return f;}

var bar = foo(function() {console.log('Hi');});
bar();
```


## 10. 함수 호이스팅(function hoisting)
- 함수 호이스팅이란 함수가 정의되기 전에 함수를 호출하는 것을 의미한다.
- 자바스크립트는 코드를 실행하기 전에 함수 선언문을 먼저 해석하고 먼저 실행 컨텍스트에 추가한다. 그래서 어디서 코드를 실행하든 이미 정의된 것처럼 동작할 수 있다.


## Q&A. 여러가지 의문들
1. 왜 함수는 이토록 다양한 방법으로 선언되고 다양한 방법으로 호출되는가?
  - 각각의 쓰임이 다르기 때문이다. 우선 __함수 생성자의 경우__ 문자열로 만들 수 있는 실행부가 가지는 이 점을 가지는 경우가 존재한다. 조건에 따라 함수 내부 코드 자체가 변해야하는 경우 `+`를 이용하여 다른 실행부를 만들 수 있기 때문이다. 리터럴 표기법 중 __함수 선언문의 경우__ 함수 호이스팅이 가능한 유일한 선언법이라는 점에서 필요성을 가진다. 반면 __함수 표현식의 경우__ 자기 호출 표현식이 가능하고 경우에 따라 함수가 아닌 다른 변수를 저장할 수 있도록 해주기에 필요성을 가진다.

2. 고차함수가 필요한 이유는 무엇인가?
  - 고차함수의 의의는 함수가 값으로써 전달 가능하다는데 있다. 함수가 값으로써 전달 가능하기에 특정 변수에 함수가 아닌 일반 원시값을 저장하는 형태의 코드가 작성 가능해진다. 이는 함수 표현식과 맞물려 생각할 수 있는 부분이다.

3. 자바스크립트에서는 왜 굳이 '함수 선언문'만을 먼저 해석하는 것인가? (호이스팅이 가능한 유일한 경우)
  - 우선 성능상의 문제 때문이다. 다른 경우를 모두 해석하게 되면 전체적인 성능 저하를 야기할 수 있다. 특히나 함수 표현식의 경우 해당 변수가 함수가 될지 그렇지 않을지를 알기 위해 해석 과정에서 함수를 판단해야하는데, 이 과정에서 성능 저하가 발생할 수 있다. 그리고 다른 경우와 달리 함수 선언문만이 온전하게 함수로써 무결하게 인식될 수 있다. 다른 경우는 해석의 여지가 다양해질 수 있기 때문에 함수 선언문만 미리 해석하는 것이 효과적이다.
