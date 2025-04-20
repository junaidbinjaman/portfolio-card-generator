import { render, screen } from '@testing-library/react';
import SmallText from '../components/SmallText';

describe('SmallText', () => {
  it('should test the SmallText with correct tag, classname and content as children', () => {
    render(<SmallText>Welcome</SmallText>);
    const smallText = screen.getByRole('paragraph');

    expect(smallText).toBeInTheDocument();
    expect(smallText).toHaveTextContent(/Welcome/i);
    expect(smallText).toHaveClass(/small/i);
  });
});
