# Inheritance(상속)

## 1. 프로토타입(prototype) 방식
- `Object.create(obj)`메소드를 이용해서 프로토타입 방식으로 상속을 할 수 있다.
- `new Object(obj)`를 사용하면 단지 참조하는 객체를 만들 뿐 상속할 수는 없다.
```javascript
var myMammal = {
    name : 'Herb the Mammal',
    get_name : function() {
        return this.name;
    },
    says : function() {
        return this.saying || '';
    }
};

var myCat = Object.create(myMammal); //myMammal을 상속하는 객체 myCat을 만든다.
myCat.saying = "meow";

myCat.get_name = function() {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.name); //프로토타입 체인에 의해 'Herb the Mammal'이 기록된다.
console.log(myCat.hasOwnProperty('name')); //'myCat'이 가진 속성에는 name이 존재하지 않기에 'false'가 기록된다.
```


## 2. 함수를 사용한 방식
- 함수를 사용해서 __private__ 속성을 가지는 객체를 상속할 수 있다.
```javascript
var mammal = function(spec) {
    var that = {};

    that.get_name = function() {
        return spec.name;
    };
    that.says = function() {
        return spec.saying || '';
    };

    return that;
};

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);

    that.get_name = function() {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var myCat = cat({name: 'Citty'}); //myCat의 spec으로 이름을 Citty로 설정한다.
console.log(myCat.get_name());
```


## 3. 생성자 훔치기, constructor stealing (위장 객체, 전통적 상속)
- 하위 타입 생성자 안에서 상위 타입 생성자를 호출하는 것
- 함수는 단순히 코드를 특정 컨텍스트에서 실행하는 객체일 뿐임!
```javascript
function SuperType(){
  this.colors = ["red", "blue", "green"];
}

//function SubType() {} 
//SubType.prototype = new SuperType(); // 기존의 상속법

function SubType() {
  SuperType.call(this); // 생성자를 훔쳐서 상속을 일으키는 코드
}

var instance1 = new SubType();
instance1.colors.push('black');

console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors);
```
- 단점: 메서드 재사용이 불가능하다. 상위 타입의 프로토타입에 정의된 메서드는 하위 타입에서 접근할 수 없다.


## 4. 조합 상속
- 프로토타입과 생성자 훔치기 패턴을 조합해 두 패턴의 장점만을 취하는 접근법
- 프로토타입 체인을 써서 프로토타입에 존재하는 프로퍼티와 메소드를 상속하고 생성자 훔치기 패턴으로 인스턴스 프로퍼티를 상속하는 것
```javascript
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType(name, age){
  SuperType.call(this, name);

  this.age = age;
}
```
- 일반적이고 공유할만한 메소드는 프로토티입 체인으로 선언하고, 매개변수를 전달함으로 프로퍼티를 정의하는데 사용되는 메소드는 생성자 훔치기 패턴으로 정의한다.
- __자바스크립트에서 가장 많이 사용되는 상속 패턴__이지만 상위 타입 생성자가 항상 두 번 호출된다는 점에서 비효율적인 부분도 있다.


## 5. 프로토타입 상속 by 더글라스 크록포드
_(1번과 같은 내용이지만 조금 더 구체적으로 다룬다.)_
- 엄격히 정의된 생성자를 쓰지 않고도 상속을 구현하는 방법, 프로토타입으로 새 객체를 생성할 때 반드시 커스텀 타입을 정의할 필요는 없다는 점에서 착안한 기법
```javascript
// 임시 생성자를 만들어 주어진 객체를 생성자의 프로토타입으로 할당한 다음 임시 생성자의 인스턴스를 반환한다.
function object(o) { 
  function F(){};
  F.prototype = o;
  return new F();
}

var person = {
  name: "Joeun Ha",
  friends: ["Yaboong", "Peter Cha"]
};

var anotherPerson = object(person);
anotherPerson.name = "Goeun";
anotherPerson.friends.push("Greg");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Abby");

console.log(person.friends); // [ 'Yaboong', 'Peter Cha', 'Greg', 'Abby' ] 가 기록된다.
```

- 이 개념을 공식적으로 수용하여 만든 메소드가 `Object.create()` 메소드다. 다른 객체의 프로토타입이 될 객체와 옵션으로 객체에 추가할 프로퍼티를 담은 객체를 매개변수로 받아 프로토타입 상속을 만든다. (ES5부터 적용됨)


## 6. 기생 상속
- 상속을 담당할 함수를 만들고, 어떤 식으로든 객체를 확장해서 반환한다.
```javascript
function createAnother(original) {
  var clone = Object.create(original); // 함수를 호출하여 새 객체를 생성
  clone.sayHi = function(){ // 객체를 확장
    console.log("hi");
  };
  return clone; // 확장된 객체를 반환
}

var person = {
  name: "joeun",
  friends: ["goeun", "haeun"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();
```
- 기생 상속을 이용해 객체에 함수를 추가하면 생성자 패턴과 비슷한, 함수 재사용과 관련된 비효율 문제가 생긴다.


## 7. 기생 조합 상속
- 기생 상속을 써서 상위 타입의 프로토타입으로부터 상속한 다음 결과를 하위 타입의 프로토타입에 할당한다.
```javascript
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype); // 객체 생성
  prototype.constructor = subType; // 객체 확장
  subType.prototype = prototype; // 객체 할당
}
```
- 참조 타입에서 가장 효율적인 상속 패러다임으로 평가 받는다.