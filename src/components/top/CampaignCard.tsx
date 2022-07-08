import { Campaign } from '@cut0/yumeshop-mock';
import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { colors } from 'src/styles/Tokens';

type CampaignCardProps = { campaign: Campaign };

export const CampaignCardSkeleton: FC = () => (
  <div
    css={css`
      border-radius: 8px;
      position: relative;
      background-color: ${colors.White};
      cursor: pointer;
    `}
  >
    <div
      css={css`
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        position: relative;
        background-color: ${colors.Gray};
      `}
    />
    <p
      css={css`
        padding: 8px;
        font-size: 12px;
      `}
    />
  </div>
);

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => (
  <div
    css={css`
      border-radius: 8px;
      position: relative;
      background-color: ${colors.White};
      cursor: pointer;
    `}
  >
    <div
      css={css`
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        position: relative;
      `}
    >
      <Image
        src={campaign.thumbnail}
        layout="fill"
        css={css`
          aspect-ratio: 1 / 1;
          border-radius: 8px 8px 0 0;
          position: relative;
        `}
      />
    </div>
    <p
      css={css`
        padding: 8px;
        font-size: 12px;
      `}
    >
      {campaign.name}
    </p>
  </div>
);
