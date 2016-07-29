#statements(문장)

## 1. for/in 구문
- 객체의 프로퍼티에 대해 반복문을 구현하는 구문, `for(변수 in 객체) { 문장 }`과 같은 형태로 구성된다.
- for/in 루프의 몸체는 '객체'의 프로퍼티마다 한번씩 실행되는데, 루프 몸체가 실행되기에 앞서 객체에 속한 프로퍼티들 중 하나의 이름이 '변수'에 문자열 형태로 할당된다.
```javascript
var my_object = {
  name: "Joeun",
  age: 27,
  company: "MarketPress",
  device: {
    mobile: "iPhone SE",
    laptop: "Macbook Pro Retina 2015",
    ebook: "Ridibooks Paper"
  }
}
for (var prop in my_object) {
  console.log(prop + ": " + my_object[prop]);
}
```

- 배열도 프로퍼티를 인덱스로 가지는 객체이기 때문에 for/in 구문으로 구현할 수 있다.
```javascript
function largestOfFour(arr) {
  var memo = [];
  for(var i in arr) {
        memo[i] = arr[i][0];
        for(var j in arr[i]) {
          if(arr[i][j] > memo[i]) {
            memo[i] = arr[i][j];
          }
        }
      }
  return memo;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
```

- 만일 for/in 루프 몸체에서 새로운 프로퍼티를 정의한다면, 해당 프로퍼티가 루프에서 열거될지 여부는 자바스크립트 구현에 달려있다.


## 2. 레이블(label)
- 어떤 문장 앞에라도 그 앞에 식별자 이름과 콜론을 삽입함으로써 레이블을 붙일 수 있다. `식별자: 문장`
- 중첩된 루프 안에서 레이블과 함께 식별자로 `break`, `continue`와 함께 사용이 가능하다.
```javascript
outerloop:
for(var i = 0; i < 10; i++) {
    innerloop:
    for(var j = 0; j < 10; j++) {
        if (j > 3) break;
        if (i == 2) break innerloop;
        if (i == 4) break outerloop;
        console.log("i: " + i + " j: " + j + "<br>");
    }
}
console.log("Total i: " + i + " j: " + j + "<br>");
```


## 3. try/catch/finally
- try/catch/finally 문은 예외 처리 기법이다. [참고 - Function() 11.예외 처리](http://til.wiki.dev/JavaScript/Function())
- _try_ 절은 예외가 발생할지도 모르는 코드 블록을 정의하는 역할을 한다.
- _catch_ 절은 try 블록 내부에서 예외가 발생할 경우 호출되는 문장 블록이다.
- _finally_ 절은 try 블록에서 일어난 일에 관계없이 항상 실행이 보장되어야 할 뒷정리용 코드가 포함된다. finally 절은 try 블록이 `return`,`break`,`continue`로 끝났다고 해도 실행된다.
```javascript
var i = 0, total = 0, a = [1,2,"three",4,5,6,7,8,9,10];
while (i < a.length) {
    try {
        if((typeof a[i] != 'number') || isNaN(a[i])) { //만일 숫자가 아니라면
            continue; //루프를 다음 반복으로 넘어간다. 즉, "three"의 경우를 더하는 것을 건너뛴다.
        }
        total += a[i];
    }
    finally {
        i++; //continue를 사용했음에도 불구하고 이 문장은 실행된다.
    }
}

console.log(total); //52가 기록된다.
```


## 4. with
- with 문은 유효 범위 체인을 임시로 변경하려 할 때 쓰인다. `with(객체) 문장`
- 직관적이지 않고 느리기 때문에 쓰지 않는게 좋다.
