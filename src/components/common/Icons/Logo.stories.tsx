import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: ComponentMeta<typeof Logo> = {
  component: Logo,
};
export default meta;

export const Default: ComponentStoryObj<typeof Logo> = {};
