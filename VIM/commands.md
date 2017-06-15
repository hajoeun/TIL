# VIM 명령어

### 저장 & 종료 명령어
- `ZZ`: 저장하고 종료
- `:w [filename]`: 저장(filename이 있으면 해당 파일명으로 저장[다른 이름으로 저장])
- `:q`: 종료
- `:wq [filename]`: 저장하고 종료
- `:wq! [filename]`: 강제로 저장하고 종료

### 입력 모드 진입 명령어
- `i`: 커서 앞에서 입력 모드 시작
- `I`: 커서가 있는 라인 가장 앞에서 입력 모드 시작
- `a`: 커서 뒤에서 입력 모드 시작
- `A`: 커서가 있는 라인 가장 뒤에서 입력 모드 시작
- `o`: 커서 바로 아래줄을 새로 생성하고 입력 모드 시작 
- `O`: 커서 바로 위줄을 새로 생성하고 입력 모드 시작
- `R`: replace 모드, 삽입이 아니라 새로운 글을 덮어쓰는 입력 모드 시작

### 이동 관련 명령어
- `h`: 좌 / `j`: 하 / `k`: 상 / `l`: 우
- `[#]gg`: #행으로 이동, #이 생략되면 1행으로 이동
- `[#]G`: #행으로 이동, #이 생략되면 마지막 행으로 이동
- `:#`: #행으로 이동
- `CTRL + G` / `:file`: 문서의 위치 정보를 하단 상태바에 표시

### 플러그인 설치 관련
- `vim`으로 설정 화면에 들어간 뒤에 `:PluginInstall` 라고 입력하면 플러그인을 설치한다.
- **추천** 설정화면 들어가지 않고 `vim +PluginInstall +qall` 라고 입력하면 플러그인 설치 후 알아서 종료

### 추천 플러그인
```bash
Plugin 'mattn/emmet-vim' #emmet (ctrl + y +, 을 눌러 실행 가능)
Plugin 'tpope/vim-sensible' #기본 설정을 해주는 플러그인
Plugin 'scrooloose/syntastic' #보다 많은 문법을 지원하는 플러그인
Plugin 'https://github.com/itchyny/lightline.vim' #하단바를 예쁘게 만들어주는 플러그인
Plugin 'https://github.com/tpope/vim-surround' #괄호와 태그등 감싸는 부분을 하이라이팅
Plugin 'https://github.com/skammer/vim-css-color' #css 컬러를 보여줌
Plugin 'https://github.com/Shutnik/jshint2.vim' #jshint
```
