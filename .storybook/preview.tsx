// .storybook/preview.js
import * as NextImage from 'next/image';
import { GlobalStyle } from '../src/styles/Globals';
import { Fetcher, Middleware, SWRConfig } from 'swr';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
});
const mockFetchMiddleware = (fetcher: Fetcher<never>): Middleware => {
  return (useSwrNext) => {
    return (key, _, config) => {
      return useSwrNext(key, fetcher, config);
    };
  };
};

export const decorators = [
  (Story, { parameters }) => (
    <SWRConfig
      value={{
        provider: () => new Map(),
        use: parameters.swrConfig.fetcher
          ? [mockFetchMiddleware(parameters.swrConfig.fetcher)]
          : [],
      }}
    >
      <GlobalStyle />
      <Story />
    </SWRConfig>
  ),
];

export const parameters = {
  swrConfig: {
    fetcher: undefined,
  },
};
