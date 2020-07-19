### Package
- main 이라는 패키지를 사용하고 컴파일러가 엔트리 포인트로 삼는 함수가 된다.
- 다른 패키지를 import 해서 사용할 수 있는데 public 함수는 첫글자가 대문자, private는 소문자로 시작한다.

### Variables
- `const`, `var`를 사용하는데 자바스크립트의 `const`, `let`과 동일하다.
- 타입을 지정하기 위해서는 `var name string = "string"`과 같은 형태로 지정해준다.
- 약식으로 선언하는 방법은 `name := "string"`으로 하는 방식이 있는데 함수 내에서만 동작한다.

### Function
- 함수를 선언할 때 인자의 타입도 변수를 선언하는 것과 동일하게 선언할 수 있다.
- 재밌는 점은 멀티 리턴을 지원한다는 점, 이를 위해 인자 선언 뒤에 리턴 타입을 선언해줘야한다.

### Formatting
- Deno의 포맷팅과 유사하게 저장했을 때 알아서 포맷을 맞춰주며 재미난 점은 사용하지 않는 패키지를 알아서 지워주기도 한다는 점.