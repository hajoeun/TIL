# Spinal Tap Case
_from FreeCodeCamp_

## 임의의 문자열을 받아서 spinal-case로 바꾸는 함수 만들기
- 문자열은 다양한 형태(낙타표기법, 파스칼표기법, 스네이크표기법)로 주어진다.
```javascript
function spinalCase(str) {
  if (str[0].charCodeAt() < 91) str = str.replace(/^[A-Z]/, function(s) { return s.toLowerCase(); }); // 파스칼표기법인 경우 낙타표기법으로 변경한다.
  return str.replace(/\s/g, "-") // 공백을 - 로 바꾼다.
            .replace(/[a-z][A-Z]/g, function(s,i,S) { return S[i] + "_" + S[i+1]; }).toLowerCase() // 낙타표기법을 모두 스네이크 표기법으로 바꾼다.
            .replace(/_/g, "-"); // 스네이크 표기법을 spinal-case로 바꾼다.
}

console.log(spinalCase('This Is Spinal Tap') === "this-is-spinal-tap"); // true
console.log(spinalCase("thisIsSpinalTap") === "this-is-spinal-tap"); // true
console.log(spinalCase("The_Andy_Griffith_Show") === "the-andy-griffith-show"); // true
```
