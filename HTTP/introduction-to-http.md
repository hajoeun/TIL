# HTTP

## 간단한 몇가지 정보
    1. http는 Hypertext Transfer Protocol의 약자다.
    2. 인터넷으로 데이터를 통신하는 툴은 기본적으로 클라이언트 프로토콜, 해석기, 제어기를 갖는다.
        - 클라이언트 프로토콜은 HTTP, FTP, TELNET, SMTP가 있다.
        - 제어기는 키보드, 마우스 등의 입력 장치를 말한다.
        - 해석기는 문서를 해석하는 도구인 브라우저들 크롬, 파이어폭스, 익스플로러 등을 말한다.
    3. 리소스(데이터)에 접근하기 위해서 고유 주소가 필요한데 그것이 URL(Uniform Resource Locator)다.
        - 주소는 URL - 리소스를 식별하는 주소
        - 이름은 URN - 리소스를 식별하는 이름
        - 이 둘을 합쳐서 URI(Uniform Resource Identifier) - 리소스를 식별하는 간결한 문자열
        - URL 문법 - `[scheme]://[username]:[password]@[host]:[port]/[path];[parameter]?[query]#[fragment]`
    4. 포맷 - 어떤 종류의 리소스인가?
        - MIME(Multipurpose Internet Mail Extensions): 메시지 엔티티 본문의 컨텐츠를 설명하는 표준화된 이름
        - MIME Type - `text`,`image`,`audio`,`video`,`application`,`multipart`,`message`
    5. HTTP 통신은 TCP/IP를 통해 이뤄진다.


### 출처
- [오픈소스 읽어주는 남자](http://kwongyo.tistory.com/15)
- [D2 CAMPUS](http://www.slideshare.net/deview/d2-campus-http)
