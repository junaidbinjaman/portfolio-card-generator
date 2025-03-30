import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import LogoSrc from '/portfolio-card-generator-logo.png';

describe('Logo', () => {
  it('Should render the image with correct width and height then src is provided', () => {
    
    render(
      <Logo
        src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'}
        width={167}
        alt="Test logo render"
      />,
    );
    const logo = screen.getByAltText('Test logo render');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', LogoSrc);
    expect(logo).toHaveAttribute('width', '167');
    expect(logo).toHaveAttribute('height', 'auto');
  });

  it('Should render placeholder logo when src is missing', () => {
    render(
      // @ts-expect-error Intentionally skipped src prop to test fallback
      <Logo
        width={167}
        alt="logo"
      />,
    );
    
  });
});
