import useSWR from 'swr';
import {
  ShopItemsApi,
  ShopItem,
  GetShopItemsRequest,
} from '@cut0/yumeshop-mock';
import { handleApiError } from '../common/Api';

const getKey = () => [`exampless/userData`];

const fetcher = async (params: GetShopItemsRequest) => {
  const response = await new ShopItemsApi()
    .getShopItems(params)
    .catch(handleApiError);
  if (response instanceof Error) {
    throw response;
  }
  return response;
};

export const useShopItems = (params: GetShopItemsRequest) => {
  const { data, error } = useSWR<ShopItem[], Error>(
    getKey(),
    fetcher.bind(params),
  );

  return {
    data,
    error,
    loading: data === undefined && error === undefined,
  };
};
