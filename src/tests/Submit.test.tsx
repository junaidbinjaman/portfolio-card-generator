import { render, screen } from '@testing-library/react';
import Submit from '../components/Submit';
import userEvent from '@testing-library/user-event';

describe('Submit button', () => {
  it('should render the form submit button correctly', () => {
    render(
      <Submit
        label="Submit"
        classes="test"
      />,
    );
    const submitBtn = screen.getByRole('button', {
      name: 'Submit',
    });

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveClass('test');
  });
  it('should run callback function properly when clicked', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');

    render(
      <Submit
        label="Submit"
        classes="test"
        onClick={() => console.log('Hello')}
      />,
    );
    const submitBtn = screen.getByRole('button', {
      name: 'Submit',
    });
    await user.click(submitBtn);

    expect(consoleSpy).toHaveBeenCalledWith('Hello');
    consoleSpy.mockRestore();
  });
});
