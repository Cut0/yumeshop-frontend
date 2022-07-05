import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Headline } from './Headline';

const meta: ComponentMeta<typeof Headline> = {
  argTypes: {
    headlineTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
  component: Headline,
};
export default meta;

export const Large: ComponentStoryObj<typeof Headline> = {
  args: { headlineTypes: 'large', label: 'Headline' },
};

export const Middle: ComponentStoryObj<typeof Headline> = {
  args: { headlineTypes: 'middle', label: 'Headline' },
};

export const Small: ComponentStoryObj<typeof Headline> = {
  args: { headlineTypes: 'small', label: 'Headline' },
};
