# 브랜치(Branch) 다루기

[브랜치 관리 모델](http://amazingguni.github.io/blog/2016/03/git-branch-%EA%B7%9C%EC%B9%99)

- 브랜치 만들기 [참고](https://git-scm.com/book/ko/v1/Git-브랜치-브랜치와-Merge의-기초)
`branch`라는 명령어를 통해 `develop`이라는 브랜치를 만든다.
`checkout`이라는 명령어를 통해 해당 브랜치로 이동한다.
```bash
git branch develop
git checkout develop
```

`checkout` 명령어에 `-b` 옵션을 주면 브랜치를 만들면서 브랜치로 이동한다.
```bash
git checkout -b develop
```

__현재 작업 중인 브랜치에서 커밋하지 않은 채로 이동하게 되면 충돌이 일어나 변경이 불가능하다.__

작업이 완료된 브랜치를 병합(merge)할 수 있다. 
```bash
git checkout master
git merge develop
```
두 브랜치가 같은 곳을 바라보는 상태가 된다.

브랜치를 삭제하고 싶다면 `-d` 옵션을 주자.
```bash
git branch -d develop
``` 



- [Merge와 Rebase의 차이](https://backlog.com/git-tutorial/kr/stepup/stepup1_4.html)
  - merge: 변경 내용의 이력이 모두 그대로 남아 있기 때문에 이력이 복잡해짐.
  - rebase: 이력은 단순해지지만, 원래의 커밋 이력이 변경됨. 정확한 이력을 남겨야 할 필요가 있을 경우에는 사용하면 안됨.
  - 개인적인 사용 원칙: 브랜치끼리 병합(master와 develop)할때는 Merge를 사용하고 브랜치 내에서 병합(develop)을 할때에는 Rebase를 쓰자

- Merge
- Rebase
- TAG
