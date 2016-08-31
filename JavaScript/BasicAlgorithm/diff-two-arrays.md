# Diff Two Arrays
_from FreeCodeCamp_

## 두 배열의 다른 부분을 찾아 반환하는 함수 만들기
- 두개의 배열을 매개변수로 받아 비교한 뒤 공통된 부분을 제거하고 다른 부분만 배열로 반환하는 함수를 만들어라
- `filter()`, `indexOf()`, `concat()`등을 활용할 수 있다.

```javascript
function diffArray(arr1, arr2) {

  return arr1.filter(function(val) { // 배열을 순회하며 데이터를 거르는 메서드 filter()
            if (arr2.indexOf(val) === -1) return val;}) // 만약에 arr2에 arr1의 요소에 해당하는 값이 없다면 그 값을 반환해서 배열을 만든다.
        .concat(
          arr2.filter(function(val) { // 위 코드에서 만들어진 배열에 arr2에 filter 메서드를 적용해서 나온 배열과 합쳐진다.
            if (arr1.indexOf(val) === -1) return val;}) // 만약에 arr1에 arr2의 요소에 해당하는 값이 없다면 그 값을 반환해서 배열을 만든다.
          );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // 4를 반환한다.
```
