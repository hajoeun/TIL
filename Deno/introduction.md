# Introduction to Deno

- Node를 만든 사람이 10년만에 다시 만든 JavaScript 런타임 환경
- Deno(디노)는 Node의 음절 단위로 앞뒤를 바꿔서 이름 붙인 일종의 말장난(애너그램)

## [Deno가 Node와 다른 점](https://namu.wiki/w/Deno#s-2)

1. 내장된 비동기 로직이 모두 Promise로 만들어졌다. 전역에서 await을 사용할 수 있다.
2. 라이브러리 별로 특정 권한을 설정해줘야한다. (--allow-* 옵션)
3. 메타 빌드 시스템의 변경 GYP -> GN
4. ES6 스타일로 모듈 시스템을 구현. URL로 디펜던시를 로드. No more npm!
5. 모듈 로딩 시에 확장자명을 반드시 적어주어야 한다. (index.ts, index.js)
6. 타입스크립트로 작성해도 이해한다! No more babel for server

## 유용한 기능

1. Format code
`fmt` 명령어를 이용하면 코드의 포맷을 자동으로 맞춰준다. `lint --fix`와 같은 일을 기본적으로 내장하고 있음.
