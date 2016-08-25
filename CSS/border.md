# Border, 테두리
_from MDN **with funny**_
- 테두리를 지정하는 CSS Style 속성군에 대해 알아본다.

## 1. border
- `border`는 아래와 같이 사용한다.
```
  border: 1px;
  border: 2px dotted;
  border: medium dashed green;
```
- 위와 같이 `border: <br-width> <br-style> <color>`의 형태로 적용 가능한 `border`는 각각의 하위 항목에 대해 [Formal syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/border#Formal_syntax)와 같은 항목으로 적용할 수 있다.


## 2. 하위 속성 구분
- `border-width`, `border-style`, `border-color` 3개의 대장이 있다. 그외에 `border-image`, `border-radius` 2개의 부대장이 존재한다.
- 속성 대장들은 방향에 속할 수 있다. `border-방향-color`처럼 적용 가능하며 방향에 해당하는 값은 `right`,`left`,`bottom`,`top` 네가지가 존재한다.
  - 속성 부대장 중 image 부대장은 특정 이미지를 테두리로 지정하도록 이끄는데, 다섯 종류의 부하를 `border-image-부하`의 형태로 다룰 수 있다. 부하에 해당하는 값은 `outset`,`repeat`,`slice`,`source`,`width` 이다.
  - 속성 부대장 중 radius 부대장은 테두리의 곡률을 지정하도록 이끄는데, 대장들과 마찬가지로 방향에 속할 수 있다. 다만 모서리에만 속할 수 있다는 점이 다르다. `border-모서리-radius`처럼 적용 가능하며 모서리에 해당하는 값은 `bottom-left`, `bottom-right`,`top-left`,`top-right` 네가지가 존재한다.


## 3. border-width
- 테두리의 두께를 정하는 속성이며 `border-방향-width`의 형태로 방향을 지정할 수 있다.
- 값은 `border-right-width: 1px;` 형태로 지정하며 직접 길이(length) 단위 값을 지정하는 방법 외에 `thin`,`medium`,`thick`등 상수값으로 지정할 수 있다.
- 길이의 단위에 대해서는 [이곳](http://til.wiki.dev/CSS/all-about-length)에서 자세하게 설명한다.


## 4. border-style
- 테두리의 형태를 정하는 속성이며 `border-방향-style`의 형태로 방향을 지정할 수 있다.
- 값은 `border-style: dotted;` 형태로 지정하며 `none`,`hidden`,`dotted`,`dashed`,`solid`,`double`,`groove`,`ridge`,`inset`,`outset`으로 지정할 수 있다. 정확한 형태는 [Output](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Output)을 참조


## 5. border-color
- 테두리의 색상을 정하는 속성이며 `border-방향-color`의 형태로 방향을 지정할 수 있다.
- 값은 `border-right-color: red;` 형태로 지정하며 기본 형태인 `border-color`를 이용하면 동시에 네가지 방향을 정할 수 있다. `border-color: <top> <right> <bottom> <left>`의 순서로 지정이 가능한데 지정하는 갯수에 따라서 지정 하는 위치가 달라진다. `border-color: <top&bottom> <right&left>`,`border-color: <top> <right&left> <bottom>`,`border-color: <all>`


## 6. border-image
- 테두리에 이미지를 입히는 속성이며 `border-image-속성`의 형태로 가져오는 이미지의 속성을 정할 수 있다.
- 값은 `border-image: url("/images/border.png") 30 30 repeat;` 형태로 지정하며 값은 순서대로 `<source>`,`<height>`,`<width>`,`<repeat>`이다.


## 7. border-radius
- 테두리에 곡률을 지정하는 속성이며 `border-모서리-radius`의 형태로 특정 모서리의 곡률을 정할 수 있다. 모서리는 `bottom-left`, `bottom-right`,`top-left`,`top-right`로 정의된다.
- 값은 `border-radius: 10px;` 형태로 지정하며 기본 형태로 네 방향의 모서리를 지정할 수 있다. [참고](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#Syntax)
