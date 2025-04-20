import { render, screen } from '@testing-library/react';
import Subheading from '../components/Subheading';

describe('Subheading', () => {
  it('should test the subheading with correct tag, classname and content as children', () => {
    render(<Subheading>Welcome</Subheading>);
    const subheading = screen.getByRole('heading', { level: 4 });

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent(/Welcome/i);
    expect(subheading).toHaveClass(/subheading/i);
  });
});
