**Regular Expression(정규표현식)**

## 1. 예제 01

```
// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


var expression = /and/gi;  // Change this Line


// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;
```

변수 `expression`에서 `/`는 정규표현식의 시작을 나타낸다. 그 이후부터 다음 `/`까지의 문자를 찾는다. 이때 `g`는 전역을 의미하고, `i`는 대소문자 구분을 무시하라는 의미이다. 해당 예제는 `testString`에 포함된 and의 개수를 `andCount`에 반환한다.



## 2. 예제 02

```
// Setup
var testString = "There are 3 cats but 4 dogs.";


var expression = /\d+/g;  // Change this line


// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
```

변수 `expression`에서 `\d`는 숫자를 찾는 정규표현식이다. 해당 문자 뒤에 붙은 `+`는 한 단어에서 하나 이상의 숫자를 찾으라는 의미이다. 이때 `g`는 전역을 의미한다. 결과갑으로 `digitCount`에 저장되는 값은 2이다.



## 3. 예제 03

```
// Setup
var testString = "How many spaces are there in this sentence?";


var expression = /\s+/g;  // Change this line


// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;
```

변수 `expression`에서 `\s`는 여백(whitespace)을 찾는 정규표현식이다. 이때 여백이란 단순한 공백인 `" "`, 캐리지리턴 `\r`, 뉴라인 `\n`, 탭 `\t`, 그리고 폼피드 `\f`를 의미한다. 마찬가지로 `+`는 하나 이상의 여백을 찾으라는 의미가 된다. 결과값으로 `spaceCount`에 저장되는 값은 7이다. *캐리지리턴과 뉴라인은 같은 기능을 하는데 전자의 경우 IE에서만 동작하고 그 외에 브라우저에서는 동작하지 않는다. 그외에 브라우저에서는 후자를 사용한다.*

이때 `\s`를 대문자 `\S`로 표기하면 반대의 의미가 된다. 즉, 여백이 아닌 문자열을 찾는 정규표현식이 된다. 결과적으로 모든 문자의 수를 확인할 수 있다. *만약에 `\S+`로 표기하면 한 단어에서 한번씩만 문자열을 찾기 때문에 예제 03의 경우 결과값으로 8이 반환된다.*
