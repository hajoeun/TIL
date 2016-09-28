#jQuery 입문
_from [TRY jQuery](http://try.jquery.com/) by Code School_

## 1. jQuery란?
- _"Write less, Do more"_ 적게 쓰고 많은 일을 할 수 있도록 도와주는 자바스크립트 라이브러리
- jQuery가 하는 일들
    1. find: HTML 문서에서 엘리먼트를 찾는다.
    2. change: HTML 내용을 수정한다.
    3. listen: 유저가 무엇을 하는지 기다리고 그에 따라 반응한다.
    4. animate: 페이지 위의 내용에 애니메이션 효과를 준다.
    5. talk: 새로운 컨텐츠를 패치한다.
- __Document Object Model(DOM)__ : 브라우저에 의해 트리 형태의 구조체, 자바스크립트를 이용해서 쉽게 HTML 엘리먼트들을 찾을 수 있다.
    - HTML 문서가 브라우저에 의해서 DOM으로 전환된다.
    - 서버에 저장된 마크업(HTML) 문서를 브라우저가 읽어서 DOM을 형성하고 스크립트(JavaScript)에 의해 제어된다.   
    - 브라우저마다 조금씩 다른 형태의 DOM을 만드는데, jQuery가 중간에서 이를 도와 호환성을 높여준다. 대부분의 브라우저에서 정상적으로 동작하는 자바스크립트 코드를 만들 수 있다.
- 기본적인 jQuery 사용법은 `jQuery(<code>);`의 형태를 띈다. 이때 'jQuery'라는 문자열은 '$'로 대체할 수 있다. 따라서 `$(<code>);`의 형태가 된다.
    - DOM을 제어하기 위해서 CSS의 선택자를 사용하는 것과 유사하게 엘리먼트를 제어할 수 있다. 예를 들어 `$('h1')`은 \<h1\> 엘리먼트를 선택한 것이다.
    - 선택된 엘리먼트 뒤에 점 표기법(dot notation)으로 메소드를 호출 할 수 있다. 예를 들어 `$('h1').text("Hello, World")`는 \<h1\> 엘리먼트에 "Hello, World"라는 문구를 패치하는 것이다. 
- `$(document).ready(function() {<code>});`와 같은 형태로 HTML 문서가 DOM으로 변환된 이후에 동작하도록 정의해야한다. 그렇지 않으면 없는 요소를 찾아서 제어하려 시도하여 에러가 발생한다.
- 다른 자바스크립트 라이브러리와 마찬가지로 `<script src="jquery.mim.js"></script>`의 형태로 `</body>` 바로 직전에 적어주면 jQuery를 사용할 수 있다. 실제 이를 이용한 코드를 첨부하기 위해선 jQuery를 불러오는 구문 뒤에서 코드를 작성해야만 정상적으로 동작한다.


## 2. DOM 검색하기
- 자손 엘리먼트를 검색하기 위해선 `$('#destinations li);`와 같은 형태로 선택자 간에 띄어쓰기를 해주면 된다. 예제의 경우 `#destinations`라는 ID를 가진 엘리먼트의 자손이 `li` 태그를 가진 엘리먼트이다. (*여기서 자손은 직계 자손이 아닌 하위 자손 모두를 포함한다.)
    - 직계 자손만을 검색하기 위해선 `>` 연산자를 넣어준다. `$('#destinations > li);`와 같은 경우는 직계 자손 `li`만을 검색한다.
- 서로 다른 엘리먼트를 동시에 검색하기 위해선 `$('#korea, #japan);`과 같은 형태로 한다. `,` 연산자로 두개의 선택자를 구분한다.
- 복수의 엘리먼트가 있을 경우 필터(filter)를 적용할 수 있다. `$('#destinations li:last);` 혹은 `$('#destinations li:first);`와 같은 형태로 선택될 엘리먼트를 선정할 수 있다. `odd`, `even`과 같은 옵션도 존재한다.
- __순회하기(traversing)__
    - 복수의 선택자를 넣어서 검색하는 기법은 좋지 않다. 더 나은 대안은 메소드를 활용하는 것이다. 예를 들어 자손 엘리먼트를 검색하기 위해서 `find()`메소드를 사용할 수 있다. `$('#destinations').find('li')`처럼 하는 것이 검색에 있어서 더 빠르다.
    - 필터도 마찬가지다. `$('li:first');`보다 `$('li').first();`가 더 빠른 방법이다.
    - 두번째 li 엘리먼트를 탐색하기 위해서 `$('li').first().next();`를 사용할 수 있다. 끝에서 바로 앞에 위치한 요소를 탐색하기 위해서 `$('li').last().prev();`를 사용할 수 있다.
    - 직계 자손을 탐색하기 위한 메소드도 존재한다. `$('li').parent();`, `$('#destinations').children();`
    

## 3. DOM 제어하기
- jQuery를 사용해서 DOM의 엘리먼트를 제어할 수 있다. 특별히 마크업을 추가하고 싶은 경우, `var price = $('<p>From $399.99</p>');`와 같이 변수를 할당하고 메소드를 이용하여 DOM을 제어할 수 있다.
    - `.append(<element>)` 엘리먼트를 자식 중 막내로 덧붙임, `.prepend(<element>)` 자식 중 첫째로 덧붙임, `.after(<element>)` 형제 중 동생으로 덧붙임, `.before(<element>)` 형제 중 형으로 덧붙임
    - _`<element1>.appendTo(<element2>)` 엘리먼트2에 자식 중 막내로 엘리먼트1을 덧붙임_
- 이벤트 핸들러
    - 특정 이벤트가 발생하는 것을 기다리는 함수를 정의할 수 있다. `$('button').on('click', function() {<실행될 코드>});` 버튼이 클릭되면 특정 행동을 하는 이벤트 핸들러를 정의했다.
    - 이벤트가 발생한 엘리먼트를 제어하기 위해서 `$(this)`를 사용할 수 있다.
    - 이벤트가 발생한 엘리먼트에서 가장 가까운 특정 요소를 찾기 위해서 `$(this).closest('<#ID>')`과 같이 사용할 수 있다.
    - `$('#container').on('click', '.filter', function() {<실행될 코드>});`의 형태로 특정 영역의 엘리먼트 값에 이벤트 핸들러를 제한하여 사용할 수 있다.
- HTML 문서 상의 어트리뷰트로 정의된 `data` 값을 jQuery에서 찾아서 사용할 수 있다.
    - 만약에 엘리먼트 중 `<li data-price="100">`이라고 정의되어 있다면 `$('li').data('price')`의 형태로 데이터 값을 읽을 수 있다.
    - `.addClass('highlight')`, `.removeClass('highlight')`와 같은 형태로 클래스를 추가하고 제거할 수도 있다.
    
    
## 4. DOM 위에서 놀기
- `.slideDown()`, `.slideUp()`, `.slideToggle()`을 이용하여 엘리먼트를 슬라이드로 움직일 수 있다. 
- `.on()`의 확장
    - `$('button').on('<이벤트>', function() {});`, \<이벤트\> 자리에 다양한 이벤트가 사용될 수 있다. 
        - 마우스 이벤트 `click`, `dbclick`, `focusin`, `focusout`, `mousedown`, `mouseup`, `mousemove`, `mouseout`, `mouseover`, `mouseleave`, `mouseenter`
        - 키보드 이벤트 `keypress`, `keydown`, `keyup`
        - 폼 이벤트 `blur`, `select`, `focus`, `submit`, `change`
    - `$('button').on('click', <함수 이름>);`, 함수를 직접 정의하지 않고 이름만 가져와서 호출할 때는 `()`를 사용하지 않는다.
- `.val()` 메소드는 엘리먼트에 있는 값을 읽어오거나 입력하는 메소드다. `$('#name').val()`, `$('#cost').val(5,000)`과 같이 사용한다.
- 이벤트를 제어하는 과정에서 이벤트의 대상이 되는 엘리먼트 뿐만 아니라 그 엘리먼트를 감싸고 있는 엘리먼트에도 영향을 미치게 된다. 이를 'bubble up'이라고 부른다. 이를 방지하는 메소드가 `event.stopPropagation()`이다.
- anchor 태그인 `<a>`태그는 내부적으로 click 이벤트와 페이지 이동 이벤트를 가지고 있다. 페이지 이동이 없이 click 이벤트만을 수행하는 `<a>` 태그의 경우 `<a href="#"></a>`의 형태를 띄는데 이때 `#`은 해당 페이지의 최상단으로 이동하게 만든다. 이를 방지하는 메소드가 `event.preventDefault()`이다.
    - 앞선 두개의 event 메소드들은 이벤트 핸들러가 매개변수를 가질때 동작한다. 예제의 경우 매개변수로 `event`를 가진 것이다.
    

## 5. CSS 제어하기
- `$(this).css()` 메소드를 이용해서 CSS를 제어할 수 있다. 이때 메소드는 두개의 매개변수를 가지는데 첫번째는 어트리뷰트고 두번째는 값이다. 즉, `$(this).css('background-color', '#252b30');`처럼 사용할 수 있다. 또한 하나의 변수로 객체를 가질 수 있다. 이 경우 `$(this).css({'background-color': '#252b30', 'border-color': '1px solid #777'});`처럼 사용할 수 있다.
- `.show()`, `.hide()` 메소드를 사용해서 엘리먼를 숨기거나 보일 수 있다.
- `.animate({'top': '-10px'})`처럼 애니메이션 효과를 추가할 수 있다. 