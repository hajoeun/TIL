# Check for Palindromes
_from FreeCodeCamp_

## 바로 읽으나 거꾸로 읽으나 같은 문자열 확인하기
- 팰린드롬 문자열을 확인할 수 있는 함수를 만들자
1. 일반 코드
    - 숫자, 알파벳을 제외한 문자는 제거한다. (`replace(/[^a-z0-9]/gi,'')`를 이용하자.)
    - 팰린드롬 문자열은 대소문자를 구분하지 않는다. (`toLowerCase()`를 이용하자.) 
```javascript
function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase(); // 문자열을 골라내 소문자로 바꾸고
  var temp = str.split('').reverse().join(''); // 문자열을 배열로 쪼개고 순서를 바꾸고 다시 합쳐서 하나의 문자열로 만들고
  
  return temp === str; // 두개를 비교해서 결과를 반환
}
```

2. 재귀 함수 코드  
    - 문자 1개 또는 0개인 문자열은 팰린드롬이다.
    - 첫 문자와 마지막 문자가 같고 나머지 부분이 팰린드롬인 문자열은 팰린드롬이다.
```javascript
// from Secret of the JavaScript Ninja p.81
function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase(); // 문자열을 골라내 소문자로 바꾸고

  if (str.length <= 1) return true; // 문자가 1개 또는 0개이면 무조건 팰린드롬이다.
  if (str.charAt(0) != str.charAt(str.length - 1)) return false; // 첫 문자와 마지막 문자가 같지도 않으면 무조건 팰린드롬이 아니다.
  return palindrome(str.substr(1,str.length - 2)); // 재귀함수로 나머지 부분이 팰린드롬인지 확인한다.
}
```