#Confirm the ending
_from FreeCodeCamp_

## 문자열의 끝을 확인하는 함수 만들기
- 두개의 문자열을 매개변수를 받고 두번째 문자열이 첫번째 문자열의 끝 글자인지 확인하는 함수를 만들어보자.
    1. 두번째 매개변수(target)가 확인하고자하는 첫번째 매개변수(str)의 '끝 글자(result)'가 시작되는 지점을 알아내기 위해 두 매개변수의 길이 값의 차를 구한다.
    2. `substr()` 메소드를 사용해서 비교해야할 끝 글자를 추출한다. (`substr(<시작점 인덱스>, <추출할 글자 길이>)`
    3. target과 result의 값을 비교해서 true/false를 반환한다.
```javascript
function confirmEnding(str, target) {
  var startIndex = str.length - target.length; // 1
  var result = str.substr(startIndex, target.length); // 2
  
  if (result === target) { // 3
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n"); // true가 반환된다.
```