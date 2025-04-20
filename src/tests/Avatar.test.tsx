import { render, screen } from '@testing-library/react';
import Avatar from '../components/Avatar';

const imgUrl = 'https://junaidbinjaman.com/wp-content/uploads/2025/01/Profile-picture.webp';

describe('Avatar', () => {
  it('should display the avatar with the correct image, alt tag, classes (if passed) and the size', () => {
    render(
      <Avatar
        source={imgUrl}
        alt="Junaid Head Shot"
        classes="test"
        width="80"
        height="80"
      />,
    );

    const avatar = screen.getByRole('img');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('test');
    expect(avatar).toHaveAttribute('width', '80');
    expect(avatar).toHaveAttribute('height', '80');
  });

  it('should display the fallback image if invalid image url is passed or image url left empty', () => {
    render(<Avatar width={150} />);

    const avatarIcon = screen.getByRole('img', {
      name: 'Fallback Avatar',
    });
    expect(avatarIcon).toBeInTheDocument();
  });

  it('should use the default alt attribute when alt is not provided', () => {
    render(
      <Avatar
        source={imgUrl}
        width="80"
        height="80"
      />,
    );

    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('alt', 'Avatar'); // Default alt value
  });

  it('should render correctly without optional classes', () => {
    render(
      <Avatar
        source={imgUrl}
        width="80"
        height="80"
      />,
    );

    const avatar = screen.getByRole('img');
    expect(avatar).not.toHaveClass('test'); // No classes passed
  });

  it('should apply width as font size for the fallback icon', () => {
    render(<Avatar classes="text-[150px]" />);

    const avatarIcon = screen.getByRole('img', { name: 'Fallback Avatar' });
    expect(avatarIcon).toHaveClass('text-[150px]'); // Font size applied
  });

  it('should render the fallback icon when an invalid source is passed', () => {
    render(
      <Avatar
        source=""
        width={150}
      />,
    );

    const avatarIcon = screen.getByRole('img', { name: 'Fallback Avatar' });
    expect(avatarIcon).toBeInTheDocument();
  });

  it('should apply the correct aria-label to the fallback icon', () => {
    render(<Avatar width={150} />);

    const avatarIcon = screen.getByRole('img', { name: 'Fallback Avatar' });
    expect(avatarIcon).toHaveAttribute('aria-label', 'Fallback Avatar');
  });
});
