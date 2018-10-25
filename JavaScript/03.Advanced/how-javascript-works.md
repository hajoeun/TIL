# 자바스크립트의 동작 원리 정리

## 1. 자바스크립트 엔진
  - 소스 코드를 읽고 실행하는 부분
  - 엔진의 종류: V8(Chrome), Spidermonkey(Firefox), Chakra(Edge), JavaScriptCore(Safari)
  - V8의 혁신: 인터프리터(Interpreter)와 컴파일러(Compiler)가 함께 일하도록 만들었다.
    - 인터프리터는 소스코드를 거의 즉시 실행한다. 그래서 빠르게 시작할 수 있다.
    - 컴파일러는 기계어로 코드를 번역하기 때문에 최적화를 해준다. 코드 실행 자체가 빨라진다.
    - 둘의 장점을 융합했다. 빠르게 일단 시작해서 필요할때마다 한줄씩 최적화된 기계어로 번역한다. 
    - JIT(Just In Time)이라는 용어가 이때 등장한다. 컴파일러가 JS로 작성된 코드가 기계어로 번역되어야하는 순간에 때를 맞춰서(Just In Time) (최적화된)기계어로 번역한다. 이때 생성된 코드는 캐싱되어 이후 실행될 때 재사용된다. 
    - JIT Compile 방식이 인터프리터와 다른 점은 한번 해석된 기계어를 캐시해둔다는 점에 있다. 기존의 컴파일러가 번역한 코드를 매번 수정하지 않는 것처럼 한번 해석된 코드는 재해석하지 않는 다는 점이 기존의 인터프리터와 다른 점!
    - JIT는 경영에서도 사용되는 용어인데 적시 생산 시스템이라고 부르며 낭비 제거, 재고의 최소화를 목적으로 필요한 순간에만 제품을 생산하는 형태의 시스템을 뜻한다.
    - 사실 V8이 처음 JIT 방식을 도입한건 아니다. 리습(LISP)에서 John McCarthy에 의해 1960년에 JIT를 최초로 사용했다고 한다.
    - 의문점은 __그럼 굳이 인터프리터가 필요한가__하는 점인데 현재 이해한 바로는 컴파일러는 일단 소스코드를 잘게 쪼개서 받아드리지 않는다. 때문에 그 잘게 떠먹여주는(?) 일을 인터프리터가 하는 것 같다. 
  - 최적화 테크닉 '인라인 캐싱'
    - monomorphic: 같은 모양의 여러 객체(object)를 하나의 주소에 저장해두고 프로퍼티를 참조할 때 캐시된 곳에서 한번에 꺼내오는 기법
    - polymorphic: 다른 모양의 여러 객체를 최대 4곳에 나눠서 저장해두고 프로퍼티를 참조할 때 4곳을 조회해서 데이터를 반환하는 기법
    - megamorphic: 네가지 종류 이상의 객체인 경우에 발생하는 상황 (성능 저하의 원인)
    - 최대한 mono로 가야하는데, class로 할 수도 있고 매번 같은 형태의 객체로 만들어주면 해결된다. (특정 프로퍼티에 값이 비었더라도 빈 상태로 일일이 넣어주거나)
  - 참고: [위키피디아](https://ko.wikipedia.org/wiki/JIT_%EC%BB%B4%ED%8C%8C%EC%9D%BC), 나무위키(https://namu.wiki/w/JIT), 블로그1(https://blog.perfectacle.com/2017/08/07/js-jit-compile/), 블로그2(http://devtimothy.tistory.com/94?fbclid=IwAR19hQXARg75Bcav30Hldy0qqQaNMUZh-Gcs8Pgmrp8NMzgCDSDmmaFBQpM)


## 2. 메모리 누수
  - 참고: [블로그1](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-4%EA%B0%80%EC%A7%80-%ED%9D%94%ED%95%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%8C%80%EC%B2%98%EB%B2%95-5b0d217d788d)