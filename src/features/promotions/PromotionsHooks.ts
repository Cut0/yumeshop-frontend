import useSWR from 'swr';
import { PromotionsApi, Promotion } from '@cut0/yumeshop-mock';
import { handleApiError } from '../common/Api';

const getKey = () => [`exampless/userData`];

const fetcher = async () => {
  const response = await new PromotionsApi()
    .getPromotions()
    .catch(handleApiError);
  if (response instanceof Error) {
    throw response;
  }
  return response;
};

export const usePromotions = () => {
  const { data, error } = useSWR<Promotion[], Error>(getKey(), fetcher);

  return {
    data,
    error,
    loading: data === undefined && error === undefined,
  };
};
