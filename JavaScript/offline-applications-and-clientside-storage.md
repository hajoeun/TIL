#Offline applications and client-side storage
_from Professional JavaScript_


## 1. 오프라인 탐지
- `navigator.onLine` 프로퍼티를 사용해서 인터넷에 연결된 상태인지를 점검할 수 있다. (true/false 반환)


## 2. 애플리케이션 캐시
- HTML5의 애플리케이션 캐시(appcache)는 일반적인 브라우저 캐시와는 분리된 영역에 존재한다.
- 페이지의 애플리케이션 캐시에 어떤 자원을 저장할지는 '매니페스트 파일'에 지정한다. (이 파일의 경로는 html 태그의 속성 값으로 지정할 수 있다. `<html manifest="/offline.manifest">`
- 애플리케이션 캐시는 자바스크립트의 `applicationCache` 객체를 사용해서 동작 여부를 확인할 수 있다.


## 3. 데이터 스토리지
- 웹 어플리케이션이 발전하면서 사용자 정보를 클라이언트에 저장힐 필요성도 증가했다. (로그인 정보, 선호하는 설정 등)
- 이를 위해 첫번째로 도입된 방법이 '[쿠키(cookie)](http://til.wiki.dev/JavaScript/cookie-property)'다. 
    - 본래 HTTP 쿠키의 설계 의도는 세션 정보를 클라이언트에 저장하는 것이었다. '지속적 클라이언트 상태: HTTP 쿠키'나는 명세에서 서버에서 Set-Cookie라는 HTTP 헤더에 세션 정보를 담아서 모든 HTTP 응답에 포함하도록 규정했다.
    - 이곳에 담긴 쿠키는 이름이 'name'이고 값이 'value'이다. 전송 시에 이름과 값이 모두 URL 인코딩을 거친다. 브라우저가 세션 정보를 저장한 후에 요청을 보내는 경우에 Cookie HTTP 헤더를 함께 전송한다. 서버는 이 정보를 이용해 각 클라이언트 요청을 구분한다.
    - 쿠키는 특성상 도메인에 종속된다. 때문에 로컬에서만, 허가된 컴퓨터에서만 쿠키에 저장된 정보를 볼 수 있고 다른 도메인에서는 이를 이용할 수 없다.
    - 서브쿠키: 쿠키 제한(개수 20개)을 뛰어넘기 위해 사용되는 개념, 쿠키 하나에 여러 가지 데이터를 저장하는 방법론이다. 서브쿠키는 대부분 쿼리스트링 형식으로 만든다. `name=name1=value1&name2=value2&name3=value3`
- WHATWG에 의해 정의된 웹 스토리지는 쿠키의 한계를 극복하기 위해 등장했다. `localStorage`와 `globalStorage` 두 가지 객체가 있다.
    - Storage 타입: 이름-값을 쌍으로 담도록 만들어진 형태, 객체처럼 동작하며 몇가지 메소드가 존재한다. `clear()`, `getItem(name)`, `key(index)`, `removeItem(name)`, `setItem(name, value)`
    - sessionStorage 객체: 세션이 유지되는 동안만 데이터를 저장하며 저장된 데이터는 브라우저를 닫을 때 모두 사라지는 객체 (새로고침을 해도 유지된다.) Storage의 인스턴스임으로 같은 메소드를 사용할 수 있다.
    - globalStorage 객체: 세션이 끝나도 데이터를 유지하고 특별한 접근 제한을 설정하는 객체, 이를 사용하기 위해선 특정 도메인을 지정해야 한다. (더 이상 지원하지 않는다.)
    - localStorage 객체: globalStorage를 수정해서 클라이언트에 데이터를 저장하도록 만든 객체, 반드시 미리 정의된 규칙을 따라야 접근이 가능하다.
    - storage 이벤트: Storage 객체가 변경될 때마다 document에서 storage 이벤트가 발생한다. 이 이벤트 객체에는 네가지 프로퍼티가 존재한다. `domain`, `key`, `newValue`, `oldValue`
    - 일반적으로 브라우저는 localStorage를 최대 5MB정도로 제한한다.
- IndexedDB는 브라우저에서 사용하는 구조화된 데이터 저장소이다. 자바스크립트 객체를 쉽게 저장하고 가져오며, 쿼리와 검색도 가능한 API. `var indexDB = window.indexedDB || window.msIndexedDB;`
    - 데이터베이스: 테이블 대신 객체 저장소를 이용해 데이터를 저장하는 데이터베이스의 특징을 가지는 IndexedDB
    - 객체 저장소: 데이터베이스 연결을 수립한 다음 단계는 객체 저장소와의 상호작용이다. 객체 저장소에 대한 참조를 만들면 `add()`, `put()`을 통해서 데이터를 추가/수정할 수 있다.
    - 트랜잭션: 데이터를 읽거나 변경할 때마다 모든 변경사항은 트랜잭션으로 묶어서 처리한다. `var transaction = db.transaction();`의 형태로 사용하고 기본적으로는 읽기 전용이다. 매개변수에 옵션을 주고 모드를 바꿀 수 있다. `add()`, `put()`, `get()`, `delete()`, 메소드를 사용할 수 있다.
    - 커서를 이용한 쿼리: 데이터가 여러 개 필요할 때 생성하는 포인터인 '커서'를 생성해야 한다. `direction`, `key`, `value`, `primaryKey` 프로퍼티와 `update()`, `delete()`, `continue()`, `advance()` 메소드를 사용해서 조작한다.
    - 키 범위: IDBKeyRange의 인스턴스, 커서를 사용했을 경우 조금 비효율적인 부분을 더 유연하게 사용할 수 있도록 해준다. `only()`, `lowerBound()`, `upperBound()`, `bound()` 메소드로 키 범위를 정의할 수 있다.
    - 커서 방향 설정: `openCursor()` 메소드의 두번째 매개변수는 방향을 나타내는 숫자형 값이다. `IDBCursor.NEXT`, `IDBCursor.NEXT_NO_DUPLICATE`, `IDBCursor.PREV`, `IDBCursor.PREV_NO_DUPLICATE`로 방향을 설정한다.
    - 인덱스: 객체 저장소에 여러 가지 키가 필요한 경우, 프라이머리 키와 인덱스를 둔다. 
    - 데이터 불일치 문제가 종종 발생할 수 있다. 이를 해결 하기 위해 데이터베이스를 처음 열 때 `onversionchange` 이벤트 핸들러를 할당해서 데이터베이스가 업데이트 되는 것을 추적하고 불일치가 되는 것을 미연에 방지한다.
- 세션이 끝나도 데이터를 유지하려면 `save()` 메소드를 이용해 이름 붙은 데이터 저장소에 명시적으로 저장해야 한다.