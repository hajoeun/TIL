# Rootless, 루트리스

- [엘 캐피탄에 도입된 새로운 보안체계 루트리스(Rootless) 끄고 켜는 방법](http://macnews.tistory.com/3408)

#### 요약
    - 맥 종료 후 재부팅하면서 `cmd + R`
    - 터미널에서 `csrutil disable --without debug` 입력
    - 재부팅하고 터미널에서 `csrutil status`로 확인 (disabled 상태)  