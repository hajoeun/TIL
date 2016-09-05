#문서 스크립팅
_from JavaScript Definitive Guide_


## 0. Introduction
- Document 객체와 이 객체가 가지고 있는 프로퍼티와 매소드에 대해 배워본다.
- **Document Object Model(DOM)** 은 문서를 구성하는 객체에 어떻게 접근할 것인가를 정의하는 API다.

## 1. 레거시 DOM (DOM 레벨 0)
- Document 객체의 집합인 레거시 DOM에 대해 알아본다.
```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>[Ch15] Example-02</title>
</head>
<body style="background-color: #aaa; color: #fff;">
<a href="" onclick="listAnchors(window.document)">Click me</a> <br>
<a href="" name="one">1</a> <br>
<a href="" name="two">2</a> <br>
<a href="" name="three">3</a> <br>

<script>
// p.409 레거시 DOM 예제

    function listAnchors(d) {
        var new_win = window.open("", "navwin",
                                 "menubar=yes, scrollbar=yes, resizeable=yes," +
                                 "width=500, height=300");
        new_win.document.write("<h1>Navigation Window: " + d.title + "</h1>");

        for(var i =0; i < d.anchors.length; i++) {
            var a = d.anchors[i];
            var text = null;
            if (a.text) text = a.text;
            else if (a.innerText) text = a.innerText;
            if ((text == null) || (text == '')) text = a.name;

            new_win.document.write('<a href="#' + a.name + '"' + 'onclick="opener.location.hash=\'' + a.name + '\'; return false;">');
            new_win.document.write(text);
            new_win.document.write('</a><br>');
        }
        new_win.document.close();
    }
</script>
</body>
</html>
```


## 2. 문서 순회
- 자바스크립트를 이용해서 DOM 트리를 순회할 수 있다.
```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Ch15] Example-03</title>
    <script>
    // p.425 문서의 노드 순회
        function countTags(n) {
            var numtags = 0;
            var list = [];
            if (n.nodeType == 1) {
                numtags++;
            }
            var children = n.childNodes;
            for (var i = 0; i < children.length; i++) {
                numtags += countTags(children[i]);
            }
            return numtags;
        }
    </script>
</head>
<body onload="alert('This document has ' + countTags(document) + ' tags')">
This is a <i>sample</i> document.
</body>
</html>
```


## 3. 문서 내 엘리먼트 찾기
- 노드를 순회하면서 문서 내 특정 엘리먼트를 찾아낼 수 있다.
- HTML은 태그의 대소문자를 구분하지 않는다는 점을 인지하자.
- `document.getElementByTagName()`, `document.getElementById()`을 이용한다.
```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Ch15] Example-05</title>
    <!--클래스나 태그 이름을 사용하여 HTML 엘리먼트 선택하기-->
</head>
<body>
<div>
    <h1 class="h1 class">Test Page</h1>
    <p>Hello, world!</p>
    <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ol>
    <!--<a href="" onclick="alert(getElements('h1 class'))">Click me</a>-->
    <!-- 검사 > console 탭에서 직접 테스트하는 것이 더 정확하다. `getElements('','li');`-->
</div>

<script>
    // p.431
    function getElements(classname, tagname, root) {
        if(!root) root = document;
        else if (typeof root == "string") root = document.getElementById(root);

        if(!tagname) tagname = "*";

        var all = root.getElementsByTagName(tagname);

        if(!classname) return all;

        var elements = [];
        for(var i = 0; i < all.length; i++) {
            var element = all[i];
            if (isMember(element, classname))
                elements.push(element);
        }
        return elements;

        function isMember(element, classname) {
            var classes = element.className;
            if(!classes) return false;
            if(classes == classname) return true;

            var whitespace = /\s+/;
            if(!whitespace.test(classes)) return false;

            var c = classes.split(whitespace);
            for(var i = 0; i < c.length; i++) {
                if(c[i] == classname) return true;
            }

            return false;
        }
    }
</script>
</body>
</html>
```


## 4. 문서 수정하기
- 결과적으로 순회, 찾기 등의 기능은 수정을 위해 존재한다.
- 이를 위해 `appendChild()`를 이용한다.
```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Ch15] Example-06</title>
    <!--리스트의 엘리먼트를 오름차순으로 정렬-->
</head>
<body>
<script>
    // p.432
    function sortkids(e){
        if(typeof e == "string") e = document.getElementById(e);

        var kids = [];
        for(var x = e.firstChild; x != null; x = x.nextSibling)
            if(x.nodeType == 1) kids.push(x);

        kids.sort(function (n,m) {
            var s = n.firstChild.data;
            var t = m.firstChild.data;
            if(s < t) return -1;
            else if(s > t) return 1;
            else return 0;
        });

        for(var i = 0; i < kids.length; i++) e.appendChild(kids[i]);
    }
</script>
<ul id="list">
    <li>4</li>
    <li>3</li>
    <li>2</li>
    <li>1</li>
</ul>

<button onclick="sortkids('list')">Sort list</button>
</body>
</html>
```

```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Ch15] Example-07</title>
    <!--문서 내용을 대문자로 바꾸기-->
</head>
<body>
<script>
    // p.434
    function upcase(n) {
        if (n.nodeType == 3) {
            n.data = n.data.toUpperCase();
        } else {
            var kids = n.childNodes;
            for (var i = 0; i < kids.length; i ++) upcase(kids[i]);
        }
    }
</script>

<p>h</p>
<button onclick="upcase(document)">Change to upper case</button>
</body>
</html>
```

- DocumentFragment를 사용하면 노드들을 위한 임시 저장소를 만들 수 있다.
```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Ch15] Example-09</title>
    <!--DocumentFragment를 사용하여 작업하기-->
</head>
<body>
<script>
    // p.437
    function reverse(n) {
        if(typeof n == "string") n = document.getElementById(n);
        var f = document.createDocumentFragment();

        //n의 자식을 f로 옮기면 해당 자식은 n에서 자동으로 삭제된다.
        while(n.lastChild) f.appendChild(n.lastChild);

        n.appendChild(f);
    }
</script>
<ul id="list">
    <li>4</li>
    <li>3</li>
    <li>2</li>
    <li>1</li>
</ul>
<button onclick="reverse('list')">Reverse</button>
</body>
</html>
```