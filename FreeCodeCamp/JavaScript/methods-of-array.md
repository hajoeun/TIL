#methods of array

## 1. 예제 01
- `map()` 메소드를 이용한 반복문 처리
- `map()` 메소드는 배열을 반복하면서 해당 특정 동작 수행하는 함수이다.
```javascript
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){
  return val + 3;
}); //newArray에 [4,5,6,7,8]이 저장된다.
```


## 2. 예제 02
- `reduce()` 메소드를 이용한 반복문 처리
- `reduce()` 메소드는 반복을 통해 배열에 있는 데이터를 압축하는 함수이다. 정확히 말해 매개변수로 전달되는 익명 함수가 반환하는 값을 반복적으로 처리한다.
```javascript
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal; //currentVal는 배열의 두번째 요소부터 시작된다.
}); //array의 모든 값이 더해져서 30이 저장된다.
```
