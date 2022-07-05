import { FC } from 'react';
import { Logo } from 'src/components/common/Icons/logo';
import { colors } from 'src/styles/Tokens';
import Link from 'next/link';
import { css } from '@emotion/react';

export const Header: FC = () => (
  <header
    css={css`
      width: 100%;
      padding: 8px 0;
      background-color: ${colors.White};
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
  >
    <Link href="/" passHref>
      <a href="replace">
        <Logo />
      </a>
    </Link>
  </header>
);
