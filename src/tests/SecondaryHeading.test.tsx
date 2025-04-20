import { render, screen } from '@testing-library/react';
import SecondaryHeading from '../components/SecondaryHeading';

describe('Secondary Heading', () => {
  it('should display secondary heading with right tag and class', () => {
    render(<SecondaryHeading>Welcome</SecondaryHeading>);
    const secondaryHeading = screen.getByRole('heading', { level: 2 });

    expect(secondaryHeading).toBeInTheDocument();
    expect(secondaryHeading).toHaveTextContent(/Welcome/i);
    expect(secondaryHeading).toHaveClass(/secondary/i);
  });
});
