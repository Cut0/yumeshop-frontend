export const handleApiError = async (
  error: Error | unknown,
): Promise<Error> => {
  if (error instanceof Error) {
    return error;
  }
  console.log('予期せぬエラー', error);
  return Promise.reject(error);
};
