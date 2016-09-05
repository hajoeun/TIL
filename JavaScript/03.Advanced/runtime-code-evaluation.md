# 런타임 코드 평가
_Secrets of the JavaScript Ninja_


## 1. 코드 평가 매커니즘
문자열을 받고 그 문자열을 평가하여 실행 가능한 코드로 변환하는 몇 가지 방법들

#### a. eval() 메서드를 사용한 평가
  - 런타임에 코드를 평가하는 가장 일반적인 방법
  - eval() 메서드는 문자열 형태로 전달된 매개변수 코드를 평가한다.
  - eval() 메서드는 호출한 유효 범위 내에서 전달된 코드를 실행한다.
```javascript
var result = eval("5 + 5");
console.log(result); // 10이 기록된다.

result = eval("5 + 5; 4 + 4;")
console.log(result); // 8이 기록된다. 가장 마지막에 있는 표현식의 결과를 반환한다.

result = eval("{name: 'Joeun'}");
console.log(typeof result); // string이 기록된다. 객체로 선언하려고 했지만 실패했다.

result = eval("({name: 'Joeun'})");
console.log(typeof result); // object가 기록된다. 괄호가 있어야 정상적으로 객체가 선언된다.
```

#### b. Function 생성자를 사용한 평가
  - 함수가 생성자에 의해서 선언하면 코드 문자열을 사용할 수 있다. `var add = new Function("a", "b", "return a + b;")`와 같은 형태로 사용된다.
  - 함수가 생성자에 의해 선언될 경우, 함수 본문을 __런타임에__ 문자열로 전달하며 __어떤 클로저도 생성되지 않는다.__ 이는 클로저로 인한 오버헤드가 발생하는 것도 방지할 수 있다.

#### c. 타이머를 사용한 평가
  - __비동기적으로 평가를 하기 위해__ 타이머를 사용할 수 있다. setTimeout()이나 setInterval() 메서드는 함수나 함수 참조를 매개변수로 받는 것이 일반적이지만, 이들은 타이머 이벤트가 발생할 때 평가할 문자열을 받을 수도 있다.
```javascript
var tick = setTimeout('console.log("Hi")', 100);
```

#### d. 전역 유효 범위에서 평가하기
- 동적 <script> 블록과 globalEval() 메소드를 통한 유효 범위를 넘어서는 평가 방법이다.


## 2. 함수 "디컴파일"
- 디컴파일은 이미 평가된 자바스크립트 코드를 다시 문자열로 변환하는 과정을 의미한다.
- toString() 메서드가 함수를 문자열로 변환할 수 있다.
```javascript
function test(a, b) {
  return a + b;
}

var result = test.toString();
console.log(result); // 문자열로 변환된 함수가 기록된다.
```


## 3. 코드 평가의 활용
그래서 코드 평가가 왜 필요한건데?

#### a. JSON 변환
- 이미 대부분의 브라우저에서 parse()와 stringfy() 메서드를 가진 JSON 객체를 지원하기 때문에 JSON 변환 작업은 그리 어려운 것이 아니지만, JSON 객체를 지원하지 않는 오래된 브라우저에서는 다른 방법이 필요하다.
```javascript
var json = "{'name': 'Joeun'}"; // JSON을 정의한다.
var object = eval("(" + json + ")"); // 반드시 괄호로 둘러싸야 한다.

console.log(object.name); // 객체로 변환되어 name프로퍼티의 값인 Joeun이 기록된다.
```
- 무턱대고 JSON 파싱을 위해 eval() 메서드를 사용하는 것은 위험하다. 외부로부터 가져 온 JSON 데이터에 악의적인 코드가 포함되어 있을 수 있기 때문이다.
- 이를 미연에 방지하기 위해 JSON의 창시자인 더글라스 크락포드는 몇 가지 초기 구문 분석을 수행하는 것을 포함한 [스크립트](https://github.com/douglascrockford/JSON-js)를 이미 만들었다.

#### b. 네임스페이스에 속한 코드 가져오기
- 네임스페이스에 속해 있는 코드를 의도적으로 현재 콘텍스트로 가져오고 싶은 경우 런타임 코드 평가를 사용한다.
- [base2 라이브러리](http://base2.googlecode.com/svn/version/1.0.2/base2-p.js)가 제공하는 방법이 흥미롭다.

#### c. 자바스크립트 압축과 난독화
- 자바스크립트 코드를 클라이언트로 전송하기 위해서 어떻게든 전송 크기를 작게 유지하는게 좋다. 읽기 좋은 코드를 작성하고 이를 압축하는 것이 최선의 방법이다. 이러한 압축에 런타임 코드 평가가 사용된다.
- 코드 압축을 도와주는 자바스크립트 소프트웨어 중 유명한 것은 딘 에드워즈의 [Packer](http://dean.edwards.name/packer/)다.

#### d. 동적으로 코드를 다시 작성하기
- 디컴파일을 통해 컴파일된 코드를 문자열로 변환할 수 있고, 이를 새로 다듬어서 새로운 함수를 만들어낼 수 있다.
- 이 기법은 [Screw.Unit](https://github.com/nkallen/screw-unit) 단위 테스팅 라이브러리에서 사용하고 있다.

#### e. 관점지향 스크립트 태그
- AOP, 관점지향 프로그래밍(aspect-oriented programming)은 로깅, 캐싱, 보안 등과 같은 공통적인 관심사를 처리하기 위해 런타임에 코드를 주입하고 실행할 수 있는 기법이다. (메모이제이션이 그 예다!)
- 로그를 기록하기 위해 로그를 기록하는 코드를 일일이 작성하는 대신, AOP 엔진은 런타임에 로깅 코드를 추가한다.
- 자바스크립트에서 AOP의 개념을 사용하는 법
  - 기존 자바스크립트에 존재하지 않는 새로운 유형의 스크립트 타입을 만든다. `<script type=x/onload> 스크립트 코드 </script>` (여기서 'x'는 커스텀 타입임을 알리는 컨벤션이다.)
  - 이렇게 정의된 새로운 유형의 스크립트 타입은 브라우저가 웹 페이지를 로드하는 과정에서 무시해버린다.
  - 이후에 필요에 따라 해당 스크립트에 포함된 코드를 실행할 수 있다. 이때 런타임 코드 평가가 사용된다.
```html
<script>
  window.onload = function(){
    var scripts = document.getElementsByTagName("script"); // 스크립트 태그를 가지는 엘리먼트를 가져와 배열을 만든다.
    for (var i = 0; i < scripts.length; i++) {             // 순회하면서
      if (scripts[i].type == "x/onload") {                 // type 프로퍼티가 x/onload인 것을 찾는다.
        globalEval(scripts[i].innerHTML);                  // 전역 유효 범위에 있는 코드를 평가하기 위한 함수인 globalEval()을 사용해서 이를 평가한다. 이 함수는 별도로 구현된 것이다.
      }
    }
  };
</script>

<script type="x/onload">
  alert("Executed on page load");
</script>
```

#### f. 메타언어와 DSL
- 메타언어, 자바스크립트 코드 위에 다른 프로그래밍 언어를 구현하는 것
- 도메인 특화 언어(domain-specific language, DSL): Processing.js와 Objective-J가 있다.
