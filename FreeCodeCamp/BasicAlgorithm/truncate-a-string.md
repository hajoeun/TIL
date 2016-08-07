#Truncate a string

## 말줄임표(...)로 긴 문장을 줄이는 함수를 만들기
- 임의의 길이를 가지는 문장(str)과 문장의 길이(num)를 정하는 매개변수를 받아서 문장을 줄이고 말줄임표를 붙여 반환하는 함수를 만들자
- num 매개변수는 말줄임표를 포함한 문장 전체의 길이를 뜻한다.
- 하지만, 만약에 num 매개변수가 3보다 작거나 같으면 말줄임표는 전체 문장의 길이를 초과해도 괜찮다.
    1. 조건문으로 str 문자열 길이가 주어진 최대 문장 길이 num보다 크고 num이 2보다 큰 값인지 확안한다. (3보다 작거나 같지 않은지 확인한다.)
    2. num 매개변수가 3보다 작거나 같은 경우
    3. 각 조건이 충족되면 `slice()` 매소드를 이용해서 문장을 자른다. (매소드의 매개변수는 시작점과 끝지점을 나타내야한다.) 1번 조건의 경우 말 줄임표를 포함하기 위해 끝지점이 3을 뺀 값이어야한다.
    4. 말줄입표를 덧붙여준다.
```javascript
function truncateString(str, num) {

  if (str.length > num && num > 2) // 1
    str = str.slice(0, num - 3)  + "..."; // 3, 4
  else if (num <= 3) // 2
    str = str.slice(0, num) + "..."; // 3, 4

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); // 'A-tisket...'이 반환된다.
```
