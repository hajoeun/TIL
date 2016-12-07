# 튜토리얼
_[출처](https://facebook.github.io/react-native/docs/tutorial.html)_


## ReactNative 특징
- 리액트의 철학을 바탕으로 만들어진 하이브리드 앱 개발 프레임워크
- 문법적인 특징 
    1. ES2015(ES6)를 기준으로 한다. 
    2. 고로 화살표 함수를 지원한다.
    3. JSX(JavaScript XML)를 템플릿 언어로 사용한다. (자바스크립트 내부의 마크업 언어)

## Component and AppRegistry
- `AppRegistry`라는 객체에 `Component` 객체를 등록하면 원하는 앱이 빌드된다.
- 이를 위해 `AppRegistry.registerComponent` 함수를 사용한다. `AppRegistry.registerComponent('AppName', () => AppName)`
- JSX 문법에서 등장하는 태그들은 컴포넌트로 정의 `Text`
 
## Props
- 대부분의 컴포넌트는 개발자가 만드는대로 새로운 파라미터를 만들어낼 수 있다. 이렇게 만들어진 파라미터, 속성은 `props`라는 객체에 저장된다.
- `class` 키워드로 선언하고 `extend` 키워드로 컴포넌트를 상속 받아서 새로운 컴포넌트를 선언할 수 있다.
- 그 과정에서 중괄호를 열고 `{this.props.name}`로 만들어두면 이 컴포넌트가 다른 컴포넌트의 내부에 JSX 문법의 태그명으로 사용되고 여기서 name 이라는 프로퍼티를 지정해주게 되면 그 값이 태그명으로 사용된 컴포넌트의 틀로 뿌려진다.


## 



