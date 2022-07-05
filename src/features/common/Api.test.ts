import { handleApiError } from './Api';

describe('handleApiError', () => {
  it('通常のエラー', () => {
    const error = new Error();
    const result = handleApiError(error);
    expect(result).resolves.toEqual(error);
  });

  it('予期せぬエラー', () => {
    const error = '「予期せぬエラーのテスト」';
    const result = handleApiError(error);
    expect(result).rejects.toEqual(error);
  });
});
