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
