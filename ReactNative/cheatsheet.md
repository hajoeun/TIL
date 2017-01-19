# CheatSheet

## iOS 시뮬레이터 사용시 사용할 수 있는 디바이스 옵션 확인
- `xcrun simctl list devices`

## iOS 시뮬레이터 옵션
- `react-native run-ios --simulator="iPhone 5s"`

## 컴포넌트 적용 확인
- `componentDidMount` 메소드를 만들어두면 라이프 사이클에 따라서 컴포넌트 적용 시기 가장 마지막에 실행된다.

## 릴리즈를 위한 번들링
- 책에 나와 있는 `react-native bundle --minify`는 안된다.
- iOS: `react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`
- Android: `react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`
