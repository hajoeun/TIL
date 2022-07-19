import { isEqual } from 'lodash';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

/* 스크롤 여부를 판단하는 Hook */

// pageRef: 스크롤이 발생하는 대상 엘리먼트의 RefObject
export const useScrollState = (pageRef: RefObject<HTMLDivElement>) => {
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
