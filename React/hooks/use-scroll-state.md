## 스크롤 여부를 판단하는 useScrollState

스크롤이 가능한 엘리먼트가 스크롤 중임을 판단하는 가장 쉬운 방법은 window나 document 객체의 'scroll' 이벤트를 사용하는 것이다. 

하지만 여러 요소가 중첩으로 쌓인 상태에서 스크롤 상태를 판단하는 건 이야기가 다르다.

특히 React 환경이라면 Ref 객체를 이용해 'scroll' 이벤트를 감지해야 한다. 

오늘 기록하는 함수는 거리가 먼 엘리먼트의 스크롤 여부를 감지하는 함수다. 스크롤 중에만 사라지는 바텀시트, 플로팅 버튼 등을 구현하기 위해 사용할 수 있다.

```typescript
import { isEqual } from 'lodash';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

/* 스크롤 여부를 판단하는 Hook */

// pageRef: 스크롤이 발생하는 대상 엘리먼트의 RefObject
export const useScrollState = (pageRef: RefObject<HTMLDivElement>) => {
    // isScrolling: 스크롤 중임을 판단하는 값. useRecoilState 같은 전역 상태를 사용할 수도 있다.
    const [isScrolling, setIsScrolling] = useState(false);
    // timerRef: 스크롤 이벤트가 완료된 이후의 동작을 정의한 setTimeout 함수의 ID를 저장
    const timerRef = useRef<number>();

    // scrollHandler: 스크롤 이벤트가 발생하면 실행되는 함수
    const scrollHandler = useCallback(() => {
        if (isScrolling) {
            timerRef.current = window.setTimeout(() => {
                setIsScrolling(false);
            }, 250);
            return;
        }

        clearTimeout(timerRef.current);
        setIsScrolling(true);
    }, [isScrolling]);

    useEffect(() => {
        if (!pageRef.current) {
            return;
        }

        pageRef.current.addEventListener('scroll', scrollHandler);
    }, [pageRef, scrollHandler]);

    useEffect(() => {
        if (!pageRef.current || !isScrolling) {
            return;
        }

        // 스크롤이 바닥에 닿았음을 판별하는 로직
        const { scrollHeight, scrollTop, clientHeight } = pageRef.current;
        const isBottom = isEqual(scrollHeight - scrollTop - clientHeight, 0);
        if (isBottom) {
            setIsScrolling(false);
        }
    }, [pageRef, isScrolling]);

    return isScrolling;
};
```