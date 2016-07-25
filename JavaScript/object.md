#object(객체)
- 객체는 변형 가능한 속성들의 집합
- 객체는 이름과 값이 있는 속성들을 포함하는 컨테이너
- 객체는 데이터를 한 곳에 모으고 구조화 하는데 유용하다.
- 객체 하나는 다른 객체를 포함할 수 있기 때문에, 그래프나 트리 같은 자료구조를 쉽게 표현할 수 있다.
- 객체 하나에 있는 속성들을 다른 객체에 상속하게 해주는 '프로토타입(Prototype)'이라는 특성을 활용하면 객체를 초기화는 시간과 메모리 사용을 줄일 수 있다.


## 1. 객체 리터럴
- 새로운 객체를 생성할 때 사용하는 편리한 표기법
```javascript
var emptyObject = {};

var stooge = {
  "first-name": "Joeun",
  "second-name": "Rabby"
}
```


## 2. 속성값 읽기와 갱신
- 대괄호 표기법과 점 표기법
```javascript
stooge["first-name"] //"Joeun"
flight.departure.IAIA //"SYD"

stooge["second-name"] = "Ha";
```

- 존재하지 않는 속성의 경우 'undefined'가 반환된다. 그 위에 새로운 값을 갱신하면 새로운 속성을 만들어낸다.
- 기본값을 지정하기
```javascript
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
```


## 3. 참조
- 객체는 참조 방식으로 전달된다. 결코 복사되지 않는다.
```javascript
var a = b = c = stooge;
c["first-name"] = "Rabby";
console.log(a["first-name"]); // "Rabby"가 기록된다.
```


## 4. 프로토타입
- 모든 객체는 속성을 상속하는 프로토타입 객체에 연결돼 있다.
- 객체 리터럴로 생성되는 모든 객체는 자바스크립트의 표준 객체인 `Object.prototype`에 연결된다.
- 프로토타입 관계는 동적 관계이다. 만약 프로토타입에 새로운 속성이 추가되면, 해당 프로토타입을 근간으로 하는 객체들에는 즉각적으로 이 속성이 나타난다.


## 5. 삭제
- `delete` 키워드를 사용하면 객체의 속성을 삭제할 수 있다.
```javascript
delete stooge["first-name"];
```
