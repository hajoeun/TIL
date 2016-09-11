# Search and Replace
_from FreeCodeCamp_

## 문자열에서 원하는 문자열만 찾아 바꾸는 함수 만들기
- 단순히 찾아 바꾸는 것이 아니라 대소문자를 유지할 수 있는 함수를 만들어야 한다.
- 일반 답안
```javascript
function myReplace(str, before, after) {
if (before[0].charCodeAt() < 91) { // before의 첫번째 글자가 대문자라면
    var temp = after.split('');
    temp[0] = temp[0].toUpperCase();
    after = temp.join(''); // after의 첫번째 글자도 대문자로 바꿔준다.
  }

  return str.replace(before, after); // 원하는 값을 찾아서 바꿔준다.
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

- 함수형으로 구현하기 위해 함수를 쪼개 보았다.
```javascript
function myReplace(str, before, after) {
  if (isUpperCase(before[0])) {
    after = firstToUpper(after);
  }
  return str.replace(before, after);
}

function isUpperCase(str) { // 대문자인지 확인하는 함수
  return (typeof str == 'string' && str.charCodeAt() < 91) ? true : false;
}

function firstToUpper(str) { // 첫번째 글자만 대문자로 바꿔주는 함수
  if (typeof str === 'string') {
    var temp = str.split('');
    temp[0] = temp[0].toUpperCase();
    return temp.join('');
  } else {
    console.error("Error!!!");
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
```
