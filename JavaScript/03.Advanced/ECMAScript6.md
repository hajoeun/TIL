# ECMAScript 6 (ES6, ECMAScript 2015)
- 2015년 소개된 ECMAScript 6

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