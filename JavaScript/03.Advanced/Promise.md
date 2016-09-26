http://www.2ality.com/2014/09/es6-promises-foundations.html

```javascript
setTimeout(function () { // (A)
    console.log('Second');
}, 0);
console.log('First'); // (B)
```

출력 결과가 `Firsrt Second`? 왜? Continuation Passing Style 때문!

프로미스 객체는 약속을 담은 객체인데- 성공/실패 했을 때 어떤 행동을 취할지 약속하고 이 행동을 첫번째/두번째 매개변수로 받아서 호출하도록 해준다.
