# Github Pages

## Github Pages란?
- Github에서 제공하는 호스팅 서비스, 간단한 프로젝트 소개 혹은 블로그로 활용이 가능하다.
- 개인용 페이지(혹은 사용자 및 조직 페이지), 프로젝트 페이지로 나뉜다.
- 개인용 페이지: 계정당 하나의 페이지만 가질 수 있다. 페이지 주소는 `username.github.io`이다. _(e.g. 블로그)_
- 프로젝트 페이지: 계정이 가지는 프로젝트만큼의 프로젝트 페이지를 가질 수 있다. 페이지 주소는 `username.github.io/projectname`이다. _(e.g. 블로그 게시판)_


## 시작하기
- 설정 페이지 찾아가기: github 프로필 페이지에서 프로젝트로 이동 > setting 탭으로 이동

### 01. 멋있게 시작하기: Jekyll로 시작하기
- Jekyll은 블로그를 만들어주는 일종의 프레임워크이다.
- 최근에는 jekyll-admin까지 배포되어 보다 쉽게 페이지를 구성할 수 있게 되었다.


### 02. 재밌게 시작하기: HTML로 시작하기
#### 01. gh-pages 브랜치로 시작하기
- git에서 새로운 브랜치 생성, **브랜치 이름은 `gh-pages`이어야 함**
- 설정 페이지 'GitHub Pages'의 'Source'에서 'gh-pages branch' 선택
- Save 클릭
- 'Update site'의 'Launch automatic page generator' 버튼 클릭
- 순서에 따라 진행
- `gh-pages` 브랜치에 생성된 `index.html`를 코딩하며 페이지 만들기

#### 02. mater 브랜치로 시작하기
- 설정 페이지 'GitHub Pages'의 'Source'에서 'master branch' 선택
- Save 클릭
- 'Update site'의 'Launch automatic page generator' 버튼 클릭
- 순서에 따라 진행
- `master` 브랜치에 생성된 `index.html`를 코딩하며 페이지 만들기

#### 03. docs/ 폴더로 시작하기
- master 브랜치의 루트에 `docs` 폴더 만들기
- `docs` 폴더에 `index.html` 파일 만들기
- 설정 페이지 'GitHub Pages'의 'Source'에서 'master branch /docs folder' 선택
- Save 클릭
- `index.html`을 코딩하며 페이지 만들기