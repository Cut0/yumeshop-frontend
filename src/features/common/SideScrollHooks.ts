import { RefObject, useRef, useCallback } from 'react';

export const useSideScroll = (
  scrollDistanceInElementCount = 1,
): {
  refContainer: RefObject<HTMLDivElement>;
  prevBtnOnClick(): void;
  nextBtnOnClick(): void;
} => {
  const refContainer = useRef<HTMLDivElement>(null);
  const pagerHandler = useCallback(
    (direction: 'next' | 'prev') => {
      if (refContainer.current === null) {
        return;
      }
      const scrollX = refContainer.current.scrollLeft;
      const diff = refContainer.current.children
        ? refContainer.current.children[0].clientWidth
        : 0;
      let newScrollX;
      if (direction === 'next') {
        newScrollX = scrollX + diff * scrollDistanceInElementCount;
      } else {
        newScrollX = scrollX - diff * scrollDistanceInElementCount;
      }
      refContainer.current.scrollLeft = newScrollX;
    },
    [refContainer, scrollDistanceInElementCount],
  );
  const prevBtnOnClick = useCallback(() => {
    pagerHandler('prev');
  }, [pagerHandler]);
  const nextBtnOnClick = useCallback(() => {
    pagerHandler('next');
  }, [pagerHandler]);
  return { refContainer, prevBtnOnClick, nextBtnOnClick };
};
