import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { useSideScroll } from 'src/features/common/SideScrollHooks';
import { ArrowRightSvgIcon } from './Icons/ArrowRightSvgIcon';
import { ArrowLeftSvgIcon } from './Icons/ArrowLeftSvgIcon';
import { colors } from '../../styles/Tokens';

type CarouselProps = {
  children: ReactNode;
};

export const Caruosel: FC<CarouselProps> = ({ children }) => {
  const { refContainer, prevBtnOnClick, nextBtnOnClick } = useSideScroll();
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        ref={refContainer}
        style={{ scrollBehavior: 'smooth' }}
        css={css`
          max-width: 100%;
          margin: 0;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scroll-padding: 0;
          white-space: nowrap;
          > * {
            scroll-snap-align: start;
          }
        `}
      >
        {children}
      </div>
      <button
        css={css`
          position: absolute;
          top: 50%;
          left: 6px;
          transform: translate(0, -50%);
          -webkit-transform: translate(0, -50%);
          background-color: ${colors.White};
          border-radius: 50%;
          display: flex;
          padding: 6px;
        `}
        type="button"
        aria-label="left scroll"
        onClick={prevBtnOnClick}
      >
        <ArrowLeftSvgIcon />
      </button>
      <button
        css={css`
          position: absolute;
          top: 50%;
          right: 6px;
          transform: translate(0%, -50%);
          -webkit-transform: translate(0, -50%);
          background-color: ${colors.White};
          border-radius: 50%;
          display: flex;
          padding: 6px;
        `}
        type="button"
        aria-label="left scroll"
        onClick={nextBtnOnClick}
      >
        <ArrowRightSvgIcon />
      </button>
    </div>
  );
};
