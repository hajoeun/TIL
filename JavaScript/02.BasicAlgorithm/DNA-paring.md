# DNA Paring
_from FreeCodeCamp_

## DNA의 짝을 맞춰 반환하는 함수 만들기
- [Base Paring](https://en.wikipedia.org/wiki/Base_pair)에 근거해 짝을 맞춰 새로운 배열을 반환하는 함수를 만든다.
```javascript
function pairElement(str) {
  var obj = { T: 'A', A: 'T', C : 'G', G: 'C'}; // 짝을 정의하는 객체 선언

  return str.split('').map(function(val) { // 문자열을 쪼개고 새로운 배열 요소를 가지는 배열을 반환
    return [val, obj[val]];
  });
}

pairElement("GCG"); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ] 이 반환된다.
```
