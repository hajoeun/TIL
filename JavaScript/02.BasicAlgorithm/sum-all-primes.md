# Sum All Primes
_from FreeCodeCamp_

## 주어진 범위 내의 소수값을 구해서 더하는 함수 만들기
- 소수란 자기 자신과 1 외에 다른 값을 약수로 갖지 않는 값을 의미한다.
```javascript
function sumPrimes(num) {
  var memo = []; // 발견한 소수 값을 저장할 배열

  (function findPrime(n){
    if (n <= num) { // 매개변수로 받은 숫자값을 범위로 갖는다.
      if (isPrime(n)) { // 만약에 소수라면
        memo.push(n); // 메모 배열에 넣는다.
      }
      findPrime(n + 1); // 재귀를 다시 호출한다.
    }
    return;
  }(2)); // 처음 주어지는 값은 2다.

  return memo.reduce(function(a,b) {return a+b;}); // 메모 배열의 총 합을 반환한다.
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false; // 나눈 값이 하나라도 0으로 떨어지는 값이 있다면 그 값은 소수가 아니다.
  }
  return true; // 모든 조건을 만족했다면 소수!
}

console.log(sumPrimes(10)); // 17이 기록된다.
console.log(sumPrimes(977)); // 73156이 기록된다.
```
