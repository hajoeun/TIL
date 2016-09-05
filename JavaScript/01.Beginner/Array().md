#Array()

## 1. Array() 객체의 사용
- 배열은 값을 순서대로 나열한 목록이며 저장된 값은 언제든 수정하거나 삭제할 수 있다.
- Array()는 특별한 형식의 Object()다. 다시 말해, Array() 인스턴스는 기본적으로 Object() 인스턴스와 같으며, 여기에 몇 개의 기능만 추가됐을 뿐이다.
- '해시(hash)'(연관 배열이라고도 함)가 필요하다면 객체가 가장 현실적인 대안이다.
```javascript
var myArray = ['blue', 'green', 'orange', 'red']; //일반적인 배열의 형태

console.log(myArray[0]); //인덱스(index)를 통해서 값에 접근할 수 있다.

var myObject = { //해시(hash, 연관 배열)로 사용하기 위해 정의된 객체
  'blue' : 'blue',
  'green' : 'green',
  'orange' : 'orange',
  'red' : 'red'
};

console.log(myObject['blue']);
```


## 2. Array() 매개변수
- Array() 생성자에는 배열 인스턴스에 포함될 값을 전달할 수 있으며 각 값은 쉼표로 구분한다.
- 만약 Array() 생성자에 한 개의 매개변수만 전달하고 매개변수가 숫자값이라면 생성자는 이를 배열의 크기로 이해하고 해당 크기의 배열을 만든다.
```javascript
var foo = new Array(1, 2, 3);
var bar = new Array(100);

console.log(foo[0], foo[2]); //'1 3'이 기록된다.
console.log(bar[0], bar.length); //'undefined 100'이 기록된다.
```


## 3. Array() 속성과 메소드
- **속성**
  - prototype


## 4. Array 객체 인스턴스의 속성과 메소드
- **인스턴스 속성**
  - constructor 생성자 타입을 반환한다.
  - length 배열의 길이를 반환한다.
- **인스턴스 메소드**
  - pop() 마지막 항목을 제거한다.
  - push() 마지막에 하나 이상의 항목을 추가한다.
  - reverse() 요소를 비교하여 내림차순으로 정렬한다.
  - shift() 배열의 시작부분에 항목을 제거한다.
  - sort() 요소를 비교하여 오름차순으로 정렬한다.
  - splice() 구역을 삭제하거나 항목을 추가해서 배열을 수정할 수 있게 한다. (두개의 매개변수가 들어가는데, 첫번째는 시작점이고 두번째는 작업할 원소들의 개수이다.)
  - unshift() 배열의 시작부분에 항목을 추가한다.
  - concat() 해당 배열에 지정한 항목들을 추가한 _새로운 배열_ 을 반환한다.
  - join() 요소를 하나의 문자열로 병합하여 반환한다.
  - slice() 배열의 일부분을 반환한다. (두개의 매개변수가 들어가는데, 각 매개변수는 인덱스를 의미한다. 첫번째 매개변수부터 두번째 매개변수 앞까지의 값을 반환한다.) _새로운 배열_


## 5. 배열 만들기, 값을 추가하고 갱신하기
- Array() 생성자를 사용하는 방법
- 배열 리터럴 표기법을 사용하는 방법(보편적)
- 배열의 크기를 미리 설정할 때, 값이 없는 빈 자리는 undefined가 채운다.
```javascript
var myArray1 = new Array('blue', 'green', 'orange', 'red'); //Array() 생성자 사용

console.log(myArray1);

var myArray2 = ['blue', 'green', 'orange', 'red']; //배열 리터럴 표기법 사용

console.log(myArray2);
```

- 자바스크립트는 동적인 특성을 가지고 자료형을 강하게 강제하지 않는 언어이다. 때문에 배열의 값은 언제든 수정할 수 있다.
```javascript
var myArray = [];
myArray[50] = 'blue';
myArray[50] = {'color': 'blue'}; //자료형을 문자열에서 Object() 객체로 바꾼다.
console.log(myArray[30], myArray[50]); // 'undefined { color: "blue"}'가 기록된다.

console.log(myArray[50]['color']); //각괄호를 사용해 color 속성에 접근한다.
console.log(myArray[50].color); //점 표기법을 사용해 color 속성에 접근한다.
```

- 배열의 크기를 설정해서 의도적으로 값을 추가하거나 제거할 수 있다.
```javascript
var myArray = ['blue', 'green', 'orange', 'red'];
console.log(myArray.length); //'4'가 기록된다.

myArray.length = 99; //의도적으로 배열의 크기를 늘렸다.
console.log(myArray.length); //'99'가 기록된다.

myArray.length = 1; //의도적으로 배열의 크기를 줄였다.
console.log(myArray[1]); //'undefined'가 기록된다.

console.log(myArray); //'["blue"]'만 기록된다.
```


## 6. 배열을 앞뒤로 훑기
- 앞에서 뒤로 훑기
```javascript
var myArray = ['blue', 'green', 'orange', 'red'];

var myArrayLength = myArray.length; //배열의 크기를 저장해 불필요한 탐색을 방지한다.
var counter = 0;

while (counter < myArrayLength) {
  console.log(myArray[counter]);
  counter++;
}
```

- 뒤에서 앞으로 훑기
```javascript
var myArray = ['blue', 'green', 'orange', 'red'];

var myArrayLength = myArray.length; //배열의 크기를 저장해 불필요한 탐색을 방지한다.

while (myArrayLength--) {
  console.log(myArray[myArrayLength]);
}
```
