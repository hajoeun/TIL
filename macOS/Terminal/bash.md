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