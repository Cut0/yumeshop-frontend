import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/react';
import { colors } from '../styles/Tokens';
import { Carousel } from '../components/common/Carousel';
import { usePromotions } from '../features/promotions/PromotionsHooks';

const Home: NextPage = () => {
  const promotions = usePromotions();

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
        <Carousel>
          {promotions.data !== undefined && promotions.error === undefined ? (
            promotions.data.map(({ id, image }) => (
              <div
                css={css`
                  display: inline-block;
                  width: 100%;
                `}
              >
                <Image
                  key={id}
                  src={image}
                  width="300"
                  height="300"
                  layout="responsive"
                />
              </div>
            ))
          ) : (
            <div
              css={css`
                width: 100%;
                aspect-ratio: 1 / 1;
                background-color: ${colors.Gray};
              `}
            />
          )}
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
