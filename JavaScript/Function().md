#Function()

## 1. Function() 객체 사용
- 함수는 괄호를 사용해 호출할 코드 문장들을 모아두는 곳이다.
- 함수를 실행할 때 괄호 안에 매개변수를 전달할 수 있어 함수 안의 문장에서 특정한 값에 접근하도록 만들 수 있다.
- 함수는 자바스크립트 코드가 실제로 실행되기 이전에 파싱 또는 컴파일 단계에서 정의된다.
- 기본적으로 함수란, 문장을 실행할 수 있는 고유한 스코프(scope)다.
- Function() 생성자는 매겨변수를 무한정 가질 수 있지만, **마지막 매개변수는 항상 함수의 몸체를 구성할 코드를 나타내는 문자열이어야 한다.**
```javascript
//new 키워드와 생성자를 이용한 방식
var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
console.log(addNumbersA(2,4));

//리터럴 방식, 이 방식이 더 많이 사용된다.
var addNumbersB = function(num1, num2) {return num1 + num2;}; //함수 표현식 (함수 리터럴)
function addNumbersC(num1, num2) {return num1 + num2;}; //함수 선언문 (함수 정의)
console.log(addNumbersB(2,5), addNumbersC(4,4));
```


## 2. Function() 속성과 메소드
- **속성**
  - prototype


## 3. Function 객체 인스턴스의 속성과 메소드
- **인스턴스 속성**
  - arguments 매개변수에 접근할 수 있는 유사 배열 (함수 내부용)
  - constructor
  - length 매개변수의 개수를 반환한다. (읽기 전용 / 함수 내외부 모두 사용 가능)
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


## 11. 예외 처리(exception handling)
- throw 문은 함수의 실행을 중단한다. 그리고 어떤 예외인지 알 수 있게 해주는 name 속성과 예외에 대해 설명하는 message 속성을 가진 객체를 반환해야한다.
- 이 반환 객체에 필요한 속성이 있을 경우 try 문을 활용할 수 있다. try 문은 모든 예외를 포착하는 하나의 catch 블록을 갖는다. 만약 예외 상황에 따라 그에 맞게 대처하고 싶은 경우, 예외 객체의 name 속성을 확인하여 그에 맞게 처리하면 된다.
```javascript
var add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
}

var try_it = function() {
  try {
    console.log(add(1,'hello')); //숫자값과 문자열을 매개변수로 전달한다.
  } catch (e) {
    console.log(e.name + ': ' + e.message); //'TypeError: add needs numbers'가 기록된다.
  }
}

try_it();
```


## 12. 모듈(module)
- 모듈은 내부의 상태나 구현 내용을 숨기고 인터페이스만 제공하는 함수 혹은 객체를 의미한다.
- 함수와 클로저를 사용해서 모듈을 만들 수 있다. 모듈을 만들기 위해서 함수를 사용하면 전역변수 사용을 거의 대부분 제거할 수 있다.
```javascript
Function.prototype.method = function (name, func) {
  if(!this.prototype[name]) { //같은 이름의 메소드가 없을 경우에만 추가하는 방어적인 방법
    this.prototype[name] = func;
    return this;
  } else {
    throw {
      name: "DuplicationError",
      message: "Method name is duplicated"
    };
  }
}

String.method('deentityify', function() {
  //entity table, 엔티티의 이름을 문자에 대응시킨다.
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  //deentityify 메소드를 반환한다.
  return function() {

    //실제 deentityify 메소드 부분
    //replace() 메소드의 매개변수가 동작하는 원리를 이해하면 알 수 있는 아래의 코드
    //function(a,b)에서 a는 정규표현식이 찾은 결과물을 의미하고, b는 정규표현식 내에서 괄호'()'로 묶인 부분에 해당하는 문자열을 의미한다.
    return this.replace(/&([^&;]+);/g,
      function (a,b) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  };
}());

console.log('&lt;&quot;&gt;'.deentityify()); // <"> 가 출력된다.
```


## 13. 연속 호출(cascade)
- 만약에 메소드들이 `undefined` 대신에 `this`를 반환한다면 연속 호출이 가능하다.
- 연속 호출을 사용하면 같은 객체에 대해 문장 하나로 연속되는 많은 메소드를 호출할 수 있다.
```javascript
function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi,'');
  var temp = str.split('').reverse().join(''); //이런 식으로 연속 호출이 가능하다.

  temp = temp.toLowerCase();
  str = str.toLowerCase();

  if(temp === str) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
```


## 14. 커링(curry) [참고](http://anster.tistory.com/144)
- 함수와 인수를 결합하여 새로운 함수를 만들 수 있게 하는 기법, 커링
```javascript
//자바스크립트에 없는 커링 메소드를 직접 정의하는 코드
Function.prototype.curry = function(){  
  var slice = Array.prototype.slice,
      args = slice.apply(arguments),
      that = this;
  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
};

//커링용으로 사용할 함수
var sum = function(a, b) {
  return a + b;
}

var sum12 = sum.curry(12); //'sum12'라는 커링된 함수를 만들어준다.
console.log(sum12(3)); //'15'가 기록된다.
```


## 15. 메모이제이션(memoization)
- 함수는 불필요한 작업을 피하기 위해서 이전에 연산한 결과를 저장하고 있는 객체를 사용할 수 있다.
- 피보나치 수열과 같은 연산에 메모이제이션을 활용하면 함수를 호출하는 회수를 현저하게 줄일 수 있다.
- (10까지의 연산 중에 함수 호출 회수 - 일반적 재귀함수: 453번 / 메모이제이션 활용 재귀함수: 29번)
```javascript
var fibonacci = function () { //클로저를 만들기 위한 함수
  var memo = [0, 1]; //연산의 결과를 저장하는 공간
  //실제 연산하는 함수
  var fib = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}( );

for (var i = 0; i <= 10; i++) {
  console.log(i + ': ' + fibonacci(i));
}
```

- 이러한 메모이제이션 작업은 메모이제이션 함수를 만들 수 있게 도와주는 함수를 만들어서 일반화할 수 있다.
```javascript
var memoizer = function (memo, fundamental) { //일반화하는 함수
  //'memo'는 저장할 배열을 의미하고, 'fundamental'은 메모이제이션을 수행할 함수를 의미한다.

  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

var fibonacci = memoizer([0,1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});

for (var i = 0; i <= 10; i++) {
  console.log(i + ': ' + fibonacci(i));
}
```


## 16. 객체의 속성을 매개변수로 사용하기
- 함수를 정의할 때 매개변수의 순서를 인지하기 어렵다. 이를 위해 객체의 속성을 매개변수로 사용하면 된다.
```javascript
function arraycopy (fromArray, fromStart, toArray, toStart, arrLength) {
    // 하나의 배열에서 다른 배열로 특정 길이만큼 복사하는 함수
}
function easycopy (args) {
    // 배열의 인자 값을 쉽게 호출하도록 돕는 함수
    arraycopy (args.from, args.fromStart || 0, args.to, args.toStart || 0, args.arrLength);
}

var a = [1,2,3,4];
var b = new Array(4);

easycopy({from:a, to:b, fromStart: 2, toStart: 1, arrLength: 2}); // 매개변수의 순서와 상관없이 호출이 가능하다
```


## 17. 호출 객체 (Activation Object) [???]
- 자바스크립트 인터프리터가 함수를 호출하는 과정에서 발생하는 일들
  1. 유효 범위를 함수가 정의될 당시의 효력을 지니는 유효 범위 체인으로 설정한다.
  2. 호출 객체로 알려진 새로운 객체를 생성하여 유효 범위 체인의 맨 앞에 추가한다.
  3. 이 호출 객체는 함수의 Arguments 객체를 가리키는 arguments 프로퍼티로 초기화된다.
  4. 함수의 이름이 붙은 매개변수들이 호출 객체에 추가되고, 함수 안에서 var 문장으로 선언된 모든 지역 변수가 역시 호출 객체 안에 정의된다.
  5. 이 호출 객체는 유효 범위 체인의 맨 앞에 있기 때문에 함수의 지역 변수, 매개변수들과 Arguments 객체는 모두 함수 내 유효 범위에 있게 된다.



## Q&A. 여러가지 의문들
#### 1. 왜 함수는 이토록 다양한 방법으로 선언되고 다양한 방법으로 호출되는가?
  - 각각의 쓰임이 다르기 때문이다. 우선 __함수 생성자의 경우__ 문자열로 만들 수 있는 실행부가 가지는 이 점을 가지는 경우가 존재한다. 조건에 따라 함수 내부 코드 자체가 변해야하는 경우 `+`를 이용하여 다른 실행부를 만들 수 있기 때문이다. 리터럴 표기법 중 __함수 선언문의 경우__ 함수 호이스팅이 가능한 유일한 선언법이라는 점에서 필요성을 가진다. 반면 __함수 표현식의 경우__ 자기 호출 표현식이 가능하고 경우에 따라 함수가 아닌 다른 변수를 저장할 수 있도록 해주기에 필요성을 가진다.

#### 2. 고차함수가 필요한 이유는 무엇인가?
  - 고차함수의 의의는 함수가 값으로써 전달 가능하다는데 있다. 함수가 값으로써 전달 가능하기에 특정 변수에 함수가 아닌 일반 원시값을 저장하는 형태의 코드가 작성 가능해진다. 이는 함수 표현식과 맞물려 생각할 수 있는 부분이다.

#### 3. 자바스크립트에서는 왜 굳이 '함수 선언문'만을 먼저 해석하는 것인가? (호이스팅이 가능한 유일한 경우)
  - 우선 성능상의 문제 때문이다. 다른 경우를 모두 해석하게 되면 전체적인 성능 저하를 야기할 수 있다. 특히나 함수 표현식의 경우 해당 변수가 함수가 될지 그렇지 않을지를 알기 위해 해석 과정에서 함수를 판단해야하는데, 이 과정에서 성능 저하가 발생할 수 있다. 그리고 다른 경우와 달리 함수 선언문만이 온전하게 함수로써 무결하게 인식될 수 있다. 다른 경우는 해석의 여지가 다양해질 수 있기 때문에 함수 선언문만 미리 해석하는 것이 효과적이다.

#### 4. 중첩 함수에서 전역 객체를 참조하는 this에 관한 혼란
  - [자바스크립트를 정의하는 3가지 방법](http://steadypost.net/post/lecture/id/13/)을 참고하다가 찾아온 혼란이다.
  - 아래의 예제를 통해서 _생성자 패턴으로 객체처럼 사용하는 함수의 경우(클래스 흉내내기)_ 중첩된 함수 속의 this가 어떻게 다른 값을 참조하는지 탐구해보았다.
  ```javascript
  function AppleDevice_1 (type) {
      this.type = type;
      this.color = "Silver";
      this.getInfo = function() { //메소드로서의 함수
          return this.color + '/ ' + this.type + '/ AppleDevice';
          //아직 실행되지 않은 상태이기 때문에 this는 어떤 컨텍스트도 참조하지 않은 상태
          //하지만 인스턴스로서 호출되면 메소드로서 사용되기 때문에 그 인스턴스 내부에 있는 값을 this값으로 참조한다.
      };
  }

  function AppleDevice_2 (type) {
      function info () { //함수로서의 함수
          return this.color + '/ ' + this.type + '/ AppleDevice';
      };
      this.getInfo = info();
      //함수를 실행 한 후 결과값을 반환, 이때 info() 함수는 "함수 내부에서 실행된 함수"이기 때문에 this는 전역 객체를 참조한다.
  }

  var type = "iPad 9.7";
  var color = "Champagne Gold";
  //브라우저에서 실행할 경우 window객체에 포함되는 변수

  var apple_1 = new AppleDevice_1('MacBookPro RetinaDisplay');
  var apple_2 = new AppleDevice_2();
  var apple_3 = {
    type: "iPhone SE",
    color: "Space Grey"
  };

  console.log(apple_1.getInfo()); //메소드로서의 getInfo(), 'Silver/ MacBookPro RetinaDisplay/ AppleDevice'를 기록한다.
  console.log(apple_2.getInfo); //값으로서의 getInfo, 'iPad 9.7/ Champagne Gold/ AppleDevice'를 기록한다. (브라우저에서 실행할 경우)
  console.log(apple_1.getInfo.call(apple_3)); //메소드로서의 getInfo(), 'Space Grey/ iPhone SE/ AppleDevice'를 기록한다.
  ```
  - **결론: 함수로서의 함수, 메소드로서의 함수를 구별할 수 있어야한다. (호출되는 시기를 유의할 것)**
