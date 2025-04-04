import {render, screen} from '@testing-library/react';
import Button from '../components/Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
    it('should render the button with right text, tag and classname', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', {name: /Click me/i});

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Click me/i);
        // expect(button).toHaveClass(/pcg-gradient/i);
    })

    it('should run the function when the button is clicked', async () => {
        const fn = vi.fn();
        fn.mockReturnValue('Clicked');

        render(<Button onClick={fn}>Click me</Button>);
        const button = screen.getByRole('button', {name: /Click me/i});

        const user = userEvent.setup();
        await user.click(button);

        expect(fn).toBeCalled();
        expect(fn).toHaveReturnedWith('Clicked');
    })

    it('should log the value into console when the button is clicked', async () => {
        const consoleSpy = vi.spyOn(console, 'log');

        render(<Button onClick={() => console.log('Clicked')}>Click me</Button>);
        const user = userEvent.setup();
        await user.click(screen.getByRole('button', {name: 'Click me'}));

        expect(consoleSpy).toHaveBeenCalledWith('Clicked');
    })
})