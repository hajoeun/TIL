## NodeJS에서 PostgreSQL에 접속할 때 권한 에러가 발생하는 경우 대처 요령


- 아래의 두가지 방법으로 접근해볼 것

1. `postgres://[username]:[password]@[host]:[port]/[databasename]`
2. `postgres://[username]@localhost:5432/[databasename]?ssl=true`