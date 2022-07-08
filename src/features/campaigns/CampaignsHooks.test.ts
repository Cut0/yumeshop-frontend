import { act, renderHook } from '@testing-library/react';
import { CampaignsApi, Campaign } from '@cut0/yumeshop-mock';
import { SwrTestWrapper } from '../../components/config/SwrTestWrapper';
import { useCampaigns } from './CampaignsHooks';

describe('useCampaigns', () => {
  const requestMock = jest.spyOn(CampaignsApi.prototype, 'getCampaigns');

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('正常系', async () => {
    const campaignsMock: Campaign[] = [
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
    requestMock.mockResolvedValue(campaignsMock);

    const { result } = renderHook(() => useCampaigns(), {
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
      data: campaignsMock,
      error: undefined,
      loading: false,
    });
  });

  it('例外系', async () => {
    const error = new Error('テスト');
    requestMock.mockRejectedValue(error);

    const { result } = renderHook(() => useCampaigns(), {
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
