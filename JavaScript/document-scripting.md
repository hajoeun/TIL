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
 