# Git 설정
 
## Fork 이후 패치를 위한 설정 
- [참고](http://blogs.atlassian.com/2013/07/git-upstreams-forks/)
```bash
git remote add upstream [git@원본 주소]
git fetch upstream
git checkout master
git merge upstream/master
git push origin
```
