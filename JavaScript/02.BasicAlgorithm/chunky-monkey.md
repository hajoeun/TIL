#Chunky monkey
_from FreeCodeCamp_

## 배열을 그룹 지어 나누는 함수 만들기
- 임의의 길이를 가지는 배열(arr)과 그룹을 지을 크기를 정하는 숫자를 매개변수(size)로 받는 함수로 배열을 그룹 지어 반환하는 함수를 만들자
    1. 결과값을 보관할 배열 temp를 선언한다.
    2. 배열의 길이만큼 반복하는 반복문을 선언한다. 이때, 반복문의 증가 조건을 두번째 매개변수 size로 정한다.
    3. 인덱스 값의 증가에 따라 배열의 내용을 `slice()` 매소드로 잘르고 `push()` 메소드를 이용해서 temp에 담는다.
```javascript
function chunkArrayInGroups(arr, size) {
  var temp = []; // 1
  for (var i = 0; i < arr.length; i += size) { // 2
    temp.push(arr.slice(i, i + size)); // 3
  }
  return temp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a","b"],["c","d"]]가 반환된다
```