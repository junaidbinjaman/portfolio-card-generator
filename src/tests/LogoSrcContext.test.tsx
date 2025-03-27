import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import { useLogoSrc, LogoSrcContextProvider } from '../contexts/LogoSrcContext';

const TestComponent = () => {
  const logoSrc = useLogoSrc();
  return (
    <Logo
      src={logoSrc}
      width={167}
      alt="Logo"
    />
  );
};

describe('LogoContext', () => {
  it('should render the image correctly', () => {
    render(
      <LogoSrcContextProvider>
        <TestComponent />
      </LogoSrcContextProvider>,
    );

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
