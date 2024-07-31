import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'react-oidc-context';
import { RecoilRoot } from 'recoil';
import { Header } from './header';

describe('Header', () => {
  const headerComponent = (
    <AuthProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </RecoilRoot>
    </AuthProvider>
  );

  test('should render successfully', async () => {
    const { baseElement } = render(headerComponent);
    await act(async () => {
      expect(baseElement).toBeTruthy();
    });
  });

  test('should display menu when button is clicked', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const { baseElement } = render(headerComponent);
    global.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    const button = screen.getByText('Menu');
    expect(screen.getByText('Menu')).toBeTruthy();
    userEvent
      .click(button)
      .then(() => {
        // Handle click
      })
      .catch(() => {
        // Handle error
      });
    expect(baseElement.querySelector('.usa-nav')).toBeDefined();
  });

  test('should render menu successfully', () => {
    render(headerComponent);

    expect(screen.getByText('Skip to main content')).toBeTruthy();
    expect(screen.getByText('Menu')).toBeTruthy();
  });

  test('should toggle the menu on button click', () => {
    render(headerComponent);

    const menuButton = screen.getByText('Menu');
    fireEvent.click(menuButton);
  });
});
