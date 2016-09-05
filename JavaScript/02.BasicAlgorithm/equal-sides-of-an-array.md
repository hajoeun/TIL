# Equal Sides of An Array
_from Code Wars_

## 1. 문제 설명
- 숫자값으로 이뤄진 배열을 매개변수로 받아서 해당 배열의 왼쪽과 오른쪽의 합이 같아지는 지점의 인덱스 값을 반환하는 함수를 만들어라! [6kyu]
- 예를 들어 `findEvenIndex([1,2,3,4,3,2,1])`와 같은 형태로 호출하게 되면 인덱스 값은 3이 반환되어야 한다. (인덱스 값을 기준으로 6, 6으로 왼쪽 오른쪽의 합이 같다.)


## 2. 나의 답안
```javascript
function findEvenIndex(arr) {
  var len = arr.length, // 배열의 길이 값을 저장한다.
      result = -1;

  (function(index) {
    var sum1 = sum2 = 0;

    // 왼쪽 합(sum1), 오른쪽 합(sum2)를 구한다.
    for (var i = 0; i < index; i++) sum1 += arr[i];
    for (i++; i < len; i++) sum2 += arr[i];

    if (sum1 === sum2) {
      result = index; // 원하는 인덱스 값을 발견했음으로 result 값에 할당해주고 재귀함수를 탈출한다.
      return;
    }
    else if (index > len - 2) return; // 인덱스가 len-2 지점을 초과하면 원하는 값이 없다는 뜻임으로 그냥 재귀함수를 탈출한다.
    else arguments.callee(index + 1); //인덱스 값을 감소시켜서 재귀로 호출한다.
  })(1); // 인덱스가 0이면 왼쪽에 더할 값이 없음으로 1부터 시작한다.

  return result;
}
```
- 재귀함수를 활용하고자 했다.


## 3. 인기 답안
```javascript
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];

      if(left == right) return i;
  }

  return -1;
}
```
- 아이디 'zoid'를 사용하는 의 답안이다.
- 매개변수가 '배열'이라는 사실에 주목했다. 배열 객체에 존재하는 메서드를 활용하는게 더 현명한 방법인 것 같다.
