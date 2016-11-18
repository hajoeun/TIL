# Entities
- HTML의 특정 문자들이 예약되어 있기 때문에 표기의 혼란을 막기 위해 사용하는 키워드들

### Entities Table

| Result | Description | Entity Name | Entity Number |
| :--- | :--- | :--- | :--- |
|  | non-breaking space | `&nbsp;` | `&#160;` |
| < | less than | `&lt;` | `&#60;` |
| > | greater than | `&gt;` | `&#62;` |
| & | ampersand | `&amp;` | `&#38;` |
| ¢ | cent | `&cent;` | `&#162;` |
| £ | pound | `&pound;` | `&#163;` |
| ¥ | yen | `&yen;` | `&#165;` |


### Zero Width Space
- zwsp 라고 부르는 이 문자는 `&#8203;`에 해당하는 엔티티 값이다. 이 값은 유니코드로 `\u200B`에 해당하는데 이 문자열을 제거하기 위해선 유니코드를 사용해야 한다. 