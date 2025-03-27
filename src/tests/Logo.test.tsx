import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import LogoSrc from '/portfolio-card-generator-logo.png';

describe('Logo', () => {
  it('Should render the image with correct width and height then src is provided', () => {
    render(
      <Logo
        src={LogoSrc}
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
    // @ts-expect-error Runtime validation is necessary because logo will come from external sources
    render(
      <Logo
        width={167}
        alt="logo"
      />,
    );
    const logo = screen.getByText('Logo');

    expect(logo).toBeInTheDocument();
  });
});
