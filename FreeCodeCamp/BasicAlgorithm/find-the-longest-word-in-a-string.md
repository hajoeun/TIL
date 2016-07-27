#Find the Longest Word in a string

## 문자열에서 가장 긴 단어를 찾는 함수 만들기
- `split()`메소드와 `length`속성을 이용해서 가장 긴 단어를 찾는 함수를 만들 수 있다.
  1. 문자열을 받아서 띄어쓰기를 기준으로 단어마다 하나의 요소가 되는 배열로 만들어준다.
  2. 첫번째 단어를 기준이 될 단어로 삼는다.
  3. 배열 전체의 길이만큼 반복하는 반복문을 만든다.
  4. 배열을 탐색하면서 새로운 단어와 기준이 되는 단어의 길이를 비교해서 더 긴 경우 기준이 되는 단어와 바꾼다.
  5. 가장 긴 단어로 선택된 단어의 길이를 반환한다.
```javascript
function findLongestWord(str) {
  var temp = str.split(' '); // 1
  str = temp[0]; // 2
  for (var i = 1; i < temp.length; i ++) { // 3
    if (str.length < temp[i].length) { // 4
      str = temp[i];
    }
  }
  return str.length; // 5
}

findLongestWord("The quick brown fox jumped over the lazy dog");
```
