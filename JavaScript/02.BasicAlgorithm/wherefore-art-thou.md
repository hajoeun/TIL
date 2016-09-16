# Wherefore Art Thou
_from FreeCodeCamp_

## 배열 내의 객체 탐색
- 배열 내부의 객체를 탐색하여 특정 데이터를 포함하는 객체를 반환하는 함수를 만들어라.
- 첫번째 매개변수는 검색의 대상, 두번째 매개변수는 검색할 내용이다.

```javascript
function whatIsInAName(collection, source) {
  var arr = []; // 결과물을 담을 배열

  collection.forEach(function(val) { // forEach 메서드는 배열에 있는 메서드이다. 요소 값을 돌면서 콜백 함수를 실행한다.
    if(valCheck(val)) arr.push(val);
  })

  function valCheck(obj) {
    var flag = false; // 값을 체크해서 확인해줄 flag 변수
    for (var key in source) { // 검색의 대상의 유효 범위만큼만 루프를 순회한다.
      flag = obj[key] === source[key] ? true : false; // 두 매개변수를 비교해서 일치하는 내용이 있다면 true 저장한다.
    }
    return flag;
  }

  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });  // [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]이 기록된다.
```


- 아래는 함수형으로 구성해본 답이다. 코드는 길지만 모듈화가 잘 되었다.
```javascript
function whatIsInAName(collection, source) {
  var arr = []; // 결과물을 담을 배열, target

  collection.forEach(findElement); // forEach 메서드는 배열에 있는 메서드이다. 요소 값을 돌면서 콜백 함수를 실행한다.

  function findElement(obj) { // *핵심 함수, forEach 메서드의 콜백 함수로 사용되며 각 요소를 체크해서 일치하면 결과물 배열에 추가한다.
    if (checkObject(obj)) pushValue(arr, obj);
  }

  function checkObject(obj) { // 매개변수를 검증한다.
    var flag = false, // 값을 체크해서 확인해줄 flag 변수
        objProps = getPropertyNames(obj), objValues = getValues(obj);

    getPropertyNames(source).forEach(function(a) { // 프로퍼티의 이름 값을 비교한다.
      flag = hasValue(objProps, a);
    });

    if (flag) getValues(source).forEach(function(a) { // 만약에 위의 조건을 만족했다면 value도 검토한다.
      flag = hasValue(objValues, a);
    });

    return flag;
  }

  return arr;
}

// 모듈로 존재하는 외부 함수 그룹
function pushValue(target, value) { // 타겟 배열에 값을 추가하는 함수
  target[target.length] = value;
}

function compareValue(a, b) { // 값을 비교해서 일치하면 true를 반환하는 함수
  return a === b ? true : false;
}

function getPropertyNames(obj) { // 특정 객체의 프로퍼티를 배열로 반환하는 함수
  if (typeof obj === 'object') return Object.getOwnPropertyNames(obj);
}

function getValues(obj) { // 특정 객체의 값만을 배열로 반환하는 함수
  if (typeof obj === 'object') {
    var result = [];
    for (var key in obj) { pushValue(result, key);}
    return result;
  }
}

function hasValue(target, value) { // 배열에 해당 값을 가지고 있는지 검증하는 함수
  if (Array.isArray(target)) return target.indexOf(value) != -1 ? true : false; // 타켓이 배열이라면 특정 배열 내에 원하는 값이 있는지 찾아보는 indexOf() 함수가 값이 없으면 -1을 반환하는 성질을 이용해 값이 없으면 false를 반환한다.
}
// 함수 그룹 끝


console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));  // [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]이 기록된다.
```
