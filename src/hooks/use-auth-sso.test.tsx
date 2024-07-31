import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useAuth from './use-auth'; // Import your useAuth function

interface ContextWrapperProps {
  children: React.ReactNode;
}

vi.mock('react-oidc-context', () => ({
  useAuth: () => ({
    isAuthenticated: true,
    isLoading: false,
    user: {
      profile: undefined,
    },
    signinRedirect: vi.fn(),
    signoutRedirect: vi.fn(),
  }),
}));

describe('useAuth', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const contextWrapper = ({ children }: ContextWrapperProps) => (
    <RecoilRoot>{children}</RecoilRoot>
  );

  it('should set isSignedIn to true when authenticated with sso', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: contextWrapper,
    });

    await act(async () => {
      result.current.signIn(true);
    });

    expect(result.current.isSignedIn).toBe(true);
  });

  it('should set isSignedIn to true when authenticated without sso', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: contextWrapper,
    });

    act(() => {
      result.current.signIn(false);
    });

    expect(result.current.isSignedIn).toBe(true);
  });

  it('should sign out and set isSignedIn to false when authenticated', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: contextWrapper,
    });

    act(() => {
      result.current.signOut();
    });

    expect(result.current.isSignedIn).toBe(false);
  });

  it('should set isSignedIn to true when authenticated and with profile', async () => {
    vi.mock('react-oidc-context', () => ({
      useAuth: () => ({
        isAuthenticated: true,
        isLoading: false,
        user: {
          profile: {
            firstName: 'John',
            lastName: 'Doe',
            displayName: 'John Doe',
            emailAddress: 'jdoe@test.com',
            phoneNumber: '1234567890',
          },
        },
        signinRedirect: vi.fn(),
        signoutRedirect: vi.fn(),
      }),
    }));

    const { result } = renderHook(() => useAuth(), {
      wrapper: contextWrapper,
    });

    await act(async () => {
      result.current.signIn(true);
    });

    expect(result.current.isSignedIn).toBe(true);
  });
});
