# VIM 설정하기

#### Syntax Highlight
1. 루트 디렉토리에서 `vimrc` 파일을 만든다. (`vi ~/.vimrc`)
2. 아래와 같은 코드를 적어 넣는다.
```
if has("syntax")
    syntax on
endif
```

#### Auto Indent
```
set autoindent
set cindent
```

#### Line Counter
```
set nu
```