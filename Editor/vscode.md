## vim 사용하기 - Press and Hold
- VScode에서 vim을 사용하기 위해 [플러그인](https://github.com/VSCodeVim/Vim)을 설치했다.
- 커서를 이동하기 위해 `l`을 꾹 누르고 있는데 커서가 움직이지 않았다. 다른 문자를 입력할 수 있는 툴팁이 떴고 설정을 바꿔야한다는 생각이 들었다.
- 설정에 'vim press'와 같은 키워드를 검색했으나 특별한 옵션이 없었다. 구글에 검색. 'vscode vim long press'
- 역시나 같은 이슈를 겪고 있는 사람이 있었다. [Stackoverflow](https://stackoverflow.com/questions/39972335/how-do-i-press-and-hold-a-key-and-have-it-repeat-in-vscode)

### 해결책
Mac OS 기본 설정을 비활성화 하는 것이 핵심. 아래의 명령어를 입력하면 된다. 이제 vscode을 껐다가 다시 켜보자.
```bash
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
```

다시 해당 옵션을 활성화하고 싶다면 아래의 명령어를 입력하면 된다.
```bash
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool true
```
