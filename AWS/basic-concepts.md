# AWS 기본 개념 살펴보기
_from 아마존 웹 서비스를 다루는 기술_

## 용어 정리
  1. Region (리전)
    - AWS의 모든 서비스가 위치하고 있는 물리적인 장소, 지역
    - 가까울수록 빠른 속도를 낼 수 있고, 재해에 대비하기 용이하기 때문에 여러 개의 리전을 둔다. (서울은 `ap-northeast-2`가 약칭)
    - 각 리전에는 여러 개의 가용 영역(AZ)이 존재한다.
  2. Availability Zone (가용 영역)
    - 데이터 센터
    - 같은 리전에 거리를 두고 여러 개의 가용 영역이 존재한다.
    - 여러 개의 가용 영역이 재해, 정전 등에 의해 작동불능 상태가 되더라도 계속 문제가 없도록 만들기에 무중단 서비스를 구축하기에 용이해진다. => "가용성이 좋다"
  3. Edge Location (에지 로케이션)
    - CDN 서비스인 CloudFront와 DNS 서비스인 Route53을 위한 캐시 서버들
    - CDN은 Content Delivery Network의 약자인데 콘텐츠를 사용자들이 빠르게 받을 수 있도록 전 세계 곳곳에 위치한 캐시서버에 복제해주는 서비스다.