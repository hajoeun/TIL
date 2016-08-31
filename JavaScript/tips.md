#tips

## 1. 원시값 & 복합 객체
- 원시/리터럴 값은 속성에 접근할 때 객체로 변환된다.
    - 원시값의 속성에 접근하려 하면 자바스크립트는 원시값과 관련 있는 생성자를 사용해 래퍼(wrapper) 객체를 만들어 해당 객체의 속성과 메소드를 사용하도록 한다. 그리고 속성에 접근한 후에는 만들었던 래퍼 객체를 버리고 다시 본래 원시값으로 되돌려 놓는다.
- 원시값은 값 자체로 저장/복사되고 복합 객체는 참조를 저장/복사한다.
    - _단,`String()`, `Number()`, `Boolean()` 값은 new 키워드에 의해 만들어지는 복합 객체라고 할지라도 원시값처럼 값으로 저장된다._  
- 원시값은 값 자체를 비교하고 복합 객체(합성 객체, 참조 자료형)는 참조를 비교한다.
    - 비교구문을 사용할 때, 원시값은 값 자체가 같은지를 비교하고 복합 객체는 참조하고 있는 대상이 같은지를 비교하게 된다.


## 2. 평소에는 원시 문자열, 숫자, 불리언값을 사용하라.
- 문자열, 숫자, 불리언값을 표현하는 리터럴/원시값은 더 빠르게 코딩할 수 있고 보기에도 더 간결하다.
- 뿐만아니라 typeof 연산자의 정확성이 달라질 수도 있다.


## 3. 'null' vs 'undefined'
- null은 객체 속성이 아무런 값도 가지고 있지 않음을 명시적으로 나타낼 때 **개발자가 사용하는 값** 이다.
- undefined는 무언가 결여되어 있음을 알려줄 때 **자바스크립트가 사용하는 값** 이다.
- 이 둘을 구분하기 위해서 반드시 `===`를 사용해야 한다.


## 4. 본래의 뜻
- `NaN`은 "Not a Number(숫자가 아님)"를 의미한다.
- `var`은 "Variables"를 의미한다.


## 5. Trick - 효과적인 배열 탐색 반복문(loop statements)
- 일반적인 배열의 탐색은 length 속성을 이용하여 반복문의 종료 조건을 설정한다. 하지만 이같은 방법은 루프를 반복할 때마다 length 속성을 찾아보게되므로 약간 비효율적이다.
- 배열에서 정의되지 않은 구간에서 'undefined'값을 가지는 것을 응용하여 효과적인 배열 탐색이 가능하다.
```javascript
var a = ['1','2','3','4'];

//a[i]의 값이 undefined이 되면 false로 변환되면서 반복문을 종료한다.
for (var i = 0, item; item = a[i]; i++) {
  console.log(item); //'1','2','3','4'를 기록한다.
}
```

- 또다른 방법은 `for in`구문을 사용하는 것이다.
```javascript
for (var i in a) {
  console.log(a[i]); //'1','2','3','4'를 기록한다.
}
```


## 6. Trick - push()의 대안
- Array 객체 인스턴스의 length 속성은 항상 가장 큰 인덱스의 하나 더 큰 값을 가진다. 때문에 length 값은 인덱스로서 배열의 끝을 가리키는 값이 된다. 이 특징을 응용해 push() 메소드와 같은 역할을 하도록 할 수 있다.
```javascript
a[a.length] = '5'; //배열 끝의 빈 공간에 '5'를 할당한다.
```


## 7. 자바스크립트의 모든 객체는 싱글톤(singleton)이다.
- 자바와 같이 클래스가 있는 언어에서는 언제나 하나의 클래스 인스턴스만을 가질 수 있는 객체를 '싱글톤'이라고 부른다. 싱글톤은 동일한 클래스의 객체를 하나 이외에 생성할 수 없다.
- 당초 자바스크립트는 클래스의 개념이 없다. 때문에 자바스크립트의 모든 객체는 싱글톤이다. 모든 객체가 싱글톤이기 때문에 클래스가 없기도 하다.
- 결국 자바스크립트에서 클래스와 같은 역할을 할 수 있는건 [함수로 정의하는 방법](http://steadypost.net/post/lecture/id/13/) 뿐이다.


## 8. Trick - 기본 타입에 기능 추가
- `method`라는 메소드를 prototype에 정의해서 메소드를 추가할 때 보다 단순한 코드로 추가가 가능하도록 한다.
```javascript
//단순한 코드로 함수를 추가하기 위한 메소드 만들기
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

//숫자형에서 정수 부분만 추출하는 메소드 추가
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this); //값에 따라 Math.ceil(this) 혹은 Math.floor(this) 함수가 반환된다.
});
console.log((-10/3).integer()); //'-3'이 기록된다.


//문자열 양 끝에 있는 빈 칸을 지우는 메소드 추가
String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});
console.log("    neat    ".trim()); //'neat'가 기록된다.
```


## 9. Trick - 재귀 함수를 활용한 DOM 트리 구조 다루기 [???]
- 자기 자신을 호출하는 재귀 함수의 특징을 응용하면 트리 구조를 효과적으로 다룰 수 있다.
```javascript
var walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while(node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

var getElementsByAttribute = function (att, value) {
  var results = [];

  walk_the_DOM(document.body, function (node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });

  return results;
};
```


## 10. Trick - arguments를 Array로 바꾸기
- 원래 arguments는 배열이 아닌 객체로 인식된다. 하지만 slice.apply()를 이용해서 배열로 바꿔줄 수 있다.
```javascript
var args = Array.prototype.slice.apply(arguments);
```


## 11. 대소문자 구분
- 자바스크립트는 대소문자를 구문하는 언어다. 반면 HTML은 대소문자를 구별하지 않는다.
- 많은 수의 자바스크립트 객체와 속성이 HTML의 태그나 어트리뷰트와 이름이 동일하다. 혼란을 줄 수 있는 부분이지만 자바스크립트에서는 이러한 객체 및 속성들을 대부분을 소문자로 사용해야한다. (onClick(HTML에선 가능) -> onclick(자바스크립트에선 소문자만 가능))


## 12. 숫자를 문자열로 변환하기
- 단지 빈 문자열을 숫자에 더하기만 하면 된다. `var n_as_string = 100 + "";`
- 혹은 명시적으로 표현하기 위해 `String()`함수를 사용한다. `var string_value = String(100);`
- 혹은 `toString()`메소드를 사용한다. `var string_value = number.toString();`


## 13. 문자열을 숫자로 변환하기
- 단지 문자열에서 0을 빼면 된다. (더하면 문자열 이어붙이기가 된다.) `var number = string_value - 0;`
- 혹은 명시적으로 표현하기 위해 `Number()`함수를 사용한다. `var number = Number(string_value);`
- 혹은 더 융통성 있는 방법으로 `parseInt()`, `parseFloat()`를 사용하는 방법이 있다.
```javascript
parseInt("3 blind mice"); //3을 반환한다.
parseFloat("3.14 meters"); //3.14를 반환한다.
parseInt("12.13"); //12를 반환한다.
parseFloat("0xff"); //255를 반환한다. 문자열이 '0x'로 시작하면 문자열을 16진수로 인식한다.
parseInt("eleven"); //NaN을 반환한다. //문자열을 숫자로 변환하지 못하는 경우
```


## 14. 람다 함수(lambda function)
- 이름 없는 함수를 프로그램 내에 리터럴 형태로 포함시킬 수 있게 한 최초의 언어인 Lisp 프로그램 언어를 기리는 의미에서 함수 표현식(함수 리터럴)로 정의된 함수를 '람다 함수'라고 부른다.
```javascript
var addNumbers = function(num1, num2) {return num1 + num2;}; //함수 표현식 (함수 리터럴)
```


## 15. Date 객체
- `Date()` 생성자로 날짜를 생성할 때, 달을 나타내는 값은 0을 기반으로 한다. 즉 0은 1월이다.
```javascript
var xmas = new Date(2014, 11, 25); // 11은 12월을 의미한다.
//'Thu Dec 25 2014 00:00:00 GMT+0900 (KST)'을 반환한다.
```


## 16. 기본 타입(by value)과 참조 타입(by reference)
- 숫자와 불리언은 기본 타입이다. 이들은 정해진 개수의 작은 바이트로 구성되어 있어서 자바스크립트 인터프리터(해석기)가 저수준 오퍼레이션(적은 활동)을 통해 손쉽게 조작할 수 있기 때문이다.
- 객체(배열, 함수 포함)는 참조 타입이다. 이들은 임의 개수의 프로퍼티나 원소를 포함할 수 있으므로, 크기가 고정된 기본 타입을 조작하듯 쉽게 조작할 수는 없다. 이들을 값에 의해 조작하면 복사나 비교작업에 메모리를 비효율적으로 많이 사용해야 하기 때문이다.
- 문자열도 기본 타입으로 취급되는데, 사실 정확하게 어떤 타입이라고 정의할 순 없다. 기본 타입으로 다루면 비효율적이다. 때문에 참조 타입의 형태로 구현되었다고 가정하는것이 적절하다. 하지만 사실 문자열은 복사나 전달에 의해서 문자열을 변경할 수 없기 때문에 그런 가정은 무의미하다. 문자열은 불변(immutable)한다. '문자열은 기본 타입처럼 작동하는 불변의 참조 타입' 혹은 '문자열은 참조 타입의 효율성을 갖도록 내부적으로 구현된 기본 타입'으로 생각해도 좋다.

```javascript
//참조에 의한 전달을 보여주는 예제
function add_to_totals(totals, x) {
  totals[0] = totals[0] + x;
  totals[1] = totals[1] + x;
  totals[2] = totals[2] + x; //참조한 배열의 내부 값을 직접 변경하고 있다. 외부 배열에 영향을 미친다.
}
function add_to_totals2(totals, x) {
  var inner_arr = new Array(3);
  inner_arr[0] = totals[0] + x;
  inner_arr[1] = totals[1] + x;
  inner_arr[2] = totals[2] + x;
  totals = inner_arr; //totals는 참조 값인데 외부에서 참조한 배열을 변경하려면 참조한 배열의 값을 직접 변경해야한다. 참조하는 대상을 변경하는 것은 외부에 영향을 주지 않는다.
  totals[0] = 0; //이 문장에 의해 inner_arr[0] 값이 0으로 변경된다. 위 문장에 의해 참조 대상이 외부 배열(arr_2)에서 내부 배열(inner_arr)로 변경되었기 때문이다.
  console.log(inner_arr); //[0,3,4]가 기록된다.
}

var arr_1 = new Array(1,2,3);
var arr_2 = new Array(1,2,3);

add_to_totals(arr_1, 1);
add_to_totals2(arr_2, 1);

console.log(arr_1);//[2,3,4]가 기록된다.
console.log(arr_2); //[1,2,3]이 기록된다.
```


- [표] 자바스크립트에서 데이터 타입들이 조작되는 방식

| 타입 | 복사 | 전달 | 비교 |
| :--- | :--- | :--- | :--- |
| 숫자 | 값 | 값 | 값 |
| 불리언 | 값 | 값 | 값 |
| 문자열 | 불변 | 불변 | 값 |
| 객체 | 참조 | 참조 | 참조 |


## 17. 연산자의 연산 순서
- `+` 연산자는 왼쪽에서 오른쪽으로 연산한다.
```javascript
console.log(1 + 2 + " blind mice"); // "3 blind mice"
console.log("blind mice " + 1 + 2); // "blind mice 12"
```


## 18. 프로퍼티(속성) 존재 확인하기
- `in` 연산자를 사용하면 프로퍼티의 존재 여부를 확인할 수 있다.
```javascript
if ( "x" in my_object) console.log(my_object.x);
if (my_object.x !== undefined) console.log(my_object.x); //두 문장은 같은 역할을 한다.
```

- `hasOwnProperty()`와 조합해서 사용하면 프로토타입에 존재하는 프로퍼티인지 확인할 수 있다.
```javascript
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}
```


## 19. 함수 리터럴에서 함수 이름을 정하는 이유
- 일반적으로 함수 리터럴에서는 익명 함수를 변수에 할당한다. `var add = function(a, b) {return a + b;};`
- 하지만 이때 함수의 이름을 정해줄 수도 있다. `var add = function sum(a, b) {return a + b;};`
- __이것은 _재귀 함수_를 구현할 때 유용하다.__ `var fib = function f(x) {if (x <= 1) return 1; else return x * f(x-1);};`


## 20. 함수의 이름을 정하는 팁
  1. 함수의 이름은 일반적으로 동사 혹은 동사로 시작하는 구절이다.
  2. 관습적으로 함수의 이름은 소문자로 시작한다.
  3. 함수의 이름이 둘 이상의 단어를 포함할 땐 `like_this()`처럼 밑줄 문자를 사용하거나 `likeThis()`처럼 두번째 단어를 대문자로 시작한다.
    - 내부적인 변수이거나 숨겨진 함수로 사용하려면 밑줄 문자를 사용한다.


## 21. DRY Principle
- "Don't Repeat Yourself." 코드를 반복하지 말라는 뜻이다. 객체지향, 상속의 개념을 활용해야 함을 뜻한다.


## 22. switch문을 활용하자
- 복잡한 if-else문 보다 switch문이 더 빠를 수 있다. 가능성이 높은 순서대로 case를 배치하는게 더 빠르다.


## 23. Duff's device
_from Speed Up Your Site_
- 루프가 필요한 코드를 빠르게, 루프 해체
```javascript
var iterations = Math.floor(values.length / 8);
var leftover = values.length % 8;
var i = 0;

if (leftover > 0) {
    do {
        process(values[i++]);
    } while (--leftover > 0);
}

do {
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
} while (--iterations > 0);
```


## 24. 배열 `length` 속성의 특징들
- 배열에 정수가 아닌 속성을 추가하면 length는 변하지 않는다.
- 배열의 length 속성은 특수한 성질을 가지고 있기 때문에 정수형으로 받는 속성만 길이로 인식한다.
```javascript
var numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.length); // '9' 가 기록된다.

numbers.data = function(){
    console.log("Hello!");
};

console.log(numbers.length); // '9' 가 기록된다.
```

- `Object.create` 메소드에 배열을 인자로 받아 만들어진 객체는 배열의 값과 메소드를 상속 받지만 length 속성은 갖지 못한다.
 
 
## 25. 다차원 배열 만드는 함수
_from JavaScript Good Part_
```javascript
 Array.matrix = function (m,n,init) {
     var a, i, j, mat = [];
     for (i = 0; i < m; i += 1) {
         a = [];
         for (j = 0; j < n; j += 1) {
             a[j] = init;
         }
         mat[i] = a;
     }
     return mat;
 };
 
 var myMatrix = Array.matrix(4, 4, 0);
 
 console.log(myMatrix);
 
 Array.identity = function (n) {
     var i, mat = Array.matrix(n, n, 0);
     for (i = 0; i < n; i += 1) {
         mat[i][i] = 1;
     }
     return mat;
 };

 myMatrix = Array.identity(4);

 console.log(myMatrix);
 ```


## 26. apply(), call()의 의미
- **이렇게 호출하면 첫번째 매개변수에 해당하는 객체가 호출에 사용되는 함수를 메소드로 가지는 것과 같은 효과를 낼 수 있다.**


## 27. !! 구문
- !! 구문은 자바스크립트 표현식을 Boolean 객체로 만드는 간단한 방법이다. `!!"String"`은 true가 되고 `!!0`은 false가 된다.


## 28. constructor 프로퍼티 참조를 사용하여 새 객체 인스턴스 만들기
_from Secrets of the JavaScript Ninja_
- 원본 생성자 함수에 직접 접근하지 않고도 같은 생성자를 가지는 새 객체 인스턴스를 만들 수 있다.
- 이 방법은 심지어 원본 생성자 함수가 더 이상 유효 범위에 있지 않더라도 사용할 수 있다.
```javascript
function Ninja(){}
var ninja = new Ninja();
var ninja2 = new ninja.constructor();  
```


## 29. HTML DOM 프로토타입
- 현대적인 대부분의 브라우저에서 모든 DOM 엘리먼트가 HTMLElement 생성자를 상속한다.
- 따라서 HTMLElement 프로토타입에 접근할 수 있고, 따라서 어떤 HTML 노드든 확장할 수 있다.
```javascript
HTMLElement.prototype.remove = function() {     //프로토타입에 새로운 메서드를 추가한다.
  if (this.parentNode)
    this.parentNode.removeChild(this);
};

var a = document.getElementById("a");            
a.parentNode.removeChild(a);                     //기존의 방법대로 엘리먼트를 제거한다.

document.getElementById("b").remove();           //프로토타입에 새로 추가한 메서드로 엘리먼트를 제거한다. (보다 간편하다.)
```
- 하지만 `var elem = new HTMLElement();` 이런식으로 HTML 엘리먼트의 인스턴스를 직접 생성할 수는 없다.
- 더군다나 이와 같이 HTML DOM의 프로토타입을 수정하는 건 예기치 못한 조작 오류를 범하기 쉬워서 좋은 접근법은 아니다.


## 30. 네이티브 객체 프로토타입 확장
- 네이티브 객체도 프로토타입을 사용하면 확장이 가능하다.
- 다만, `Object()` 객체는 프로토타입 체인의 가장 끝에 위치하기 때문에 다른 객체에 예상치 못한 영향을 미칠 수 있다. 반드시 `Object()` 객체에 새로운 프로퍼티나 메서드를 추가하기 원한다면 `hasOwnProperty()` 메서드를 활용해서 문제를 근원부터 차단해야 한다.
- 그리고 `Number()` 객체의 확장에도 주의를 기울여야 한다. 확장된 메서드(혹은 프로퍼티)에 리터럴 타입으로 접근하려고 하면 에러가 발생한다. `5.add(3)`는 문법 에러가 발생한다. `(5).add(3) == 8`는 괜찮다.


##  31. 속성과 프로퍼티, 차이점
- 속성은 HTML에서 엘리먼트들이 가지는 속성을 의미한다. href, id, src 등이 바로 속성이다. `<a href="http://www.naver.com/"></a>`
- 프로퍼티는 자바스크립트에서 HTML의 엘리먼트를 변수로 가져와서 엘리먼트의 속성에 접근하기 위해 점 연산자 표기법으로 접근하는 것을 의미한다. `var element = document.getElementById("test"); element.src;`
- 일반적으로는 속성과 프로퍼티의 이름이 같지만, 다른 경우도 존재한다. 예약어인 경우 혹은 대소문자 구분을 위한 경우(HTML은 대소문자를 구분하지 않지만 자바스크립트는 다르다.)이다.

| 속성 이름 | 프로퍼티 이름 |
| :--- | :--- |
| for | htmlFor |
| class | className |
| readonly | readOnly |
| maxlength | maxLength |
| cellspacing | cellSpacing |
| rowspan | rowSpan |
| colspan | colSpan |
| tabindex | tabIndex |
| cellpadding | cellPadding |
| usemap | useMap |
| frameborder | frameBorder |
| contenteditable | contentEditable |
| float | cssFloat |

- 엘리먼트가 가진 모든 속성이 프로퍼티로 표현되지는 않는다. 태생적으로 HTML DOM에 정의된 속성은 프로퍼티로도 표현되지만, 사용자의 의해 임의로 지정한 사용자 정의 속성은 프로퍼티로 자동으로 표현되지 않는다.
- 사용자 정의 속성 값에 접근하기 위해선 setAttribute()와 getAttribute()를 사용하면 된다. 이렇게 응용할 수 있다. `var value = element.someValue ? element.someValue : element.getAttribute('someValue');`
- 일반적으로는 프로퍼티 접근이 DOM 속성 메서드를 사용하는 것보다 빠르다.


## 32. XML과 HTML의 차이점
- HTML DOM의 특성은 어떤 속성에 대해 그 속성과 같은 이름을 가진 프로퍼티가 자동으로 생성되어 있다는 점이다. 이와 반대로 XML DOM에서는 어떤 프로퍼티도 자동으로 엘리먼트에 생성되지 않는다.
- 특정 엘리먼트가 XML 엘리먼트인지 아닌지를 판단하기 위해 아래와 같은 형식 검사를 할 수 있다.
```javascript
function isXML(elem) {
  return (elem.ownerDocument ||
          elem.documentElement.nodeName.toLowerCase() !== "html");
} // 해당 함수는 주어진 엘리먼트가 XML 엘리먼트라면 참을 반환한다.
```


## 33. URL 정규화
- 최신 브라우저에서는 URL을 나타내는 프로퍼티(href, src 또는 action)의 값을 읽으면, 원래 지정한 속성과 일치하는 값이 아닌 표준 형식의 URL로 자동으로 변경된 값을 얻는다. 이것이 자동 정규화라는 기능이다.
- 자동 정규화되지 않은 값을 얻기 위해선 프로퍼티로 접근하지 않고 속성으로 접근해야 한다. `element.getAttribute('href')`


## 34. style 속성과 프로퍼티
- 엘리먼트의 스타일과 관련한 정보를 얻으려면 `element.style.color`와 같은 식으로 프로퍼티로 접근이 가능하다. __인라인 스타일만 가능하다!__
- 스타일 프로퍼티에 의해 정의된 스타일 값은 어떤 규칙보다 우선해서 적용된다.
- window 객체의 getComputedStyle() 메서드를 사용하면 이미 평가된 스타일(css 파일이나 style 태그 안에 정의된 스타일)을 읽어들일 수 있다. `window.getComputedStyle(element)` 스타일을 정의하는 객체가 반환된다.


## 35. Trick - 깔끔하게 줄 맞추기
- [자바스크립트 핵심 가이드] p.113 정규표현식 예제 중

예제 코드 (정규표현식을 사용해서 url을 파싱하는 코드, substring 메서드를 사용해서 결과를 깔끔하게 정렬해서 출력한다.)
```javascript
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'],
    blanks = '       ', // 고정된 간격을 유지하게 하기 위해 사용되는 공백 변수
    i;

for (i = 0; i < names.length; i += 1) {
  console.log(names[i] + ':' + blanks.substring(names[i].length), result[i]); // substring을 어떻게 사용하는지 주목!!
}
```

실행 결과
```bash
url:     http://www.ora.com:80/goodparts?q#fragment
scheme:  http
slash:   //
host:    www.ora.com
port:    80
path:    goodparts
query:   q
hash:    fragment
```
