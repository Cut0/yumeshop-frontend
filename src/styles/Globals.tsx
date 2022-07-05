import { FC } from 'react';
import { css, Global } from '@emotion/react';
import { fonts } from './Tokens';
import 'ress';

export const GlobalStyle: FC = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: ${fonts.NotoSansJP};
        line-height: 1.5;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);