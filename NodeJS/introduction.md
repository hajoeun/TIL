# Introduction to NodeJS
_from Node.js 인 액션

## Introduction
  - Node.js? "크롬의 자바스크립트 실행 환경에 기반을 둔 빠르고 확장성 있는 네트워크 애플리케이션을 만들기 위한 플랫폼"
  - 비동기와 이벤트를 사용한다.
  - 데이터 집약적 실시간 어플리케이션(DIRTy: Data-intensive real-time)을 위해 설계됐다.

## 다중 채팅방 애플리케이션 만들기
  - skip
  
## 노트 프로그래밍의 기본
  1. 코드를 관리하는 방법
    - 노드의 기능 관리와 재사용
        - 코드를 재사용하지만 전역 범위에 영향을 미치지는 않는다. 
            1. `exports`로 모듈 분리
                - `exports.myFunc = function() {}`의 형태로 선언해서 모듈화가 가능하다.
                - `var exFunc = require(/...PATH/FILE_NAME); exFunc.myFunc();`의 형태로 모듈을 불러와 사용할 수 있다. 
                    - 파일명 확장자가 `.js`라면 빼고 입력 가능하다.
                    - 파일 경로가 `./`로 시작하면 실행 중인 프로그램 파일과 같은 디렉터리에서 모듈을 찾는다.
            2. `module.exports`로 모듈 분리
                - `module.exports` 메커니즘은 모듈이 하나의 변수나 함수 또는 객체를 반환할 수 있게 한다.
                - `module.exports`는 `exports`의 참조를 끊어놓는다.
            3. node_modules 디렉터리로 모듈 재사용하기
                - 모듈의 위치와 상관없이 모듈을 사용할 수 있는 매커니즘
                - node_modules 디렉터리에 넣어두기만 하면 경로 없이 `require(FILE_NAME)`으로 사용할 수 있다.
                - 다만 오픈소스에 적합한 방법은 아니다. 
              
  2. 비동기 프로그래밍의 동작 원리 
    - 일회성 이벤트에 대한 응답 방식
    - 반복적인 이벤트에 대한 처리 방식
    - 비동기 로직의 실행 순서를 정하는 방식
    