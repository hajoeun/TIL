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


## String 오브젝트
1. `String.prototype.includes` 함수: 인자로 전달된 문자열이 포함되어 있는지 확인한다.
```javascript
let target = "123abc567";
target.includes('abc'); // true
target.includes('3a'); // true
target.includes('12', 4) // false
```

2. `String.prototype.startsWith` 함수: 인자로 전달된 문자열로 시작하는지 확인한다.
```javascript
let target = "123abc567";
target.startsWith('abc'); // false
target.startsWith('123'); // true
target.startsWith('abc', 3) // true
``` 

3. `String.prototype.endsWith` 함수: 인자로 전달된 문자열로 끝나는지 확인한다.
```javascript
let target = "123abc567";
target.endsWith('7'); // true
target.endsWith('567'); // true
target.endsWith('abc', 6) // true, 여섯글자까지 잘라서 그 끝을 확인
```

4. `String.prototype.repeat` 함수: 문자열을 복제한다.
```javascript
let target = "123";
target.repeat(3); // 123123123
target.repeat(0); // ""
target.repeat(2.7); // 123123
```


## Template 리터럴
1. 개요 
- 역따옴표(\`\`) 안에 작성한 문자열은 템플릿으로 처리된다. `${}`으로 감싸면 표현식을 사용할 수 있다.
```javascipt
console.log(`123abc`); 
// 123abc
console.log(`1line \n 2line`); 
/* 
1line
2line
*/
console.log(`1line
2line`);
/* 
1line
2line
*/

let one = 1, two = 2;
console.log(`1 + 2 = ${one + two}`); // 1 + 2 = 3
```

1. tagged Template: ``` tag `문자열 ${expression} 문자열` ```와 같은 형태로 템플릿 앞에 tag를 작성한 형태를 태그드 템플릿이라고 부른다.
```javascript
var tagFunc = function(str, val1, val2) { console.log(str, val1, val2) }
var one = 1, two = 2;

tagFunc `123 ${one + two} 456 ${one - two}`;
// ['123 ', ' 456'] 3 -1
```

2. `String.raw`: (태그드) 템플릿 표현식은 변환하고 특수 문자와 유니코드는 문자열 그대로 인식한다.
```javascript
var one = 1, two = 2;
console.log(`123 ${one + two} \n456 ${one - two}`);
/*
123 3
456 -1
*/
console.log(String.raw `123 ${one + two} \n456 ${one - two}`);
// 123 3 \n456 -1
```

3. `String.raw` 함수: `String.raw({raw: "문자열"}, any...)`의 형태로 사용하여 raw 값에 any를 하나씩 전개하여 조합한 문자열을 만들어준다.
```javascript
var one = 1, two = 2;
var res = String.raw({raw: "ABCDE"}, one, two, 3);
console.log(res);
// A1B2C3DE
```


## Array 오브젝트
1. `Array.from` 함수: 새로운 Array 오브젝트를 생성하고 이터레이터에서 반환된 값을 엘리먼트 값으로 설정하여 배열을 반환한다.
```javascript
var arr_like = {0: 'zero', 1: 'one', length: 2};
var arr = Array.from(arr_like); // 객체의 경우 반드시 Array-like 객체를 전달해야 한다!
console.log(arr); // ['zero', 'one']

var arr2 = Array.from('abc'); // 문자열과 같은 이터러블 객체도 바꿔준다.
console.log(arr2); // ['a', 'b', 'c']

var arr3 = Array.from(arr_like, function(v, k) {
    return v + k;
});
console.log(arr3); // ['zero0', 'one1']
```

2. `Array.of` 함수: 파라미터 값을 새로운 배열의 엘리먼트로 설정하여 반환한다.
```javascript
var arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

3. `Array.prototype.copyWithin` 함수: 인덱스 범위의 값을 복사하여 같은 배열의 지정한 위치에 설정한다.
- `[1, 2, 3, 4, 5].copyWithin(paste_start_idx, copy_start_idx, copy_end_idx)`
```javascript
var one = [1, 2, 3, 4, 5];
console.log(one.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
var two = [1, 2, 3, 4, 5];
console.log(two.copyWithin(0, 2, 4)); // [3, 4, 3, 4, 5]
var three = [1, 2, 3, 4, 5];
console.log(three.copyWithin(3)); // [1, 2, 3, 1, 2]

var arr_like = {0: 'ABC', 1: 'DEF', 2: '가나다', length: 3}
var four = Array.prototype.copyWithin.call(arr_like, 0, 1);
console.log(four); // ['DEF', '가나다', '가나다']
```

4. `Array.prototype.fill` 함수: 같은 배열에서 인덱스 범위의 값을 지정한 값으로 바꾸어 반환한다.
- `[1, 2, 3, 4, 5].fill(value, start_idx, end_idx)`
```javascript
var one = [1, 2, 3];
console.log(one.fill(7)); // [7, 7, 7]
var two = [1, 2, 3, 4, 5];
console.log(two.fill(7, 1)); // [1, 7, 7, 7, 7]
var three = [1, 2, 3, 4, 5];
console.log(three.fill(7, 1, 3)); // [1, 7, 7, 4, 5]
```

5. `Array.prototype.entries` 함수: 객체를 이터레이터 객체로 생성해서 반환한다.
```javascript
var values = [10, 20, 30];
var iterator = values.entries();
console.log(iterator.next()); // { value: Array[2], done: false }

for (var [key, value] of iterator){
    console.log(key, ':', value); 
    // 1 : 20 
    // 2 : 30 
}
```
