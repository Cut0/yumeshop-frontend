import { Campaign } from '@cut0/yumeshop-mock';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { CampaignsList } from './CampaignsList';

const fetcher = (): Campaign[] => [
  {
    id: '2ebf7390-c739-42bb-8cd9-61c6dd6798de',
    name: '文房具フェア',
    thumbnail: 'https://picsum.photos/300/300',
  },
  {
    id: '0daa17e7-dac6-45de-82c7-c5e932276439',
    name: '夏休みキャンペーン',
    thumbnail: 'https://picsum.photos/300/300',
  },
];

const meta: ComponentMeta<typeof CampaignsList> = {
  component: CampaignsList,
  parameters: {
    swrConfig: {
      fetcher,
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof CampaignsList> = {};
