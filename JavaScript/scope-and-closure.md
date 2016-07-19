#scope and closure

## 1. 자바스크립트의 스코프(scope)
- 자바스크립트에서 스코프는 코드가 실행되는 컨텍스트이다.
- 스코프는 크게 전역(global), 지역(local, 혹은 함수), 그리고 eval 스코프로 나뉜다.
- **자바스크립트에는 블록 스코프가 없다.**

```
var foo = 1;

if (true) {
  console.log(foo); //'1'이 기록된다.
  foo = 2;
  console.log(foo); //'2'가 기록된다.

  for(var i = 3; i <= 5; i++) {
    foo = i;
    console.log(foo); //'3','4','5'가 순차적으로 기록된다.
  }
} //블록 스코프가 없기 때문에 프로그램이 진행됨에 따라 foo값이 변경된다.
```
- 자바스크립트에서는 var 키워드 없이 변수를 선언하면 지역 스코프가 아닌 전역 스코프에 변수가 추가된다.
```
var foo = function() {
  var boo = function() {
    var bar = 2;
  }();
}();

console.log(bar); //bar는 boo 함수 스코프 내에만 있으므로 에러가 발생한다.
```
- 따라서 함수 내에서 변수를 선언할 때는 항상 var를 사용해야 한다.


## 2. 스코프 체인(문법적 스코프)
- 자바스크립트는 변수를 찾을 때 스코프의 계층 구조에 기반한 검색 체인을 거슬러 올라가며 추적한다.
- 이때 스코프 체인에서 가장 가까운 스코프부터 검색하며, 값을 찾으면 상위 스코프에 같은 이름의 값이 있더라도 가장 먼저 찾은 값을 검색 결과로 인정한다.
```
var x = 10;
var foo = function() {
  var y = 20;
  var z = 20; //하위 스코프에 있는 z값에 의해 20은 검색 결과값으로 인정되지 않는다.
  var bar = function() {
    var z = 30;
    console.log(x + y + z); //스코프를 거슬러 올라 각 변수들을 찾고 그 합을 구하면 그 값이 60이 된다.
  }();
}();
```
- 스코프 체인은 함수를 실행한 위치가 아닌 정의한 위치에 의해 결정된다. 이를 가리켜 문법적 스코핑(lexical scoping)이라고 한다.


## 3. 클로저(closure)
- 스코프 체인은 함수를 호출하기 **전에** 이미 만들어진다. 덕분에 클로저를 만들 수 있다.
- 예를 들어, 다른 함수 내부에 정의되어 있다가 전역 스코프로 반환된 함수가 있다고 가정해 볼 때, 반환된 함수는 전역 스코프에 있더라도 스코프 체인을 통해 부모 함수(이미 종료된 함수)에 여전히 접근할 수 있다. => **클로저의 핵심 개념**
```
var parentFunction = function() {
  var foo = 'foo';
  return function() { //반환되는 익명 함수는 parentFunction 내부의 변수인 foo를 참조하고 있다.
    console.log(foo);
  }
}

var nestedFunction = parentFunction();

nestedFunction(); //parentFunction()에 의해 반환 받은 익명 함수에 의해서 이미 종료된 함수 내부의 변수, foo에 접근할 수 있다.
```

```
var countUpFromZero = function() {
  var count = 0;
  return function() {
    return ++count;
  };
}(); //바로 실행하고 익명 함수(동시에 자식 함수, 중첩 함수이기도 하다.)가 countUpFromZero에 반환된다.

console.log(countUpFromZero()); //1이 기록된다.
console.log(countUpFromZero()); //2가 기록된다.
console.log(countUpFromZero()); //3이 기록된다.
```
