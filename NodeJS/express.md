# Express, 그리고 그와 관련된 패키지들

#### pg 사용법
- `npm install --save pg`로 설치한다.
- 아래와 같은 형태로 설정을 해준다. 예시에서 사용된 `process.env.~`는 아마존 웹 서비스(AWS)의 RDS를 사용할 때 사용하는 변수다.
```
var pg = require('pg');

var config = {
    user: process.env.RDS_USERNAME || 'joeunha',
    database: process.env.RDS_DB_NAME || 'df_db',
    password: process.env.RDS_PASSWORD || 'mp_df_123',
    host: process.env.RDS_HOSTNAME || 'mp-dreamfactory.c7cp9larbmws.ap-northeast-2.rds.amazonaws.com',
    port: process.env.RDS_PORT || 5432,
    max: 10,
    idleTimeoutMills: 30000
};

var pool = new pg.Pool(config);
```

- 그리고 `pool` 변수의 `connect` 메서드를 사용해서 데이터베이스와 연결한다.
```
pool.connect(function(err, client, done) {
    if (err) {
        return console.log(err);
    }
    
    var query = client.query("create table table_name(id serial, name varchar(255) not null)...");
    query.on('end', function() {
      console.log('Success!!');
      client.end();
    });
```