#Title case a sentence

## 각 단어의 첫글자만 대문자로 변환하는 함수 만들기
- 문장을 받아서 단어별 첫글자를 대문자로 리턴하는 함수를 만들어보자.
    1. 매개변수로 받은 문자열을 `split()` 메소드를 사용해서 단어 단위로 나누어 __배열로__ 저장한다. 동시에 단어를 소문자로 치환한다.
    2. 반복문으로 배열을 순회한다.
        2-1. `split()` 메소드를 사용해서 단어를 알파벳 단위로 나누어 배열로 저장한다.
        2-2. 알파벳으로 나눈 배열에서 첫번째 요소를 대문자로 치환한다.
        2-3. `join()` 메소드를 사용해서 알파벳을 다시 단어로 병합한다.
    3. `join()` 메소드를 사용해서 단어 단위로 나뉜 배열을 문장으로 병합한다.
    4. 문장을 반환한다.
```javascript
function titleCase(str) {
  var temp = str.toLowerCase().split(' '); // 1
  
  for (var i = 0; i < temp.length; i++) { // 2
      temp[i] = temp[i].split(''); // 2-1
      temp[i][0] = temp[i][0].toUpperCase(); // 2-2
      temp[i] = temp[i].join(''); // 2-3
  }
  
  str = temp.join(' '); // 3
  return str; // 4
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"이 반환된다.
```