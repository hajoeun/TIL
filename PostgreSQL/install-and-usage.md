# PostgreSQL 설치와 사용

## Homebrew를 통한 설치
- `brew install postgresql`

## pgAdmin을 통한 DB 관리
- 커맨드라인만으로 제어하기 힘들 때 사용하기 좋은 GUI 툴인 pgAdmin을 사용하여 DB를 제어할 수 있다.

## psql 명령어로 DB 사용하기
- `psql -h localhost`를 입력하면 컴퓨터 계정 이름과 같은 DB가 열린다. (커맨드라인으로 DB 접속)
- 만약에 위의 명령어에서 권한 문제가 발생한다면 (_does not exist 같은 에러가 발생한다._) `createdb` 명령어로 계정 이름과 같은 DB를 만들어주고 다시 시도하면 된다.
- `psql -h localhost`는 `psql`과 같은 명령어로 인식된다.
- `psql --list`는 PostgreSQL DB에 존재하는 데이터베이스 목록을 보여준다.

## DB Shell 사용하기
- `\c [dbname]` 명령어로 DB를 이동할 수 있다.
- `\d+` 명령어로 현재 DB에 존재하는 테이블의 목록을 볼 수 있다.
- `ALTER DATABASE [dbname] OWNER TO [username]` 명령어로 DB의 주인을 변경할 수 있다. 