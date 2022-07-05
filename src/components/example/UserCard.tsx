import { css } from '@emotion/react';
import { FC } from 'react';
import { useUserData } from 'src/features/example/SwrHooks';

export const UserCard: FC = () => {
  const { data, error, loading } = useUserData();
  if (loading) {
    return <div>ローディング</div>;
  }
  if (error) {
    return <div>エラー</div>;
  }
  return (
    <div
      css={css`
        border-radius: 8px;
        background-color: gray;
        color: white;
        padding: 16px;
        text-align: center;
        max-width: 360px;
      `}
    >
      {data?.name}
    </div>
  );
};
