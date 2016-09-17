# Sum All Odd Fibonacci Numbers
_from FreeCodeCamp_

## 모든 홀수 피보나치의 수를 더하는 함수 만들기
- 매개변수로 주어지는 숫자값보다 작거나 같은 피보나치 배열 중 홀수값만 더하는 함수를 만들자
```javascript
function sumFibs(num) {
  var memo = [0, 1]; // 피보나치 배열을 저장할 배열

  (function fib(n) {
    var next = memo[n - 1] + memo[n]; // 다음 값을 정하고
    if (next <= num) { // 다음 값이 매개변수보다 작으면
      memo.push(next); // 매개변수를 피보나치 배열에 넣어주고
      fib (n + 1); // 재귀로 다시 함수를 호출한다.
    }
    return;
  }(1))

  return memo.filter(function(a) { return a % 2 != 0; }) // 홀수 값만 추출하고
  .reduce(function(a, b) { return a + b; }); // 더한 뒤 반환
}

console.log(sumFibs(4)); // 1+1+3의 결과로 5가 기록된다
```
