# 기본 설정 방법

## CLI 설치하기
- 설치하기 전에 먼저 엑세스 키와 비밀번호를 받아둔다. `https://console.aws.amazon.com/iam/home#/users` 이 주소로 가서 User / 이메일 클릭 / security credentials 를 클릭하고 Create Access Key 를 클릭해서 키를 만든다.
- 그리고 아래의 명령어를 입력해서 설치 완성! 
```bash
  curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
  unzip awscli-bundle.zip
  sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
  aws help #결과가 뜨면 성공!
```

