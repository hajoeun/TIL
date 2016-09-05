#Return Largest Numbers in Arrays
_from FreeCodeCamp_

## 배열들 중에서 가장 큰 숫자들 반환하기
- 2차원 배열에서 각 배열에서 가장 큰 숫자만 찾아 모은 배열을 반환해야하는 문제
- 중첩된 루프(반복문)를 사용해서 다차원 배열을 탐색할 수 있다.
- for/in 문을 활용하여 배열 탐색 반복문을 만들었다.
  1. 함수 내부에 발견한 큰 값을 저장할 배열을 선언한다.
  2. 외부 배열을 탐색하기 위한 for/in 구문을 선언한다.
  3. 발견한 첫번째 배열의 첫번째 요소를 기준이 되는 값으로 삼기 위해 저장 배열에 담는다.
  4. 발견한 첫번째 배열, 즉 내부 배열을 탐색하기 위한 for/in 구문을 선언한다.
  5. 기준이 되는 값보다 큰 숫자를 발견하면 기존에 저장된 배열의 값을 덮어쓴다.
  6. 최종으로 저정된 값을 반환한다.
```javascript
function largestOfFour(arr) {
  var memo = []; // 1
  for(var i in arr) { // 2
        memo[i] = arr[i][0]; // 3
        for(var j in arr[i]) { // 4
          if(arr[i][j] > memo[i]) { // 5
            memo[i] = arr[i][j];
          }
        }
      }
  return memo; // 6
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
/// [9, 35, 97, 1000000]이 기록된다.
```
