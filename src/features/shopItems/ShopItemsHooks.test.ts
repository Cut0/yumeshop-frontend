import { act, renderHook } from '@testing-library/react';
import { ShopItemsApi, ShopItem } from '@cut0/yumeshop-mock';
import { SwrTestWrapper } from '../../components/config/SwrTestWrapper';
import { useShopItems } from './ShopItemsHooks';

describe('useShopItems', () => {
  const requestMock = jest.spyOn(ShopItemsApi.prototype, 'getShopItems');

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('正常系', async () => {
    const shopItemsMock: ShopItem[] = [
      {
        id: '4dfd9672-5633-4328-b104-832e2f18c2a7',
        name: 'ボールペン',
        thumbnail: 'https://picsum.photos/300/300',
        price: {
          selling_price: 100,
          original_price: 200,
          discounted: true,
          discount_amount: 100,
          discount_percentage: 50,
        },
        categories: [
          {
            id: '73ac938d-e8e1-4ae1-b98a-e18815077f2e',
            name: '文房具',
            thumbnail: 'https://picsum.photos/300/300',
          },
        ],
        campaigns: [
          {
            id: '2ebf7390-c739-42bb-8cd9-61c6dd6798de',
            name: '文房具フェア',
            thumbnail: 'https://picsum.photos/300/300',
          },
        ],
        tags: [],
      },
      {
        id: '4dfd9672-5633-4328-b104-832e2f18c2a7',
        name: 'ボールペン',
        thumbnail: 'https://picsum.photos/300/300',
        price: {
          selling_price: 100,
          original_price: 200,
          discounted: true,
          discount_amount: 100,
          discount_percentage: 50,
        },
        categories: [
          {
            id: '73ac938d-e8e1-4ae1-b98a-e18815077f2e',
            name: '文房具',
            thumbnail: 'https://picsum.photos/300/300',
          },
        ],
        campaigns: [
          {
            id: '2ebf7390-c739-42bb-8cd9-61c6dd6798de',
            name: '文房具フェア',
            thumbnail: 'https://picsum.photos/300/300',
          },
        ],
        tags: [],
      },
    ];
    requestMock.mockResolvedValue(shopItemsMock);

    const { result } = renderHook(() => useShopItems({}), {
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
      data: shopItemsMock,
      error: undefined,
      loading: false,
    });
  });

  it('例外系', async () => {
    const error = new Error('テスト');
    requestMock.mockRejectedValue(error);

    const { result } = renderHook(() => useShopItems({}), {
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
