#Advanced Techniques, 고급 테크닉
_from Professional JavaScript_

## 1. 고급 함수
#### 1-1. 안전한 타입 탐지
- 자바스크립트에 내장된 타입 감지 매커니즘은 그다지 완벽하지 않고 혼란스럽다. 예를 들어 `typeof` 연산자는 데이터 타입을 신뢰하기 어려운 경우가 잦다. `instanceof` 연산자도 마찬가지다.
- 무엇보다도 객체가 네이티브 객체인지 개발자가 정의한 객체인지 알기 어렵다. (특히 JSON이 표준으로 채택되는 과정에서 불거진 문제)
- 이를 해결하기 위해서 Object의 `toString()` 메소드를 이용할 수 있다. 이 메소드는 결과값으로 `[object <네이티브 생성자 이름>]`을 반환한다. `console.log(Object.prototype.toString.call([]))`의 경우 `[object Array]`가 기록된다.
- 이러한 성질을 이용해서 타입을 감지하는 함수를 정의할 수 있다.
```javascript
function isArray(value) { // 배열 타입 감지 함수
    return Object.prototype.toString.call(value) == "[object Array]";
}

function isFunction(value) { // 함수 타입 감지 함수
    return Object.prototype.toString.call(value) == "[object Function]";
}
```


#### 1-2. 스코프 확인 생성자
- 생성자를 정의하고 커스텀 객체를 정의할 때 new 연산자를 사용하지 않으면 생성자 내부의 this가 전역 객체를 가르키게 된다. 이는 this의 '늦은 바인딩' 때문인데, 이를 해결하기 위해 스코프 확인 생성자를 이용할 수 있다.
- 스코프 확인 생성자는 기본 커스텀 생성자에서 스코프를 확인하고 실행하는 생성자라고 생각하면 된다. 조건문과 `instanceof`를 이용해 this가 어디에 바인딩되어 있는지 확인하고 프로퍼티와 메소드를 할당한다. 잘못 바인딩 되었다면 new 연산자를 사용한 새로운 인스턴스를 반환한다.
```javascript
name = 'global object'; // 전역 객체에 선언된 변수

function Person(name, age, job) {
  if (this instanceof Person) {
    this.name = name;
    this.age = age;
    this.job = job;
  } else {
    return new Person(name, age, job);
  }
}

var person1 = Person("Joeun", 27, "Developer"); // 의도적으로 new 연산자를 생략하고 호출한다. 
console.log(name); // 'global object'이 기록된다. 전역 객체의 변수에는 영향을 주지 않았다.
console.log(person1.name); // 'Joeun'이 기록된다. 올바른 this에 바인딩 되었다.
```

- 스코프 확인 생성자를 사용하면 컨텍스트가 특정 생성자에 묶인다. 그래서 생성자 훔치기를 사용했을 때 상속이 끊어지는 일이 발생할 수 있다.
```javascript
function Person(name, age, job) {
  if (this instanceof arguments.callee) { // Human의 인스턴스임으로 false를 반환하고
    this.name = name;
    this.age = age;
    this.job = job;
  } else {
    return new Person(name, age, job); // 새로운 객체로 선언된다.
  }
}

function Human(race, country) {
  Person.call(this, "Joeun", 27, "Developer"); // 생성자 훔치기 발동!
  this.race = race;
  this.country = country;
  this.sayHello = function() {
    return "Hello, I am from " + this.country;
  }
}

var korean = new Human('Asian', 'South Korea');
console.log(korean.name); // undefined이 기록된다. 이런... 상속이 끊어졌다.
```

- 이때 프로토타입 체인을 써서 더 상위 타입으로부터 인스턴스를 확인하도록 유도하면 이런 문제를 방지할 수 있다.
```javascript
function Person(name, age, job) {
  if (this instanceof arguments.callee) { // true! 조상님(상위 타입, 프로토타입) 중에 한분이 Person이 계셔서 this의 인스턴스가 Person이 될 수도 있다!
    this.name = name;
    this.age = age;
    this.job = job;
  } else {
    return new Person(name, age, job);
  }
}

function Human(race, country) {
  Person.call(this, "Joeun", 27, "Developer");
  this.race = race;
  this.country = country;
  this.sayHello = function() {
    return "Hello, I am from " + this.country;
  }
}
Human.prototype = new Person(); // **바로 이렇게!! prototype을 Person의 인스턴스로 만들어줘버림!**

var korean = new Human('Asian', 'South Korea');
console.log(korean.name); // "Joeun"이 기록된다.
```


#### 1-3. 지연 로딩 함수
- 브라우저 사이의 차이를 해결하기 위해 자바스크립트 코드는 상당량의 if문을 사용해야 한다. 이는 다수의 분기를 야기시키고 성능의 저하를 초래한다.
- 특히나 브라우저의 기능을 확인하는 함수의 경우, 함수를 호출할 때마다 매번 if문을 수행하는 건 불필요한 일이다. 함수를 호출하는 사이에 브라우저의 상태(지원)가 바뀔리 없기 때문이다. 그럴때 사용하는 방법이 '지연 로딩'이다.
- 이를 구현하는데는 두가지 방법이 있는데, 첫번째는 함수를 처음 실행할 때 특정 기능을 지원한다는 것을 확인하면서 다음부터는 조건문을 실행하지 않도록 아예 함수 내의 조건문을 없앤 새로운 함수를 반환하는 방법이다. 두번째는 즉시 실행 함수를 이용해서 코드를 처음 불러올 때 바로 기능을 체크하고 원하는 형태로 함수를 반환하는 것이다.


#### 1-4. 함수 바인딩
- 특정한 this 값과 특정한 매개변수를 넘기면서 다른 함수를 호출하는 함수, 보통 콜백 및 이벤트 핸들러와 함께 사용해서 코드 실행 컨텍스트를 유지하면서 함수를 변수처럼 전달하는데 사용된다.
```javascript
// 바인드의 문법
function bind(fn, context) {
  return function() {
    return fn.apply(context, arguments); // 문맥을 바인드 시킨다.
  };
}
```
- ES5부터 네이티브 메소드로 도입되어 바로 사용할 수 있다. 
- 바인드된 함수는 함수를 여러번 호출해야 하므로 메모리도 많이 사용하고 다소 느린 함수임으로 자주 쓰진 않아야한다.


#### 1-5. 함수 커링
- '부분 함수 어플리케이션'이라고 불리기도 하는 커링은 매개변수 일부를 미리 지정한 함수를 사용하는 기법이다. 바인딩과 유사한 점은 클로저를 사용해 새 함수를 반환한다는 것이다. 미리 정해둔 매개변수를 사용한다는 점이 다르다.
```javascript
function curry(fn){
  var args = Array.prototype.slice.call(arguments, 1); // args는 [5]다. 
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments), // innerArgs는 3 이다.
        finalArgs = args.concat(innerArgs); // finalArgs는 5,3 이다.
    return fn.apply(null, finalArgs); // 5와 3을 매개변수로 하는 함수가 호출된다.
  };
}

function add(num1, num2) {
  return console.log(num1 + num2); // 5와 3을 매개변수로 받아서 결과값을 출력한다.
}

var curriedAdd = curry(add, 5); // 새로운 함수를 반환해서 curriedAdd라는 함수를 만들었다. 이 함수는 매개변수 중 하나로 5를 가지고 있다
curriedAdd(3); // 5 + 3의 결과값이 기록된다.
```



## 2. 쉽게 조작할 수 없는 객체
- 무엇이든 공유하는 자바스크립트의 속성으로 인해 객체의 수정이 자유로워 개발자의 실수로 코드가 덮어쓰여지곤 했다. 심지어 잘못된 방법으로 네이티브 객체까지도 수정되곤 했다.
- 이를 방지하기 위한, '쉽게 조작할 수 없는 객체'를 만들 수 있다.

#### 2-1. 확장 불가능한 객체
- 기본적으로 확장이 용이한 자바스크립트의 객체에 확장이 불가능하도록 만드는 방법이 있다.
- `Object.preventExtensions()` 메소드를 사용하면 된다.
```javascript
var person = {name: "Joeun"};
Object.preventExtensions(person);

person.age = 29;
console.log(person); // age가 추가되지 않는다.
```
- 확장은 불가능하지만 수정 및 삭제는 가능하다.
- `Object.isExtensible()` 메소드를 활용하면 확장 가능 여부를 확인할 수 있다.


#### 2-2. 봉인된 객체
- 확장 불가능한 것 이상으로 강직한 타입인 '봉인된 객체'도 존재한다. 확장은 물론 삭제도 불가능하다. ([[Configurable]] 속성이 false가 된다.)
- `Object.seal()` 메소드를 사용하면 된다.
```javascript
var person = {name: "Joeun"};
Object.seal(person);

person.age = 29;
console.log(person); // age가 추가되지 않았다.

delete person.name;
console.log(person); // name이 삭제되지 않았다.
```
- 수정만 가능하다. `Object.isSealed()` 메소드를 활용하면 봉인 여부를 확인할 수 있다.


#### 2-3. 동결된 객체
- 봉인 이상으로 엄격한 타입인 '동결된 객체'도 존재한다. 확장, 삭제는 물론 수정도 불가능하다. ([[Writable]] 속성이 false가 된다.)
- `Object.freeze()` 메소드를 사용하면 된다.
```javascript
var person = {name: "Joeun"};
Object.seal(person);

person.age = 29;
console.log(person); // age가 추가되지 않았다.

delete person.name;
console.log(person); // name이 삭제되지 않았다.
```
- `Object.isFrozen()` 메소드를 활용하면 동결 여부를 확인할 수 있다.
- 라이브러리를 만들 때 유용하게 사용하는 객체다.



## 3. 고급 타이머
- `setTimeout()`이나 `setInterval()`로 타이머를 생성하여 재미 있고 유용한 기능을 만들 수 있다.
- 자바스크립트의 타이머는 사실 스레드이며, 자바스크립트는 단일 스레드 환경에서 동작한다.
- 타이머는 단순히 코드를 나중에 실행하도록 미뤄두는 것이지만 다른 코드가 그 시각에 자바스크립트 프로세스를 독점하고 있을 수도 있기 때문에 정확히 그 시각에 실행된다고 보장할 수는 없다.
- 페이지를 내려 받으면서 실행을 시작한 코드, 이벤트 핸들러, Ajax 콜백 모두 같은 스레드에서 실행된다. 주어진 시각에 어느 코드를 실행할지 결정하는 것은 브라우저의 몫이다.
- 자바스크립트가 일종의 타임라인 위에서 작동한다고 생각하면 이해하기 쉽다. 페이지를 불러왔을 때 처음 실행되는 코드는 /<script/> 태그 안의 코드이다.
- 보통은 나중에 쓸 함수와 변수를 선언하는데 그치는데 가끔씩 데이터를 미리 처리할 때도 있다. 이 시점 이후 자바스크립트 프로세스는 더 실행할 코드를 기다린다.
- 프로세스가 사용 중이지 않을 때는 가장 앞에 예약된 코드가 즉시 실행된다.
- 주요 자바스크립트 실행 프로세스와는 별도로, 프로세스가 한가할 때 실행되도록 예약하는 큐가 존재한다. 페이지가 브라우저에 존재하는 동안 코드는 큐에 추가되고 그 순서대로 실행된다.
- 자바스크립트에서 즉시로 실행되는 코드는 존재하지 않는다. 모든 코드는 일단 큐에 추가되었다가 프로세스가 한가해질 때 실행된다.
- 타이머는 지정된 시간이 지난 후 큐에 코드를 삽입하는 방식으로 동작한다. 코드가 실행될 시점을 정하는게 아니라 큐에 추가될 시점을 정하는 것이다.
- 자바스크립트 프로세스는 한 덩어리의 코드를 실행하고 나면 잠시 여유를 두어서 다른 프로세스가 실행될 수 있게 한다. 이렇게 갭을 두어서 사용자 인터페이스가 멈추는 것을 방지한다. 

#### 3-1. 타이머 반복
- `setInterval()` 메소드를 사용해서 타이머를 만들면 주기적으로 타이머 코드를 큐에 추가할 수 있다. 
- 여기서 문제는 타이머 내부의 실행 코드가 끝나기도 전에 큐에 새로운 코드를 다시 추가할 가능성이 존재한다는 점이다. 이렇게 되면 갭이 사라지고 사용자 인터페이스가 정지된다.
- 다행히 자바스크립트 엔진은 이런 문제를 예방하도록 설계되어 있다. `setInterval()`으로 타이머에 의해 생성된 코드를 추가하려고 하면 타이머에 의해 생성된 다른 인스턴스가 큐에 존재하지 않을 때만 추가할 수 있다.
- 하지만 여기서도 두가지 단점이 있는데, 첫째는 실행되지 않는 구간이 생길 수 있다는 점이고 둘째는 타이머 코드 사이의 갭이 예상보다 작을 수 있다는 것이다.
- 이를 해결하는 방법은 `setTimeout()` 메소드를 재귀로 호출하는 것이다.
```javascript
setTimeout(function() {
  var div = document.getElementById("myDiv"),
      left = parseInt(div.style.left) + 5;
  div.style.left = left + "px"; // 픽셀을 계속 높이면서 이동

  if (left < 200) { // 좌표가 200픽셀인 지점까지 
    setTimeout(arguments.callee, 50);
  }
}, 50);
```
- 이와 같은 타이머 반복은 애니메이션 구현에 자주 사용된다.


#### 3-2. 프로세스 관리
- 브라우저 위에서 동작하는 자바스크립트의 가용 자원은 한정되어 있다. 때문에 '오래 실행되는 스크립트'는 사용이 제한된다.
- 오래 실행되는 스크립트는 보통 '너무 깊은 함수'이거나 '지나치게 많은 루프'가 존재하는 경우다.
- 데이터의 길이만큼 루프를 돌리는 코드의 경우 데이터의 길이가 예측 불가능한 경우 실행 시간이 오래 걸릴 우려가 있다.
- 이런 경우 두가지 조건을 보고 루프를 해체하면 좋다. (1) 프로세스를 동기적으로 처리해야 하는가? (2) 데이터를 순서대로 처리해야 하는가? 두가지 질문에 대한 답이 모두 '아니오'라면 타이머를 써서 루프를 해체하는게 좋다.
```javascript
// <배열 나누기 패턴>
function chunk(array, process, context){
  setTimeout(function() {
    var item = array.shift(); // 배열을 해야 할 일을 의미한다. 해야할 일을 item에 하나씩 넘긴다.
    process(item); // 해야 할 일을 수행한다. process는 console.log 다. 

    if(array.length > 0) { // 해야할 일이 하나라도 있다면 
      setTimeout(arguments.callee, 100); // 타이머를 두고 할 일을 한다.
    }
  }, 100);
}

var data = [12,123,134,2452,1234,1245,5,4,5674,3124,123,8768,231];
chunk(data, console.log); // data 값이 참조로 전달되고 shift에 하나씩 값이 빠져나간다.
// chunk(data.concat(), console.log) // 원래의 데이터를 유지하고 싶다면 선택할 수 있는 방법
```


#### 3-3. 함수 감속
- 일부 계산이나 프로세스는 다른 작업에 비해 매우 많은 비용을 요구한다. 예를 들어 DOM 조작(onresize)이 있는데 이런 계산을 반복적으로 요구하면 브라우저가 충돌할 수 있다. 이 문제는 타이머를 이용해서 함수를 '감속(throttling)'함으로 완화할 수 있다.
- 함수 감속은 코드가 쉼없이 반복 실행되지 않도록 막는다. 함수를 처름 호출할 때 타이머를 생성해서 일정한 시간 뒤에 코드를 실행한다. 함수를 두번째 호출하면 이전 타이머를 제거하고 다른 타이머를 생성한다.
- 이전 타이머가 이미 실행되었다면 연속으로 실행되지는 않고, 이전 타이머가 아직 실행되지 않았다면 새로운 타이머로 교체된다. **함수 실행 사이에 일정한 갭을 두는 것이 목표!**
- 코드를 주기적으로 실행해야 하지만 호출 자체를 제어할 수 없을 때는 감속 패턴을 사용해야 한다. (제어가 가능하면 '배열 나누기 패턴')
```javascript
// 자동으로 타이머를 설정/소거하는 함수
function throttle(method, context) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function() {
    method.call(context);
  }, 100);
}

function resizeDiv() {
  var div = document.getElementById("myDiv");
  div.style.height = div.offsetWidth + "px"; // offsetWidth를 계산하는 과정에서 브라우저를 느리게 만드는 연산이 발생
}

window.onresize = function() {
  throttle(resizeDiv); // 함수 감속으로 전체적인 성능 향상 
};
```



## 4. 커스텀 이벤트
- 자바스크립트와 브라우저의 상호작용은 주로 이벤트를 통해 이뤄진다. (이벤트는 옵저버(observer)라는 디자인 패턴의 일종이다.)
- 옵저버 패턴은 두가지 타입의 객체로 구성된다. 바로 이벤트가 일어났음을 알리는 주체(subject)와 이벤트를 주시하며 관찰하는 옵저버다.
- 주체는 옵저버에 대해서 알지 못한다. 옵저버는 주체에 대해 알고 주체의 이벤트에 콜백(이벤트 핸들러)을 등록한다.
```javascript
function EventTarget(){
  this.handlers = {};
}

EventTarget.prototype = {
  constructor: EventTarget,

  addHandler: function(type, handler) {
    if (typeof this.handlers[type] == "undefined") { // 만약에 type이 가지는 문자열로 된 프로퍼티가 없으면
      this.handlers[type] = []; // 그 프로퍼티를 배열 타입으로 하나 만들어둔다.
    }
    this.handlers[type].push(handler); // 그리고 그 프로퍼티에 특정 핸들러를 추가해준다.
  },

  fire: function(event) {
    if (!event.target) { // 만약에 이벤트의 타겟이라는 프로퍼티가 없다면
      event.target = this; // 타겟이라는 프로퍼티에 EventTarget을 넣어준다.
    }
    if (this.handlers[event.type] instanceof Array) { // 만약에 this.handlers에 event.type 즉 지금 상황에서는 'message'라는 프로퍼티가 배열의 인스턴스이면
      var handlers = this.handlers[event.type]; // handlers라는 새로운 변수에 this.handlers의 message 프로퍼티를 넣어준다.
      for (var i=0, len=handlers.length; i < len; i++) { // handlers를 순회하면서 event를 실행한다.
        handlers[i](event);
      }
    }
  },

  removeHandler: function(type, handler) {
    if (this.handlers[type] instanceof Array) { // message라는 프로퍼티가 배열이면
      var handlers = this.handlers[type]; // 그 녀석을 handlers 라는 변수에 넣어주고
      for (var i = 0, len=handlers.length; i < len; i++) {
        if (handlers[i] === handler) { // handlers 를 순회하면서 일치하는 녀석을 찾아서
          break;
        }
      }

      handlers.splice(i, 1); // 제거한다.
    }
  }
};


function handleMessage(event) {
  console.log("Message received: " + event.message);
}

var target = new EventTarget();

target.addHandler("message", handleMessage); // 이벤트를 추가한다.
target.fire({type: "message", message: "Hello world!"}); // 이벤트를 실행한다.
target.removeHandler("message", handleMessage); // 이벤트를 제거한다.
target.fire({type: "message", message: "Hello world!"}); // 제거된 이후라서 이벤트가 동작하지 않는다.
```



## 5. 드래그 앤 드롭
- [예제를 테스트 해보는 것으로 대체]
#### 5-1. 드래그 기능 수정 
#### 5-2. 커스텀 이벤트 추가
