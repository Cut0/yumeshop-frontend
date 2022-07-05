import { FC } from 'react';
import { colors } from 'src/styles/Tokens';
import { css } from '@emotion/react';

export const Footer: FC = () => (
  <footer
    css={css`
      width: 100%;
      padding: 16px 0;
      font-size: 12px;
      background-color: ${colors.White};
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <p>Copyright {new Date().getFullYear()} YumemiShop</p>
  </footer>
);
