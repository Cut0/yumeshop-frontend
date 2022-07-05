import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { MockUserAPIResponse } from 'src/features/example/MockApi';
import { UserCard } from './UserCard';

const fetcher = (): MockUserAPIResponse => ({ id: 2, name: '二郎' });

const meta: ComponentMeta<typeof UserCard> = {
  component: UserCard,
  parameters: {
    swrConfig: {
      fetcher,
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof UserCard> = {};
