import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Caruosel } from 'src/components/common/Carousel';
import { useShopItems } from '../features/shopItems/ShopItemsHooks';

const Home: NextPage = () => {
  const shopItems = useShopItems({});

  return (
    <main
      css={css`
        min-height: 100vh;
        max-width: 1152px;
        margin: 0 auto;
      `}
    >
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        css={css`
          max-width: 600px;
          margin: 0 auto;
        `}
      >
        <Caruosel>
          {shopItems.data !== undefined &&
            shopItems.data
              .map(({ thumbnail }, index) => ({
                key: index,
                src: thumbnail,
              }))
              .map(({ key, src }) => (
                <div
                  css={css`
                    display: inline-block;
                    width: 100%;
                  `}
                >
                  <Image
                    key={key}
                    src={src}
                    width="300"
                    height="300"
                    layout="responsive"
                  />
                </div>
              ))}
        </Caruosel>
      </div>
    </main>
  );
};

export default Home;
