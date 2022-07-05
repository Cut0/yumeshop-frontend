import { css } from '@emotion/react';
import { FC } from 'react';
import { colors } from './Tokens';

export const TokenTest: FC = () => (
  <div
    css={css`
      background: ${colors.YumeGreen};
    `}
  />
);

export const Container: FC = () => (
  <div
    css={css`
      padding: 0 2rem;
    `}
  />
);

export const Main: FC = () => (
  <div
    css={css`
      min-height: 100vh;
      padding: 4rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  />
);

export const Title: FC = () => (
  <div
    css={css`
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
      text-align: center;
      a {
        color: #0070f3;
        text-decoration: none;
      }

      a:hover,
      a:focus,
      a:active {
        text-decoration: underline;
      }
    `}
  />
);
