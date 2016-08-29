# 위키피디아 API

## 1. Document
- [위키피디아 공식 API 페이지 참고](https://en.wikipedia.org/w/api.php)


## 2. 예제
- 위키피디아 검색을 위한 함수를 아래와 같이 만들 수 있다.
- 동일 출처 정책(Same-Origin Policy) 때문에 데이터 타입을 'jsonp'를 사용해준다는 점에 유의하자. [참고 - javascript ajax 크로스 도메인 요청하기](http://adrenal.tistory.com/16)
```javascript
var wikiSearch = function(keyword) {
  $.ajax({
    url:'https://ko.wikipedia.org/w/api.php?action=opensearch&search='+ keyword +'&format=json&imlimit=20', // 위키피디아 api를 호출한다.
    dataType: 'jsonp', // 데이터 타입은 'json'이 일반적인데 여기서는 'jsonp'를 사용해야 한다.
    type: 'GET',
    success: function(data){ // 호출에 성공하면 실행될 함수부분
    }
  });
};
```
