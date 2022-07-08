import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { CampaignCard } from './CampaignCard';

const meta: ComponentMeta<typeof CampaignCard> = {
  component: CampaignCard,
};
export default meta;

export const Default: ComponentStoryObj<typeof CampaignCard> = {
  args: {
    campaign: {
      id: '2ebf7390-c739-42bb-8cd9-61c6dd6798de',
      name: '文房具フェア',
      thumbnail: 'https://picsum.photos/300/300',
    },
  },
};
