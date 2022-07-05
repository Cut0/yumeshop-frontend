import { FC, PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export const SwrTestWrapper: FC<PropsWithChildren<unknown>> = ({
  children,
}) => <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
