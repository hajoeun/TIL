# 튜토리얼
_[출처](https://facebook.github.io/react-native/docs/tutorial.html)_


## ReactNative 특징
- 리액트의 철학을 바탕으로 만들어진 하이브리드 앱 개발 프레임워크 "Learn Once, Write Anywhere"
- 문법적인 특징 
    1. ES2015(ES6)를 기준으로 한다. 
    2. 고로 화살표 함수를 지원한다.
    3. JSX(JavaScript XML)를 템플릿 언어로 사용한다. (자바스크립트 내부의 마크업 언어)
- Virtual DOM: 속도 저하를 야기하는 DOM 업데이트를 효과적으로 처리하기 위해 만든 가상 DOM, 성능 향상에 기여한다.
    1. 데이터가 업데이트되면, 전체 UI를 Virtual DOM에 리렌더링한다.
    2. 이전 Virtual DOM의 내용과 현재의 내용을 비교한다.
    3. 변경 사항만 실제 DOM에 반영한다.
- Components: React는 모두 Component를 기반으로 동작한다.


## JSX(JavaScript Extensible)
- 사실 JSX는 JS + XML인데 XML 자체가 확장 가능한 마크업 언어라는 의미를 가지기에 JSX의 X를 Extensible로 이해해도 될 것 같다.
- 자바스크립트 코드 안에 마크업 문법을 작성할 수 있다. 원한다면 `{}` 중괄호를 열어서 자바스크립트 문법을 표기할 수 있다.
- 중괄호 안에서 자바스크립트 문법을 표기할 때 if-else 구문을 작성할 수 없는데, 이는 삼항연산자(ternary)로 해결하면 된다.


## Component and AppRegistry
- `AppRegistry`라는 객체에 `Component` 객체를 등록하면 원하는 앱이 빌드된다.
- 이를 위해 `AppRegistry.registerComponent` 함수를 사용한다. `AppRegistry.registerComponent('AppName', () => AppName)`
- JSX 문법에서 등장하는 태그들은 컴포넌트로 정의 `Text`
 
## Props
- 대부분의 컴포넌트는 개발자가 만드는대로 새로운 파라미터를 만들어낼 수 있다. 이렇게 만들어진 파라미터, 속성은 `props`라는 객체에 저장된다.
- `class` 키워드로 선언하고 `extend` 키워드로 컴포넌트를 상속 받아서 새로운 컴포넌트를 선언할 수 있다.
- 그 과정에서 중괄호를 열고 `{this.props.name}`로 만들어두면 이 컴포넌트가 다른 컴포넌트의 내부에 JSX 문법의 태그명으로 사용되고 여기서 name 이라는 프로퍼티를 지정해주게 되면 그 값이 태그명으로 사용된 컴포넌트의 틀로 뿌려진다.


## State
- 데이터를 컨트롤 하는데 사용되는 두가지 타입 중 하나인 `state` (나머지는 `props`)
- 상태가 변하는 데이터에 `state`를 사용한다. 기본적으로 `state`변수를 초기화 시키는 단계를 거치고 이후에 `setState`라는 함수를 사용해서 상태를 변경한다.
- 비동기에 의해 변하는 데이터를 컨트롤할 때 유용하다.


## Style
- 스타일을 지정하기 위해 CSS 파일을 따로 둘 필요가 없다. 자바스크립트 객체로 스타일을 정의하면 된다. (단, Camel Case로 속성을 정의해야 함!)
- `StyleSheet.create`라는 함수의 객체로 스타일 객체를 선언하면 된다.
- 그렇게 함수에 의해 선언된 객체는 역시 중괄호 안에서 객체로 사용된다. `<Text style={styles.red}>RED</Text>`
- 객체가 지정되지 않은 상황에 스타일을 적용하려면 중괄호 안에서 즉시로 객체를 만들어주면 적용 가능하다.


## 높이와 넓이
- 고정된 면적값: `height`와 `width`으로 지정할 수 있는데 단위는 없다. 픽셀로 표현된다.
- 가변된 면적값: 가용 공간 내에서 동적으로 변하는 값인 `flex`라는 속성으로 가변 면적을 할당할 수 있다. 이때 부모가 `height` 혹은 `flex` 값을 가지고 있어야만 가변 값이 표현된다.


## 레이아웃과 플렉스박스(Flexbox)
- 플렉스 박스: `flex` 속성을 가진 부모 및의 자식 엘리먼트들을 일컫는 말
- `flexDirection`: 플렉스박스가 어떤 형태/방향으로 표현될 것인지 정의할 수 있다. `row`(default) 수평이나 `column` 수직으로 표현할 수 있다.
- `justifyContent`: 플렉스박스가 어떤 식으로 분포될 것인지를 정의할 수 있다. `flex-start`(default), `flex-end`, `center`, `space-around`, `space-between`
- `alignItems`: 플렉스박스가 어떻게 정렬될 것인지 정의할 수 있다. `flex-start`, `flex-end`, `center`, `stretch`
