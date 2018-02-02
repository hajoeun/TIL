# bash shell

### 설정
- 루트 디렉토리에 `.bash_profile` 혹은 `.bashrc`라는 파일에 경로를 설정한다. 이를 통해 터미널에서 각종 명령어를 즉시로 내릴 수 있게 된다.

- <예시> 안드로이드 패스 설정
```bash
  export ANDROID_HOME=~/Library/Android/sdk
  export PATH=${PATH}:${ANDROID_HOME}/tools
  export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

- 이후에 이 설정을 반영하기 위해선 터미널을 재시작하거나 `source ~/.bash_profile` 명령어로 패스가 적용되도록 해야한다.

- 터미널에 컴퓨터/사용자 이름 부분 숨기기 및 변경하기 
```bash
 export PS1="> "
```
위와 같이 설정하면 `> `라고 터미널에 표시됨! 자세한 스펙은 [링크](https://www.ibm.com/developerworks/linux/library/l-tip-prompt/)를 참고.

### 폴더 만들기
- `mkdir [폴더명]`
- `mkdir -p [폴더생성루트]` -p 옵션은 폴더생성루트를 따라 폴더가 없으면 만들면서 최종 루트까지 폴더를 만들어주는 명령어다.
