# SQL 문법
- _`[]` 대신 원하는 내용을 넣으면 된다. 'grave accent(억음, 억기호)'로 감싸주면 된다._
- _`?[]` 는 옵션 값이다. 있어도 되고 없어도 된다._
- _대문자로 표기된 명령어는 소문자로 해도 무관하다. 다만 명령어와 데이터를 구분을 위해 명령어를 대문자로 표기해주기도 한다._
- _`;` 세미콜론으로 명령어를 마무리 해야 동작한다._

### DATABASE - 데이터베이스
- 생성 `CREATE DATABASE [데이터베이스명] CHARACTER SET utf8 COLLATE utf_general_ci;`

- 삭제 `DROP DATABASE [데이터베이스명];`

- 열람 `SHOW DATABASE;`

- 선택 `USE [데이터베이스명];`

### TABLE - 테이블
- 테이블 생성
```bash
CREATE TABLE [테이블명] (
    [칼럼명1] [데이터타입],
    [칼럼명2] [데이터타입]
);
```

- 테이블 목록 열람 `SHOW TABLES;`

- 테이블 스키마 열람 `DESC [테이블명]`

- 테이블 제거 `DROP TABLE [테이블명];`

#### 데이터 삽입
- `INSERT INTO [테이블명] VALUES ([항목1],[항목2],[항목3],...);`
- `INSERT INTO [테이블명] ?[([칼럼1],[칼럼2],[칼럼3],...)] VALUES ([항목1],[항목2],[항목3],...);`
- `INSERT INTO playlist (title, musician, duration, year) VALUES ('Sally', 'Bibi Bourelly', '3:56', 20160222);`

#### 데이터 갱신
- `UPDATE [테이블명] SET [칼럼1]=[칼럼1의 값], [칼럼2]=[칼럼2의 값] WHERE [대상이 될 칼럼]=[칼럼의 값];`
- `UPDATE playlist SET title='Ballin', duration='3:21' WHERE title='Sally';`

#### 데이터 삭제
- 행단위로 데이터를 삭제 `DELETE FROM [테이블명] ?[WHERE [삭제하려는 칼럼명]=[값]];`
- 테이블의 전체 데이터(모든 행)를 삭제 `TRUNCATE [테이블명];` _테이블에 외부키가 없다면 `DELETE`보다 훨씬 빠르다.
- 테이블을 삭제 `DROP TABLE;`

#### 데이터 조회
- `SELECT [칼럼명1], [칼럼명2] FROM [테이블명] ?[GROUP BY [칼럼명]] ?[ORDER BY [칼럼명] ?[ASC | DESC]] ?[LIMIT [조회할 행의 수]];`
- `SELECT title, musician FROM playlist ORDER BY year ASC LIMIT 3;`
- `SELECT * FROM playlist WHERE musician='Bibi Bourelly';`

- `WHERE` operator
    - `BETWEEN`: 사이의 값을 원할 때 `SELECT * FROM music WHERE year BETWEEN '20160101' AND '20161231';`
    - `<>`: 같지 않은 값을 원할 때 (!==)
    - `LIKE`: 유사한 데이터를 가진 값을 원할 때 `SELECT * FROM music WHERE musician LIKE 'B%';`
    - `IN`: `OR` 연산자의 중복 사용 없이 사용 가능 `SELECT * FROM music WHERE musician IN ('Bibi Bourelly','Jodi Benson');` == `SELECT * FROM music WHERE musician='Bibi Bourelly' or musician='Jodi Benson';` 
    
- 그룹핑: `SELECT * FROM [테이블명] GROUP BY [그룹핑 할 기준 칼럼명]`, `SELECT sex,sum(age),avg(age) FROM GROUP BY sex;`
- 정렬: `SELECT * FROM [테이블명] ORDER BY [정렬의 기준으로 사용할 열 ?[DESC | ASC]]`
- 색인(index): 조회할 때 원하는 행을 빠르게 찾을 수 있게 준비해둔 데이터
    - primary: 중복되지 않는 유일한 키
    - normal: 중복을 허용하는 인덱스
    - unique: 중복을 허용하지 않는 유일한 키
    - foreign: 다른 테이블과의 관계성을 부여하는 키
    - full text: 자연어 검색, myisam에서만 지원
- JOIN
    1. OUTTER JOIN: 어느 한쪽에 데이터가 없어도 `NULL`로 가져온다.
        - LEFT JOIN: 왼쪽 테이블을 기준으로 오른쪽 테이블을 결합 `SELECT s.name, s.location_id, l.name AS address, l.distance  FROM student AS s LEFT JOIN location AS l ON s.location_id = l.id;`
        - RIGHT JOIN: 오른쪽 테이블을 기준으로 왼쪽 테이블을 결합 `RIGHT`
    2. INNER JOIN: 어느 한쪽에 데이터가 없으면 가져오지 않는다. `INNER`
 