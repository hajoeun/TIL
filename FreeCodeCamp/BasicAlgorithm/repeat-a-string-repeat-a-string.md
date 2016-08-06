#Repeat a string repeat a string

## 문자열을 반복시키는 함수 만들기
- 문자열을 원하는만큼 반복시켜 문자열을 반환하는 함수를 만들자
    0. 문자열을 담은 매개변수와 반복시킬 회수를 지정한 매개변수를 받는다.
    1. 그릇으로 사용할 temp 변수를 선언한다.
    2. num 매개변수의 값만큼 반복문을 돌면서 temp 변수에 문자열(str)을 넣어준다.
    3. temp를 반환한다.
```javascript
function repeatStringNumTimes(str, num) {
  var temp = ''; // 1
    for(var i = 0; i < num && 0 < num; i++) { // 2
      temp += str;
    }
  return temp; // 3
}

repeatStringNumTimes("abc", 3);
```