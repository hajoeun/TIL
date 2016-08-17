# Today I Learned

JoeunHa가 오늘 새로 배운 것을 다음의 규칙으로 커밋(commit)합니다. ([JayJin의 TIL](https://github.com/milooy/TIL)을 근간으로 작성합니다.)

## 작성 규칙
- 커밋을 위한 커밋을 하지 않는다.
- 문서 생성은 [GFM (Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/)을 따른다. (확장자 `.md`)
- 언어나 기술명으로 폴더를 만든다. (root 폴더에 문서를 만들지 않는다.)
- 파일명은 영어로 한다.

## 로컬에서 띄우기
[gollum](https://github.com/gollum/gollum)과 [pow](http://pow.cx/)를 사용한다.

### gollum 설치
```bash
$ [sudo] gem install gollum
```

### pow 설치 및 제거
```bash
$ curl get.pow.cx | sh

$ curl get.pow.cx/uninstall.sh | sh
```

### 사용법
다음 설정을 통해 브라우저에서 [http://til.wiki.dev/](http://til.wiki.dev/)로 접속한다.

```bash
$ cd ~/.pow
$ ln -s path/to/this_local_repo til.wiki
$ open http://til.wiki.dev/
```

