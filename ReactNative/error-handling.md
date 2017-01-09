# 다양한 에러 처리 방법

## NSURLError -1022
#### App Transport Security를 설정해줘야 한다.
- 애플의 정책 때문에 `http`로 들어오는걸 허가 해줘야한다.
- [참고](http://blowmj.tistory.com/entry/iOS-iOS9-App-Transport-Security-%EC%84%A4%EC%A0%95%EB%B2%95)


## Setting onMessage...
- "Setting onMessage on a WebView overrides existing values of window.postMessage, but a previous value was defined."
- `react-native 0.39`에서 해결되지 않은 문제인데, `iframe`에서 사용하는 `postMessage`와 webView에서 사용하는 그것이 충돌되면서 발생하는 에러다. 차후에 수정해줄 것 같지만 급한대로 방법이 있다.
- `node_module/react-native/React/Views/RCTWebView.m` 파일을 열고 에러를 발생시키는 부분을 제거한다. 해당 부분은 아래의 코드와 같다.
```
    #if RCT_DEV
    // See isNative in lodash
    NSString *testPostMessageNative = @"String(window.postMessage) === String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')";
    BOOL postMessageIsNative = [
      [webView stringByEvaluatingJavaScriptFromString:testPostMessageNative]
      isEqualToString:@"true"
    ];
    if (!postMessageIsNative) {
      RCTLogError(@"Setting onMessage on a WebView overrides existing values of window.postMessage, but a previous value was defined");
    }
    #endif
```
[참고 - Remove errors for detecting native postMessage](https://github.com/facebook/react-native/pull/10941/files)


## 외부 앱 열기
- Custom URL Scheme을 열도록 허가 하기 위해선 두가지 방법이 존재한다.
1. `Info.plist`에 `LSApplicationQueriesSchemes` 안에 커스텀 스킴을 등록해준다.
2. 네이티브 코드를 고쳐서 `https` 관련 링크가 아니면 자체적으로 열도록 하기
```objective-c
BOOL isJSNavigation = [request.URL.scheme isEqualToString:RCTJSNavigationScheme];
BOOL isHTTPS = [request.URL.scheme isEqualToString:@"https"];

//  NSURL *httpURL = [NSURL URLWithString:@"http://"];
//  NSURL *httpsURL = [NSURL URLWithString:@"https://"];

if (!isHTTPS && !isJSNavigation) {
  UIApplication *application = [UIApplication sharedApplication];
  [application openURL:request.URL];

  return NO;
}
```
