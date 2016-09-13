# Pig Latin
_from FreeCodeCamp_

## [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin)생성하는 함수 만들기
```javascript
function translatePigLatin(str) {
  var arr = str.split(''), temp = str.split(''), // 비교의 대상이 되는 arr 배열과 실제 결과를 만들 temp 배열을 만든다.
      vowels = ['a','e','i','o','u'], flag = 0; // 모음을 담은 배열과 첫번째 글자가 모음인 경우를 구분하기 위한 플래그 변수를 선언한다.

  arr.find(function(val){
    if (vowels.indexOf(val) !== -1) { // 모음이면
      return true; // find 함수를 종료한다.
    } else { // 그렇지 않으면
      temp.push(temp.shift()); // 앞글자를 하나씩 뒤로 보낸다.
      flag += 1; // 플래그를 준다.
    }
  });

  temp.push( flag ? 'ay' : 'way' ); // 만약에 플래그가 한번이라도 변경되었다면 true
  return temp.join(''); // 최종 결과를 반환한다.
}

translatePigLatin("consonant"); // onsonantcay 가 기록된다.
```
