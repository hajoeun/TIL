# Directions Reduction
_from Code Wars_

## 1. 문제 설명
- 동서남북 네 방향으로 길을 안내하는 계획표(배열)가 있다. 이때 반대되는 방향으로 가는 경우 상쇄시켜 효과적인 방향을 제시할 수 있는 함수를 만들어라.
- 예를 들어 `["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]`와 같은 계획표가 매개변수로 들어오면 반대방향을 상쇄시켜서 `["WEST"]`만 남긴채 반환해야 한다.
- 단, `["NORTH", "WEST", "SOUTH", "EAST"]`와 같이 결론적으로 원래 위치로 되돌아 온다고 할지라도 바로 다음에 반대되는 방향이 오지 않는 경우에는 상쇄되지 않는다. 이 경우 반환 값은 `["NORTH", "WEST", "SOUTH", "EAST"]`이다.


## 2. 나의 답안
```javascript
function dirReduc(arr){
  var stack = [], j = 0, len = arr.length;

  for (var i = 0; i < len; i++) { // 스택에 추가하며 이전 값과 비교해 반대되는 요소의 경우 제거한다.
    stack.push(arr[i]); // push로 추가한 뒤
    if (stack.length > 1 && isOppo(stack[stack.length - 2], stack[stack.length - 1])) { // 데이터가 앞뒤로 반대되는 경우에
      stack.pop(); stack.pop(); // 두 값을 모두 제거한다.
    }
  }
  return stack; // 남은 값을 반환한다.
}

function isOppo(prev, curr) { // 반대되는 경우를 확인하는 함수
  switch(prev) {
    case "NORTH":
      if (curr === "SOUTH") return true;
      break;
    case "SOUTH":
      if (curr === "NORTH") return true;
      break;
    case "WEST":
      if (curr === "EAST") return true;
      break;
    case "EAST":
      if (curr === "WEST") return true;
      break;
    default:
      return false;
  }
}
```
- 스택을 이용해서 비교하는 형태를 취했다.
- 별도의 반대값을 구분하는 함수를 두었다.
- 코드가 길어진 것이 단점, 쉽지 않았다.


## 3. 인기 답안 01
```javascript
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []); // 주목해야할 부분이다. 두번째 매개변수로 배열을 주는데, 이는 콜백의 첫 호출에 어떤 인수를 사용할지 정해준다. 덕분에 push, pop같은 배열의 메소드를 사용해 스택의 효과를 낼 수 있다. 대단하다.
}
```
- 객체를 이용하는 현명한 방법을 선택했다. 내가 함수로 만든 긴 코드보다 훨씬 효과적이다.
- 이번 문제와 같이 특정 데이터를 제거해야하는 경우엔 `reduce()` 메서드를 사용하는 것이 좋다는 것을 다시금 확인했다.


## 4. 인기 답안 02
```javascript
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
```
- 정규표현식을 사용했다.
- 배열을 하나로 합친 다음 두개가 연속해서 나오는 경우가 없을 때까지 반복해서 돌리면서 반대값을 상쇄시켜주고 최종적으로 방향에 해당하는 문자열을 다시 배열로 전환한 다음 반환한다.
- 정규표현식을 잘쓰면 이렇게 멋진 코드가 나온다니... 감동이다.
