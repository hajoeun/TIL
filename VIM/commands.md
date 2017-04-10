# VIM 명령어

### 종료 명령어
- `ZZ`: 저장하고 종료
- `:q!`: 저장 없이 종료

### 플러그인 설치 관련
- `vim`으로 설정 화면에 들어간 뒤에 `:PluginInstall` 라고 입력하면 플러그인을 설치한다.
- **추천** 설정화면 들어가지 않고 `vim +PluginInstall +qall` 라고 입력하면 플러그인 설치 후 알아서 종료

### 추천 플러그인
```bash
Plugin 'mattn/emmet-vim' #emmet (ctrl + y +, 을 눌러 실행 가능)
Plugin 'tpope/vim-sensible' #기본 설정을 해주는 플러그인
Plugin 'scrooloose/syntastic' #보다 많은 문법을 지원하는 플러그인
Plugin 'https://github.com/itchyny/lightline.vim' #하단바를 예쁘게 만들어주는 플러그인
Plugin 'https://github.com/tpope/vim-surround' #괄호와 태그등 감싸는 부분을 하이라이팅
Plugin 'https://github.com/skammer/vim-css-color' #css 컬러를 보여줌
Plugin 'https://github.com/Shutnik/jshint2.vim' #jshint
```