import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Logo } from './LogoSvgIcon';

const meta: ComponentMeta<typeof Logo> = {
  component: Logo,
};
export default meta;

export const Default: ComponentStoryObj<typeof Logo> = {};
