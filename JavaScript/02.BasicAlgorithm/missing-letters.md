# Missing Letters
_from FreeCodeCamp_

## 빠진 문자열을 찾는 함수 만들기
- 매개변수로 주어지는 알파벳 순서대로 나열된 문자열을 받아서 중간에 빠진 문자를 찾아서 반환하는 함수를 만든다.
```javascript
function fearNotLetter(str) {
  var arr = str.split(''), result; // 문자열을 쪼개서 배열로 담고, 결과를 넣을 변수를 선언한다.

  arr.map(function(val) {
    return val.charCodeAt(); // 배열을 순회하며 모두 아스키 코드 값으로 변환한다.
  })
  .forEach(function(val, idx, origin) {
    var target = origin[idx] + 1; // 검색 대상이 될 코드 값을 지정한다.
    if (target != origin[idx+1] && origin[idx+1] !== undefined) {
      // 현재 변수의 다음 변수와 비교하여 검색 대상이 되는 코드가 존재하는지 확인한다.
      result = target; // 없다면 검색 대상을 결과값으로 반환한다.
    }
  });

  return result === undefined ? result : String.fromCharCode(result); // 결과값을 문자열로 반환하거나 없으면 undefined를 반환한다.
}

fearNotLetter("abce"); // d가 기록된다.
```
