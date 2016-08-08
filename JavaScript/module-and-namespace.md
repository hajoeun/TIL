#Module and Namespace, 모듈과 네임스페이스
_from JavaScript Definitive Guide Ch10_

## 1. 모듈과 네임스페이스 생성
- __아무 스크립트에나 사용될 수 있고 어떤 모듈과도 함께 사용될 수 있는 자바스크립트 모듈을 작성하기 위해선, *전역 변수를 정의하지 않아야 한다.*__
- 모듈의 변수가 다른 프로그램에 의해서 덮어쓰여지는 위험을 방지하기 위해서 _특별히 생성된 네임스페이스 안에_ 모듈에 필요한 메소드와 프로퍼티를 정의해야 한다. 
- 자바스크립트 자체는 네임스페이스를 지원하지 않지만, 객체를 이를 위한 용도로 활용할 수 있다.
```javascript
var Class = {}; // 단일 전역 변수

Class.define = function(data) { /* 코드는 여기에 */ }; // 네임스페이스 안에 존재하는 함수들
Class.provides = function(o, c) { /* 코드는 여기에 */ };
```

- 위의 예제에서 선언된 함수는 메서드가 아닌 일반적인 함수로 사용되기 위해 정의된 것이다.
- 자바스크립트의 모듈을 선언할 때 중요한 규칙은 _"모듈은 전역 네임스페이스에 절대로 두개 이상의 변수를 추가해서는 안 된다."_는 것이다. 오직 하나의 모듈에는 하나의 전역 네임스페이스만 존재할 수 있다.
    - _만약 모듈이 전역 네임스페이스에 변수를 추가한다면, 문서에 그 변수가 무엇인지 명확하게 기술되어야 한다._
    - _만약 모듈이 전역 네임스페이스에 변수를 추가한다면, 그 변수의 이름과 모듈이 작성되어 있는 파일 이름 간에 명확한 관계가 있어야 한다._

- 보다 안전한 방법으로 변수 간의 충돌(네임스페이스 충돌)을 막는 방법으로 디렉토리를 달리하는 방법이 있다. 자바의 관습을 따라 `joeun/Class.js` `goeun/Class.js`와 같이 다른 폴더에 같은 이름의 스크립트를 저장하여 충돌을 방지할 수 있다.
- 또 다른 자바의 관습은 _도메인 이름에 기반을 두고 네임스페이스를 생성하는 것_이다.
```javascript
// p.256 예 10-1 도메인 이름에 기반을 둔 네임스페이스 생성 
var com;
if (!com) com = {};
else if (typeof com != "object")
  throw new Error("com already exist and is not an object");

if (!com.rabbylab) com.rabbylab = {};
else if (typeof com.rabbylab != "object")
  throw new Error("com.rabbylab already exists and is not an object");

if (com.rabbylab.Class)
  throw new Error("com.rabbylab.Class already exists");

com.rabbylab.Class = {
  define: function(data) {/* Code here */},
  provides: function(o, c) {/* Code here */}
};
```

- 모듈 사용 가능성 검사
    - 외부 모듈에 의존하는 코드를 작성하는 경우 모듈의 네임스페이스를 검사해서 해당 모듈의 존재 여부를 확인 할 수 있다.
```javascript
var com; // 전역 변수의 존재 여부를 검사하기 전에 선언부터 한다.
if (!com || !com.rabbylab || !com.rabbylab.Class)
    throw new Error("com/rabbylab/Class.js has not been loaded");
```

- 모듈로 사용되는 클래스
```javascript
//  com/rabbylab/Complex.js: 복소수를 표현하기 위한 클래스
var com; // 사용 가능한 모듈인지 검사하는 작업을 거친다.
if (!com || !com.rabbylab || !com.rabbylab.Class)
  throw new Error("com/rabbylab/Class.js has not been loaded");

com.rabbylab.Complex = com.rabbylab.className.define({ // 검사가 완료된 이후 해당 네임스페이스 안에 Complex 클래스를 정의한다. 
  name: "Complex",
  construct: function(x,y) { this.x = x; this.y = y; },
  methods: {
    add: function(c) {
      return new com.rabbylab.Complex(this.x + c.x, this.y + c.y);
    }
  }
});
```

- 모듈 초기화 코드
    - 모듈은 나중에 정의될 함수들의 모음 이상의 일을 할 수 있다. 네임스페이스를 설정하고 할당하는 시점에 코드를 실행할 수 있다. 또한 함수나 클래스를 전혀 정의하지 않고 단지 어떤 코드를 실행시키는 모듈을 작성할 수 있다.
    - 이 모든 일을 감당하기 전에 지켜야할 하나의 규칙은 "전역 네임스페이스를 어지럽히면 안된다는 것"이다. 이를 위해 **즉시 실행 익명함수**를 이용하는 것이 최상의 방법이다. `(function() {/* 실행될 모듈(코드) */})();` *익명이라는 것은 전역 변수가 없음을 의미한다.*
    

## 2. 네임스페이스에서 변수 가져오기
- 외부 모듈에서 변수를 읽어들일 때 문제점은 그 이름이 너무 길어질 수 있다는 점이다. 이를 간단하게 재정의해서 사용할 수 있는 방법을 사용할 수 있다. `var Class = {}; Class.define = com.rabbylab.Class.define;` 이렇게 해주면 된다.
- 위와 같은 형태로 변수를 가져오는 것을 이해하기 위한 몇 가지 중요한 점이 있다.
    1. 함수나 객체 또는 배열을 참조하는 변수들만 가져올 수 있다.
        - 참조하지 않는 기본 타입을 가져온다면, 그 값은 정적인 사본으로만 존재하게 된다. (값에 대한 변화가 현재 네임스페이스에서만 발생한다.)
    2. 가져오기는 모듈 사용자를 위한 것이다. 모듈 개발자는 항상 완벽한 변수 이름을 사용해야 한다.
        - 모듈 사용자에게 혼란을 주지 않기 위해서 함수의 이름을 온전하게 기술해야 한다.
- public/private 변수: private인 변수에 접두사로 밑줄(_)을 사용한다. 예를 들어 `counter`라는 프로퍼티가 private이라면 `_counter`라고 정의해야 한다.
 