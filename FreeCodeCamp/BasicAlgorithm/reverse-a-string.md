#Reverse a string

## 문자열을 역정렬하는 함수를 만들기
- 기존의 `reverse()` 메소드는 배열의 요소들의 순서를 역으로 정렬하는 함수였다. 새로운 함수를 정의해서 문자열을 역정렬하는 함수를 만들어보자.
  1. 문자열은 하나의 요소를 가지는 배열로 문자열 전체가 하나의 요소로 인식된다. 때문에 `split()` 메소드를 사용해서 여러개의 요소값으로 나누어 주어야한다.
  2. 문자열이 여러개의 요소로 나뉜 후, `reverse()` 메소드를 사용해서 역정렬을 해준다.
  3. 나뉜 문자열을 다시 병합하는 과정을 거쳐 역정렬된 하나의 문자열을 만들어준다.
```javascript
function reverseString(str) {
  var temp = str.split(''); // 1

  temp = temp.reverse(); // 2

  str = temp.join(''); // 3

  return str;
}

reverseString("hello"); //'olleh'가 반환된다
```
