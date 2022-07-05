import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: ComponentMeta<typeof Header> = {
  component: Header,
};
export default meta;

export const Default: ComponentStoryObj<typeof Header> = {};
