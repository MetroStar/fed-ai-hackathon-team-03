import { mockData } from '@src/data/spacecraft';
import axios from '@src/utils/axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import * as useAuthMock from '../../hooks/use-auth';
import { User } from '../../types/user';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const componentWrapper = (
    <AuthProvider>
      <RecoilRoot>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Dashboard />
          </QueryClientProvider>
        </BrowserRouter>
      </RecoilRoot>
    </AuthProvider>
  );

  const mock = new MockAdapter(axios);
  beforeAll(() => {
    mock.reset();
  });

  beforeEach(() => {
    queryClient.clear();
    mock.reset();
  });

  test('should render successfully', async () => {
    mock.onGet(new RegExp('/spacecraft')).reply(200, mockData);
    queryClient.setQueryData(['dashboard'], mockData.items);
    vi.spyOn(useAuthMock, 'default').mockReturnValue({
      isSignedIn: true,
      isLoading: false,
      currentUserData: {} as User,
      error: null,
      signIn: vi.fn(),
      signOut: vi.fn(),
    });

    const { baseElement } = render(componentWrapper);
    await act(async () => {
      expect(baseElement).toBeTruthy();
    });

    expect(baseElement.querySelector('h1')?.textContent).toEqual('Dashboard');
    expect(baseElement.querySelectorAll('.VictoryContainer')).toHaveLength(2);
    expect(baseElement.querySelector('.usa-table')).toBeDefined();
    expect(
      baseElement.querySelectorAll('.usa-table > tbody > tr'),
    ).toHaveLength(0);
  });

  test('should render with error', async () => {
    mock
      .onGet(new RegExp('/spacecraft'))
      .reply(500, { message: 'Internal Server Error' });
    queryClient.setQueryData(['dashboard'], null);

    const { baseElement } = render(componentWrapper);
    await act(async () => {
      expect(baseElement).toBeTruthy();
    });
    expect(baseElement.querySelector('h1')?.textContent).toEqual('Dashboard');
    expect(baseElement.querySelector('.usa-alert')).toBeDefined();
    expect(baseElement.querySelector('.usa-alert--error')).toBeDefined();
  });
});
