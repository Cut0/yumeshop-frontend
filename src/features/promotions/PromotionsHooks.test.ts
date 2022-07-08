import { act, renderHook } from '@testing-library/react';
import { PromotionsApi, Promotion } from '@cut0/yumeshop-mock';
import { SwrTestWrapper } from '../../components/config/SwrTestWrapper';
import { usePromotions } from './PromotionsHooks';

describe('usePromotions', () => {
  const requestMock = jest.spyOn(PromotionsApi.prototype, 'getPromotions');

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('正常系', async () => {
    const promotionsMock: Promotion[] = [
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        title: '春の大感謝祭',
        image: 'https://picsum.photos/600/600',
        detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
        link: 'https://example.com/',
      },
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        title: '春の大感謝祭',
        image: 'https://picsum.photos/600/600',
        detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
        link: 'https://example.com/',
      },
    ];
    requestMock.mockResolvedValue(promotionsMock);

    const { result } = renderHook(() => usePromotions(), {
      wrapper: SwrTestWrapper,
    });
    expect(result.current).toEqual({
      data: undefined,
      error: undefined,
      loading: true,
    });

    await act(async () => {
      await Promise.all(requestMock.mock.instances);
    });
    expect(requestMock.mock.calls.length).toBe(1);
    expect(result.current).toEqual({
      data: promotionsMock,
      error: undefined,
      loading: false,
    });
  });

  it('例外系', async () => {
    const error = new Error('テスト');
    requestMock.mockRejectedValue(error);

    const { result } = renderHook(() => usePromotions(), {
      wrapper: SwrTestWrapper,
    });
    expect(result.current).toEqual({
      data: undefined,
      error: undefined,
      loading: true,
    });

    await act(async () => {
      await Promise.all(requestMock.mock.instances);
    });
    expect(requestMock.mock.calls.length).toBe(1);
    expect(result.current).toEqual({
      data: undefined,
      error,
      loading: false,
    });
  });
});
