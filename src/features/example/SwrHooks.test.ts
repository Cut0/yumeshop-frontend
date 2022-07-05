import { act, renderHook } from '@testing-library/react';
import { SwrTestWrapper } from '../../components/config/SwrTestWrapper';
import { useUserData } from './SwrHooks';
import { MockUserAPI } from './MockApi';

describe('useUserData', () => {
  const requestMock = jest.spyOn(MockUserAPI.prototype, 'getUser');

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('正常系', async () => {
    const userDataMock = { id: 2, name: '二郎' };
    requestMock.mockResolvedValue(userDataMock);

    const { result } = renderHook(() => useUserData(), {
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
      data: userDataMock,
      error: undefined,
      loading: false,
    });
  });

  it('例外系', async () => {
    const error = new Error('テスト');
    requestMock.mockRejectedValue(error);

    const { result } = renderHook(() => useUserData(), {
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
