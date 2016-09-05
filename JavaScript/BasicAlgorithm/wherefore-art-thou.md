# Wherefore Art Thou

## 배열 내의 객체 탐색
- 배열 내부의 객체를 탐색하여 특정 데이터를 포함하는 객체를 반환하는 함수를 만들어라.
- 첫번째 매개변수는 검색의 대상, 두번째 매개변수는 검색할 내용이다.

```javascript
function whatIsInAName(collection, source) {
  var arr = []; // 결과물을 담을 배열

  for (var i = 0; i < collection.length; i += 1) {
    if (valCheck(collection[i], source)) arr.push(collection[i]); // 값을 체크해서 유효하면 결과물을 담을 배열에 넣는다.
  }

  function valCheck(obj, values) { // obj = { "a": 1, "b": 2 }, values = { "a": 1, "b": 2 };
    var flag = false; // 값을 체크해서 확인해줄 flag 변수
    for (var key in values) { // 검색의 대상의 유효 범위만큼만 루프를 순회한다.
      flag = obj[key] === values[key] ? true : false; // 두 매개변수를 비교해서 일치하는 내용이 있다면 true 저장한다.
    }
    return flag;
  }

  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });  // [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]이 기록된다.
```
