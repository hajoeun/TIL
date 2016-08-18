#자바스크립트의 함수형 언어 특징
_from Secrets of the JavaScript Ninja_

## 1. 함수형 언어의 특징이 왜 중요한가?
1. 자바스크립트에서 함수가 1종 객체(first-class object)라는 말은
    - 리터럴로 생성될 수 있고
    - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있고
    - 함수의 인자로 전달될 수 있고
    - 함수의 결과 값으로 반환될 수 있고
    - 동적으로 생성된 프로퍼티를 가질 수 있다는 것이다.
2. 브라우저의 이벤트 루프를 **비동기**적으로 호출할 수 있다. 여기서 말하는 이벤트란
    - 브라우저 이벤트(페이지 로드를 완료했을 때나 페이지가 언로드 될 때 발생하는 이벤트 등)
    - 네트워크 이벤트(Ajax 요청에 대한 응답 이벤트 등)
    - 사용자 이벤트(마우스 클릭, 마우스 움직임 또는 키 눌림 등)
    - 타이머 이벤트(시간 제한이 만료되거나 주기적으로 발생하는 이벤트 등)를 일컫는다.
    - 이러한 브라우저 이벤트 루프는 단일 스레드에서 동작한다. 이벤트 큐(FIFO 목록)에 들어오는 이벤트는 큐에 들어온 순서대로 처리된다.
3. 콜백(callback) 개념
    - 어떤 프로그램이 실행되는 동안 다른 함수가 적절한 시점에서 '다시 호출'된다는 점에서 생겨난 개념


## 2. 함수 선언
- 함수 내에서 선언된 타입의 유효 범위는 대부분의 다른 언어와 다르다.
    - 함수 내에 선언된 변수의 유효 범위는 변수가 선언된 지점으로부터 함수의 끝까지다. 블록 안에서 변수를 선언하더라도 그 변수는 변수를 선언한 지점부터 함수 끝부분까지 유효하다.
    - 이름이 지정된 내부 함수는 함수 내의 모든 곳에서 유효하다. 심지어는 함수를 선언한 부분 앞쪽에서 함수를 참조하더라도 이는 유효하다. ([함수 호이스팅](http://til.wiki.dev/JavaScript/Function()#function_10-함수-호이스팅-function-hoistinghttp://til.wiki.dev/JavaScript/Function()#function_10-함수-호이스팅-function-hoisting))
- 함수의 매개변수 목록의 길이와 실제 전달된 인자 목록의 길이는 서로 다를 수 있다.
    - 할당되지 않은 매개변수는 undefined로 평가된다.
    - 추가 인자들은 매개변수와 연결되지 않는다.
    
    
## 3. 함수 호출
- 함수를 호출하면 암묵적으로 두 개의 매개변수가 전달된다.
    - arguments, 실제로 전달된 인자의 컬렉션이다. ([참고](http://til.wiki.dev/JavaScript/Function()#function_5-this와-argumentshttp://til.wiki.dev/JavaScript/Function()#function_5-this와-arguments))
    - this, 함수 콘텍스트 객체를 참조한다. ([참고](http://til.wiki.dev/JavaScript/this-keywordhttp://til.wiki.dev/JavaScript/this-keyword))
- 함수를 호출하는 방식은 여러 가지이고, 각 호출 매커니즘에 따라 함수 콘텍스트 값이 결정된다. ([참고](http://til.wiki.dev/JavaScript/Function()#function_6-함수의-정의와-호출http://til.wiki.dev/JavaScript/Function()#function_6-함수의-정의와-호출))
    - 단지 '함수로서 호출'되면 함수의 콘텍스트는 전역 객체(window)이다.
    - '메서드로 호출'되면 콘텍스트는 그 메서드를 소유한 객체이다.
    - '생성자로 호출'되면 콘텍스트는 새로 생성된 객체이다.
    - apply()나 call() 메서드를 통해 호출되면 콘텍스트는 어떤 객체든 원하는 것으로 지정할 수 있다.

- 콜백의 함수 콘텍스트를 강제로 지정하기
    - 명령형 프로그래밍과 함수형 프로그래밍의 차이점은 함수를 단지  명령 구문으로만 취급하지 않고 프로그램 빌딩 블록으로 여기는 것에 있다.
    - 순회 함수는 '현재' 요소를 콜백 함수에 매개변수로 전달할 뿐이지만, 가장 중요한 점은 현재 요소를 콜백의 함수 콘텍스트로 지정한다는 것이다.
    - forEach 함수를 통해 배열의 각 요소에 대해 콜백 함수를 호출하게 할 수 있다.
```javascript
function forEach(list,callback) {
    for (var n = 0; n < list.length; n++) {
        callback.call(list[n],n);
    }
}

var weapons = ['shuriken','katana','nunchucks'];

forEach( weapons, function(index) {
    console.log("My weapon is " + weapons[index]);
});
```


## 4. 함수의 활용
- 인라인 함수의 이름은 해당 함수 내에서만 유효하다.
