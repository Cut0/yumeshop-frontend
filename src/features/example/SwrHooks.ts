import useSWR from 'swr';
import { handleApiError } from '../common/Api';
import { MockUserAPI, MockUserAPIResponse } from './MockApi';

const getKey = () => [`exampless/userData`];

const fetcher = async () => {
  const response = await new MockUserAPI().getUser().catch(handleApiError);
  if (response instanceof Error) {
    throw response;
  }
  return response;
};

export const useUserData = () => {
  const { data, error } = useSWR<MockUserAPIResponse, Error>(getKey(), fetcher);

  return {
    data,
    error,
    loading: data === undefined && error === undefined,
  };
};
