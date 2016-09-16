# Convert HTML
_from FreeCodeCamp_

## HTML 엔티티로 문자열을 변환하는 함수 만들기
- 일반 문자열을 받아서 HTML 문서에 예약어로 설정된 엔티티 값으로 변환해서 반환하는 함수를 만들자
```javascript
function convertHTML(str) {
  var arr = str.split(''); // 배열로 문자열을 나누고
  var entities = { // 엔티티에 해당하는 문자열을 매치한 객체를 만들고
    "<": "&lt;",
    ">": "&gt;",
    '\"': "&quot;",
    "\'": "&apos;",
    "&" : "&amp;"
  };
  arr.forEach(function(val) {
    if(entities[val]) str = str.replace(val, entities[val]); // 배열을 순회하며 엔티티에 해당하는 값을 발견하면 키와 값을 이용해 대체!
  });
  return str; // 결과를 반환한다.
}

console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"가 기록된다.
```
