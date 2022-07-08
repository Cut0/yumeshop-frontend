import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { Caruosel } from './Carousel';

const meta: ComponentMeta<typeof Caruosel> = {
  component: Caruosel,
};
export default meta;

export const Default: ComponentStoryObj<typeof Caruosel> = {
  render: (args) => (
    <Caruosel {...args}>
      <div
        key="1"
        css={css`
          display: inline-block;
          width: 100%;
          height: 400px;
          color: white;
          background-color: red;
        `}
      >
        BOX1
      </div>
      <div
        key="2"
        css={css`
          display: inline-block;
          width: 100%;
          height: 400px;
          color: white;
          background-color: blue;
        `}
      >
        BOX2
      </div>
      <div
        key="3"
        css={css`
          display: inline-block;
          width: 100%;
          height: 400px;
          color: white;
          background-color: green;
        `}
      >
        BOX3
      </div>
    </Caruosel>
  ),
};
