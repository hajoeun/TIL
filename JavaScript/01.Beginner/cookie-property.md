#Cookie property, 쿠키와 클라이언트 측 지속성
_from JavaScript Definitive Guide Ch19_

## 1. Introduction to cookie
- Document 객체에 존재하는 'cookie' 라는 프로퍼티는 웹 브라우저에 기억력을 부여함으로써 한 페이지에서 입력되었던 자료를 다른 페이지에서 스크립트나 서버 측 프로그램이 사용할 수 있게 해준다.
- '쿠키'는 이름을 가진 소량의 데이터이며 웹 브라우저에 의해 저장되며 특정 웹 페이지나 웹 사이트와 연결되어 있다.
- 쿠키는 문자열 프로퍼티로서, 웹 페이지에 적용되는 하나 또는 그 이상의 쿠키를 읽고, 생성하고, 변경하고 삭제할 수 있다.
- 각 쿠키에는 이름과 값 이외에도 그 쿠키의 유효 기간, 가시 범위 보안등을 제어하는 선택적 어트리뷰트들이 존재할 수 있다. (`expires`,`max-ages`,`path`,`domain`,`secure`)


## 2. Usage of cookie
- 쿠키 저장하기
    - `document.cookie = "version=" + encodeURIComponent(document.lastModified);` 쿠키의 값에는 세미콜론, 쉼표, 공백이 포함될 수 없기에 `encodeURIComponent()`를 이용해서 인코딩 해준다.
    - `document.cookie = "version=" + document.lastModified + "; max-age=" + (60*60*24*365);` max-age 어트리뷰트는 초 단위로 유효 기간을 지정할 수 있다. 예제는 1년의 유효기간을 설정했다.
    - 쿠키는 적은 양의 데이터를 가끔 저장하려는 목적으로 설계되었다. (브라우저들은 쿠키당 4킬로바이트, 총 300개 이상의 쿠키, 웹 서버당 20개의 쿠키를 기본적으로 가지고 있다.)
- 쿠키 읽기
    - 문자열이라는 점을 이용해서 `split()`,`indexOf()`,`substring()` 메소드를 이용해서 쿠키값 단위로 분리할 수 있다.
    - 쿠키값에 따라 `decodeURIComponent()` 함수로 디코딩 해줘야하는 경우도 있다.
    - 이때, 쿠키의 값은 읽을 수 있지만 어트리뷰트는 읽을 수 없다는 점에 유의해야 한다. (어트리뷰트는 '설정만' 할 수 있다.)
    - `visitordata=name:Lala&color:orange&visits:3` 책 예제 01의 쿠키가 이와 같이 나오는데, 쿠키는 기본적으로 쿠키 키와 쿠키값으로 이루어져있다. 등호(=)로 키와 값을 나누고 키는 세미콜론으로 구분한다. 해당 값은 임의로 콜론과 앰퍼센드로 구분자를 두었다. 