import { FC } from 'react';
import { css } from '@emotion/react';
import { useCampaigns } from 'src/features/campaigns/CampaignsHooks';
import { useSideScroll } from 'src/features/common/SideScrollHooks';
import { CampaignCard, CampaignCardSkeleton } from './CampaignCard';
import { ArrowLeftSvgIcon } from '../common/Icons/ArrowLeftSvgIcon';
import { ArrowRightSvgIcon } from '../common/Icons/ArrowRightSvgIcon';
import { colors } from '../../styles/Tokens';

export const CampaignsList: FC = () => {
  const campaigns = useCampaigns();
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
          @media screen and (max-width: 1152px) {
            display: flex;
            max-width: 100%;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-padding: 0;
            white-space: nowrap;
            > * {
              scroll-snap-align: start;
              min-width: 200px;
            }
            > * + * {
              margin-left: 8px;
            }
          }
          @media screen and (min-width: 1152px) {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(4, 1fr);
          }
        `}
      >
        {campaigns.data !== undefined && campaigns.error === undefined
          ? campaigns.data.map((item) => (
              <CampaignCard key={item.id} campaign={item} />
            ))
          : [...Array.from({ length: 4 })].map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <CampaignCardSkeleton key={String(i)} />
            ))}
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
          @media screen and (min-width: 1152px) {
            display: none;
          }
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
          @media screen and (min-width: 1152px) {
            display: none;
          }
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
