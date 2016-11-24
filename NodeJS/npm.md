# npm 사용 팁

1. `npm install [package] -g`
- 설명: 패키지를 전역으로 설치하는 명령어다. 
- 에러1: 권한 문제가 발생한 경우, `sudo`를 사용하지 말고 `sudo chown -R $USER /usr/local`로 권한을 지정해주자. 혹은 macOS의 [루트리스 문제](http://til.wiki.dev/macOS/Terminal/rootless)를 확인해보자

2. `npm help json`
- `package.json` 파일 작성 규칙을 알려주는 명령어다.