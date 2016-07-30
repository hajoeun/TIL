#Dictionary of Methods(메소드 사전)

## propertyIsEnumerable()
- `hasOwnProperty()` 메소드와 마찬가지로 프로퍼티의 이름을 담은 문자열 매개변수를 하나 받아서, 이 이름의 프로퍼티를 객체가 상속받지 않고 직접 정의했는지 검사한다.
- __무엇보다도 이 프로퍼티가 for/in 루프를 사용하여 열거될 수 있는지 검사한다.__
```javascript
var o = {x:1, y:2};
o.propertyIsEnumerable("x"); //true: 프로퍼티가 존재하며 열거할 수 있다.
o.propertyIsEnumerable("valueOf"); //false: 상속받은 프로퍼티다.
```


## isPrototypeOf()
- 이 메소드의 객체가 매개변수로 주어진 객체의 프로토타입 객체라면 true를 반환한다.
```javascript
var o = {};
Object.prototype.isPrototypeOf(o); //true
Object.isPrototypeOf(o); //false
o.isPrototypeOf(Object.prototype); //false
Function.prototype.isPrototypeOf(Object);  //true
```
