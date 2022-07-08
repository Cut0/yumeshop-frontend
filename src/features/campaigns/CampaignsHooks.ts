import useSWR from 'swr';
import { CampaignsApi, Campaign } from '@cut0/yumeshop-mock';
import { handleApiError } from '../common/Api';

const getKey = () => [`campaigns/getList`];

const fetcher = async () => {
  const response = await new CampaignsApi()
    .getCampaigns()
    .catch(handleApiError);
  if (response instanceof Error) {
    throw response;
  }
  return response;
};

export const useCampaigns = () => {
  const { data, error } = useSWR<Campaign[], Error>(getKey(), fetcher);

  return {
    data,
    error,
    loading: data === undefined && error === undefined,
  };
};
