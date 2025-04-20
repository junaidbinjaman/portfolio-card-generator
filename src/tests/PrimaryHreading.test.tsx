import { render, screen } from '@testing-library/react';
import PrimaryHeading from '../components/PrimaryHeading';

describe('Primary heading', () => {
  it('should display primary heading with right tag and classname', () => {
    render(<PrimaryHeading level={1}>Welcome</PrimaryHeading>);
    const primaryHeading = screen.getByRole('heading', { level: 1 });

    expect(primaryHeading).toBeInTheDocument();
    expect(primaryHeading).toHaveClass(/primary/i);
    expect(primaryHeading).toHaveTextContent(/Welcome/i);
  });
});
