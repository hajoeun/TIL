#Dictionary of Methods(메소드 사전)

## propertyIsEnumerable()
- `hasOwnProperty()` 메소드와 마찬가지로 프로퍼티의 이름을 담은 문자열 매개변수를 하나 받아서, 이 이름의 프로퍼티를 객체가 상속받지 않고 직접 정의했는지 검사한다.
- __무엇보다도 이 프로퍼티가 for/in 루프를 사용하여 열거될 수 있는지 검사한다.__
```javascript
var o = {x:1, y:2};
o.propertyIsEnumerable("x"); //true: 프로퍼티가 존재하며 열거할 수 있다.
o.propertyIsEnumerable("valueOf"); //false: 상속받은 프로퍼티다.
```


## isPrototypeOf()
- 이 메소드의 객체가 매개변수로 주어진 객체의 프로토타입 객체라면 true를 반환한다.
```javascript
var o = {};
Object.prototype.isPrototypeOf(o); //true
Object.isPrototypeOf(o); //false
o.isPrototypeOf(Object.prototype); //false
Function.prototype.isPrototypeOf(Object);  //true
```


## 전역 객체에 포함된 전역 함수
- 전역 객체와 전역 변수는 다른 개념이다. 전역 객체는 window 객체와 같은 머리 객체(head object)를 의미한다.
- 자바스크립트에는 미리 정의된 몇 개의 함수 최상위 스코프의 객체(머리 객체)에 포함되어 있다.
- 다음 네이티브 함수들은 전역 객체의 메소드로써 사용된다.
    - decodeURI()
    - decodeURIComponent() 
    - encodeURI()
    - encodeURIComponent()
    - eval()
    - isFinite()
    - parseFloat()
    - parseInt()


## `sort()` 콜백 함수 확장
- 문자열을 포함한 배열을 정렬하는 경우
```javascript
var m = ['aa', 'bb', 'a', 4, 8, 15, 13, 24, 45];

m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
}); // [ 4, 8, 13, 15, 24, 45, 'a', 'aa', 'bb' ] 으로 정렬된다.
```

- 객체를 요소로 갖는 배열을 정렬하는 경우(1) 하나의 조건으로 정렬
```javascript
var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Shine', last: 'DeRita'},
    {first: 'Larry', last: 'Howard'},
    {first: 'Curly', last: 'Ruby'},
    {first: 'Joshua', last: 'Rails'}
];


var by = function(name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if(a === b) {
                return 0;
            }
            if(typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

s.sort(by('first')); // first 키 값을 기준으로 정렬된다.
```

- 객체를 요소로 갖는 배열을 정렬하는 경우(2) 두개의 조건으로 정렬
```javascript
var by = function (name, minor) {
    return function (o,p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

s.sort(by('last', by('first'))); // last 키 값을 기준으로 정렬하되 같은 값이면 first 키를 기준으로 삼는다.
```


## number.toExponential(fractionDigits)
- 숫자를 지수 형태의 문자열로 변환하는 메소드
- 옵셥인 fractionDigits 매개변수는 소수점 아래 몇 째 자리까지 표시할 것인지를 지정한다. (0~20 사이의 값)
```javascript
var pi= Math.PI;
console.log(pi.toExponential(0)); // 3e+0
console.log(pi.toExponential(2)); // 3.14e+0
console.log(pi.toExponential(7)); // 3.1415927e+0
console.log(pi.toExponential(16)); // 3.1415926535897931e+0
console.log(pi.toExponential()); // 3.141592653589793e+0
```


## number.toFixeds(fractionDigits)
- 숫자를 고정 소수점 형태로 변환하는 메소드
- 옵션인 fractionDigits 매개변수는 소수점 아래 몇 째 자리까지 표시할 것인지 지정한다. (0~20 사이의 값, 기본값은 0)
```javascript
var pi= Math.PI;
console.log(pi.toFixed(0)); // 3
console.log(pi.toFixed(2)); // 3.14
console.log(pi.toFixed(7)); // 3.1415927
console.log(pi.toFixed(16)); // 3.1415926535897931
console.log(pi.toFixed()); // 3
```


## number.toPrecision(precision)
- 숫자를 10진수 형태의 문자열로 변환하는 메소드
- 옵션인 precision 매개변수는 문자열에 포함된 숫자의 개수를 지정한다. (1~21 사이의 값)
```javascript
var pi= Math.PI;
console.log(pi.toPrecision(1)); // 3
console.log(pi.toPrecision(2)); // 3.1
console.log(pi.toPrecision(7)); // 3.141593
console.log(pi.toPrecision(16)); // 3.141592653589793
console.log(pi.toPrecision()); // 3.141592653589793
console.log(typeof pi.toPrecision()); // string
```


## number.toString(radix)
- 숫자를 문자열로 변환하는 메소
- 옵션인 radix 매개변수는 진법(기수)을 지정한다. (2~36 사이의 값, 기본값은 10)
```javascript
var pi= Math.PI;
console.log(pi.toString(2)); // 11.001001000011111101101010100010001000010110100011
console.log(pi.toString(8)); // 3.1103755242102643
console.log(pi.toString(16)); // 3.243f6a8885a3
console.log(pi.toString()); // 3.141592653589793
console.log(typeof pi.toString()); // string
```


## regexp.exec(string)
- regexp를 string에 적용해서 일치하는 경우 배열을 반환하는 메소드 (정규표현식 메소드들 중에서 가장 강력하지만 가장 느린 메소드)
- 배열의 첫번째 요소는 regexp에 일치하는 문자열을 포함하고, 두번째 요소부터는 그룹 1에 캡쳐된 텍스트, 세번째 요소는 그룹 2에 캡쳐된 텍스트와 같은 식으로 배열로 할당되어 반환된다.
- 단, 정규표현식 객체(regexp)가 g 플래그를 가진 경우에는 검색의 시작점이 첫번째 요소부터가 아니라 regexp.lastIndex 값의 위치부터 시작한다. 일치하는 것을 찾으면 regexp.lastIndex 값은 일치하는 부분 다음에 나오는 첫 글자의 위치로 설정된다. 일치하는 것을 찾지 못하면 값은 0으로 재설정된다.
- 이러한 원리를 기반으로 반복적으로 exec를 호출하면서 문자열에 포함된 패턴과 일치하는 부분을 찾아낸다. 
    - 주의사항: 루프를 다 돌기 전에 일찍 빠져나가는 경우 다시 루프를 돌아 전부 찾기 위해서 regexp.lastIndex 값을 0으로 설정해야 한다.
```javascript
var text = '<html><body bgcolor=linen><p>This is <b>bold</b>!</p></body></html>';
var tag = /[^<>]+|<(\/?)([A-Aa-z]+)([^<>]*)>/g;
var a, i;

while ((a = tag.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        console.log(('// [' + i + '] ' + a[i]));
    }
    console.log();
}
```


## regexp.text(string)
- regexp가 문자열에 일치하면 true를 반환하고 그렇지 않으면 false를 반환하는 메소드 (정규표현식 메소드들 중에서 가장 간단하고 가장 빠른 메소드, g 플래그와 사용할 수 없다.)
```javascript
var b = /&.+;/.test('Frank &amp; beans');
console.log(b); // true 가 기록된다.
```


## string.charAt(pos)
- 문자열에서 pos 위치에 있는 문자를 반환하는 메소드
- pos 값이 0보다 작거나 문자열의 길이값(length)보다 크거나 같으면 빈 문자열을 반환한다.
```javascript
var name = "Joeun";
var initial = name.charAt(0); // 머리 글자는 'J'
```


## string.charCodeAt(pos)
- 문자열에서 pos 위치에 있는 문자의 코드를 반환하는 메소드
- pos 값이 0보다 작거나 문자열의 길이값(length)보다 크거나 같으면 NaN을 반환한다.
```javascript
var name = "Joeun";
var initial = name.charCodeAt(0); // 머리 글자 코드는 74
```


## string.concat(string...)
- 자신과 인수로 넘어온 문자열들을 연결하여 새로운 문자열을 만드는 메소드
```javascript
var s = 'C'.concat('a', 't'); // s는 'Cat'
```


## string.indexOf(searchString, position)
- searchString을 검색하는 메소드 (찾으면 문자의 위치를 반환, 찾지 못하면 -1을 반환)
- 옵션인 position 매개변수는 검색 시작 위치를 지정한다.
```javascript
var text = "Mississippi";
var p = text.indexOf('ss'); // p는 2
p = text.indexOf('ss', 3); // p는 5
p = text.indexOf('ss', 6); // p는 -1
```


## string.lastIndexOf(searchString, position)
- 문자열의 뒤에서부터 searchString을 검색하는 메소드 찾으면 문자의 위치를 반환, 찾지 못하면 -1을 반환)
- 옵션인 position 매개변수는 검색 시작 위치를 지정한다.
```javascript
var text = "Mississippi";
var p = text.lastIndexOf('ss'); // p는 5
p = text.lastIndexOf('ss', 3); // p는 2
p = text.lastIndexOf('ss', 6); // p는 5
```