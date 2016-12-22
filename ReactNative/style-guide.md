# React / JSX 스타일 가이드라인
- [참고](https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9C)

## CSS in Javascript
### 왜 자바스크립트 안에 CSS를 정의해야 하는가? [참고](https://speakerdeck.com/vjeux/react-css-in-js)
  - 규모 있는 CSS 코딩을 할 때 발생하는 문제들 때문 (*여기서 말하는 규모 있는 CSS란 백명이 넘는 개발자가 동시에 어떤 프로젝트를 코딩하는 경우를 의미한다.)
  1. Global Namespace
    - 특정 엘리먼트의 스타일을 변경하기 위해 많은 개발자들이 클래스명이나 아이디로 스타일을 입히는데, 이는 전역에 존재하는 변수가 된다.
    - 이런 결과로 여러명의 개발자가 작업을 하다보면 어디서 어떻게 자신의 엘리먼트에 스타일이 변경되었는지 알기가 어렵게 된다. 
    - 사실, 전역 변수 사용을 줄이는 건 상식적인 것이다. 다양한 언어에서 전역 변수 사용을 자제하고 지역 변수를 사용하길 권장하고 있다.
    - 여태 CSS만 달리 전역 변수가 사용되어왔다. FB에서는 이를 해결하기 위해 `.button/container`와 같이 사용 지역을 제한하는 방법을 도입했다.
  2. Dependencies
    - 스타일 파일을 나누고 이를 필요한 경우마다 파일의 앞에 `require()` 해서 사용하는 방법을 사용하니 중복도 발생하고 상당히 번거로웠다.
    - 그래서 `cx()`라는 함수를 만들어서 필요한 엘리먼트에 직접 가져다 쓰도록 만들었다. 
  3. Dead Code Elimination
  4. Minification
  5. Sharing
  6. Non-deterministic Resolution
  7. Isolation

## display 속성 대체하기
- `display: none` 설정이 불가능하다. 그래서 `flex: 0`으로 없애는 방법이 있다.
