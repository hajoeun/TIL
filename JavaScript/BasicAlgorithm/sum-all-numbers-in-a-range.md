# Sum All Numbers in a Range
_from FreeCodeCamp_

## 범위 내의 숫자를 모두 더하는 함수 만들기
- 범위를 알려주는 배열을 매개변수로 받아서 배열 내에 있는 숫자 값의 범주에 포함되는 숫자들의 합을 반환하는 함수를 만들어라 (배열은 정렬되어 있지 않을 수도 있다.)
- `Math.max()`와 `Math.min()` 함수를 사용하고 `Array.prototype.reduce()` 함수를 사용할 것!

```javascript
function sumAll(arr) {
  var max = Math.max.apply(null, arr); // 최대값
  var min = Math.min.apply(null, arr); // 최소값
  var temp = []; // 빈 배열
  while (min <= max) temp.push(min++); // 최소값으로부터 최대값까지의 숫자 갖는 배열을 만든다.

  return temp.reduce(function(a, b) { // 배열을 압축한다.
   return a + b;
  }, 0);
}

sumAll([1, 4]); // 1 + 2 + 3 + 4 = 10을 반환한다.
```
