#웹 브라우저와 자바스크립트
_from JavaScript Definitive Guide_

## 1. 웹 브라우저 환경
- 클라이언트 측 자바스크립트에서는 Document 객체가 HTML 문서를 나타내며 Window 객체는 브라우저 창(또는 프레임)을 나타낸다.
- 이벤트 구동 프로그래밍 모델: 클라이언트 측 자바스크립트에서 웹 브라우저는 사용자 입력이 들어올 때 이벤트를 생성하여 프로그램에게 알려준다.
- 웹상에서 자바스크립트의 역할: 정보의 획득과 전달을 용이하게 함으로써 사용자의 브라우징 경험(Browsing Experience)을 증대시킨다.
- 겸손한 자바스크립트(unobtrusive JavaScript): 자바스크립트가 스스로 이목을 끌려고 해선 안 된다. 무리하게 참견하고 나서면 안 된다.
    - 자바스크립트 코드와  HTML 마크업을 분리한다. `.js` 외부 파일을 HTML 페이지 안에 `<script src=*.js>` 형태로 포함시켜야 한다.
    - 단계적으로 성능을 축소한다. 자바스크립트는 HTML을 강화하기 위한 용도로써 이해되고 설계되어야 한다.
    - HTML 페이지의 접근성을 해치지 않아야 한다.
- `<script>` 태그를 통해서 작성된 자바스크립트 코드는 설령 다른 블록으로 지정되어 있다 하더라도 하나의 스크립트로 인식되어 변수와 함수를 다른 블록에서도 사용할 수 있다. 중요한 것은 HTML 페이지가 실행 컨텍스트라는 점이다.
```HTML
<!doctype html>
<html>
<head>
    <title>Today's Date</title>
    <script language="javascript">
        function print_todays_date() {
            var d = new Date();
            document.write(d.toLocaleString());
        }
    </script>
</head>
<body>
The date and time are: <br>
<script language="javascript">
    print_todays_date(); //위에서 정의한 함수가 호출된다.
</script>
</body>
```

- HTML에서 `onclick` 어트리뷰트의 반환값이 false이면 해당 태그는 동작하지 않는다.


## 2. URL 안의 자바스크립트
- URL로도 자바스크립트를 클라이언트 측에 포함시킬 수 있다. 이를 모조프로토콜(pseudoprotocol) 이라 부른다. `<a href="javascript:alert('Hello world!')">Click me</a>`
    - 이러한 모조프로토콜을 응용해서 북마클릿(bookmarklet)이라는 간단한 프로그램을 만들 수 있다.


## 3. 자바스크립트 프로그램의 실행
- onload 이벤트 처리기
    - 문서의 파싱이 끝나고 모든 스크립트가 실행된 후 그리고 모든 보조 내용이 전부 불려온 후에 브라우저는 onload 이벤트를 발생시켜 Window 객체에 onload 이벤트 처리기로 등록된 모든 자바스크립트 코드를 실행한다.
    - onload 처리기는 `<body>` 태그의 onload 어트리뷰트를 설정함으로써 등록할 수 있다. 
    - onload 처리기가 구동되는 때는 문서의 읽기 작업과 파싱 작업이 완전히 끝난 후이기 때문에 모든 문서 엘리먼트는 자바스크립트 코드를 사용하여 조작할 수 있다.
    - onload 처리기는 문서 파싱 이후에 호출되기 때문에 `documnet.write()`를 호출해선 안된다.