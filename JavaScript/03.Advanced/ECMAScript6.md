# ECMAScript 6 (ES6, ECMAScript 2015)
- 2015년 소개된 ECMAScript 6, a.k.a Harmony

## Class
1. 정의
- 사실 Class는 함수다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식과 class 선언 두가지 방법으로 선언할 수 있다.
    - 클래스 선언 **호이스팅 없음!**
     ```javascript
     class Polygon {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
     }
     ```
     
     - 클래스 표현식
     ```javascript
     var Polygon = class { // 이름 x
        constructor(height, width) {
                    this.height = height;
                    this.width = width;
        }
     }
     
     // 혹은
     
     var Polygon = class Polygon { // 이름 o
         constructor(height, width) {
                     this.height = height;
                     this.width = width;
         }
     }
     ```
     
2. Class Body & method 정의
- Class body 부분은 `{}` 중괄호로 묶인 부분이다. 이 안에 method나 constructor 같은 클래스 구성(class members)을 정의한다.
- `Constructor` 메소드는 class로 생성된 객체를 생성하고 초기화하기 위한 특수한 메소드이다. (클래스 안에 한개만 존재할 수 있다.)
- 메소드 정의하기
    ```javascript
    // 기존의 메소드 정의 방법
    var obj = {
        foo: function() {},
        bar: function() {}
    };
    
    // ES6 이후 정의 방법
    var obj = {
        foo() {},
        bar() {}
    };
    ```
    
3. `extends`를 통한 클래스 상속
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
```

4. `super`를 통한 상위 클래스 호출
```javascript
class Cat {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Lion Speak Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
    }
}
```


## 비구조화 할당(Destructuring Assignment) 구문
- 배열 또는 객체에서 데이터를 별개 변수로 추출할 수 있게 하는 자바스크립트 식
```javascript
var a, b, rest;

[a, b] = [1, 2];
console.log(a, b); // 1, 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // 3, 4, 5

{a, b} = {a: 'hello', b: 'world'} // 세미콜론 없어야 하거나
({a, b} = {a: 'hello', b: 'world'}); // 괄호로 묶어줘야 온전한 문장
console.log(a, b); // hello world
```

- 리터럴 식과 유사한 구문이지만 우변의 소스 변수에서 어떤 변수를 추출할지를 정의하는 값을 좌변에 할당한다.
```javascript
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y, z); // 1, 2
```

- 다양한 트릭들
```javascript
/* 기본값 지정 트릭 */
var a, b;

[a=5, b=7] = [1, undefined];
console.log(a, b); // 1, 7


/* 변수 교환하기 */
var a = 1;
var b = 4;

[a, b] = [b, a];
console.log(a, b); // 4, 1


/* 함수에서 반환된 배열 구문분석하기 */
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a, b); // 1, 2


/* 일부 반환값 무시하기 */
function f() {
  return [1, 2, 3];
}

var [a,  , c] = f();
console.log(a, c); // 1, 3


/* 함수 매개변수로 전달된 객체에서 필드 가져오기 */
function userId({id}) {
  return id;
}

var user = {
  id: "_marpple_42",
  name: "JE",
  age: 28
}

console.log(userId(user)); // _marpple_42
```


