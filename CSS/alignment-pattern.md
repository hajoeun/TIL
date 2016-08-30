# 정렬 패턴

## 1. 단일 요소 정렬
```css
.container {
  height: 300px;
  line-height: 300px;
}
```
- 줄간격(행간)을 조절해서 가운데 정렬하는 트릭
- 이때 단일 요소를 포함하고 있는 요소의 크기가 고정값이어야한다.


## 2. 고정 높이를 가진 복수 요소 정렬
```css
html,
body {
  height: 100%;
}

.container {
  height: 100%;
}

.container .contents {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
  height: 100px;
  text-align: center;
}
```
- 절대적인 위치를 지정하는데, 이때 내부요소인 `contents`의 높이값이 반드시 존재해야 한다.
- __이게 제일 좋은 방법인듯!__

## 3. 가변 높이를 가진 복수 요소 정렬
```css
.container {
  display: table;
  height: 100%;
}

.container .contents {
  display: table-cell;
  height: 100%;
  vertical-align: middle;
}
```
- 테이블을 만들어서 내부 요소를 하나만 두고 이 안에서 내용이 가변하는 복수의 컨텐츠일때 반응하도록 처리한다.
