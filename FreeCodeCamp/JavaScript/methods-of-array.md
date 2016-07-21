#methods of array

## 1. 예제 01 - `map()` 메소드를 이용한 반복문 처리
* `map()` 메소드는 배열을 반복하면서 해당 특정 동작 수행하는 함수이다.
```javascript
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){
  return val + 3;
}); //newArray에 [4,5,6,7,8]이 저장된다.
```


## 2. 예제 02 - `reduce()` 메소드를 이용한 반복문 처리
* `reduce()` 메소드는 반복을 통해 배열에 있는 데이터를 압축하는 함수이다. 정확히 말해 매개변수로 전달되는 익명 함수가 반환하는 값을 반복적으로 처리한다.
```javascript
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal; //currentVal는 배열의 두번째 요소부터 시작된다.
}); //array의 모든 값이 더해져서 30이 저장된다.
```


## 3. 예제 03 - `filter()` 메소드를 이용한 배열의 분류 처리
* `filter()` 메소드는 배열을 반복하면서 특정 조건값에 해당하는 값만을 분류(filtering)하여 반환한다. 이때, 분류의 대상이 되는 배열은 본래의 값을 잃어버리거나 변경되지 않는다.
```javascript
var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
  return val < 6; //[1,2,3,4,5] 값을 반환한다.
});
```


## 4. 예제 04 - `sort()` 메소드를 이용한 배열의 정렬
* `sort()` 메소드는 배열을 알파벳 순서 혹은 숫자의 순서대로 정렬하여 반환한다.
* 메소드에 콜백함수(매개변수 값으로서의 함수)를 포함하지 않으면 알파벳 순서대로(내림차순으로) 정렬한다. 숫자의 경우 두자리 숫자를 올바르게 정렬하지 못하는 문제가 발생한다. 때문에 숫자 정렬을 위해서는 반드시 콜백함수를 작성해주어야 한다.
```javascript
var array = [1, 12, 21, 2];

array.sort(function(a, b) {
  return b - a; //음수값이 반환되면서, 숫자를 역순으로 정렬하도록 한다.
});
```
