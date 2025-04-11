import {render, screen} from '@testing-library/react';
import Input from '../components/Input';
import {useForm, SubmitHandler} from 'react-hook-form';
import userEvent from '@testing-library/user-event';

interface FormInputTypes {
    firstName: string;
    lastName: string;
}

const TestInput = () => {
    const {
        register,
        formState: {errors},
    } = useForm();
    return (
        <Input
            placeholder='First name..'
            classes='test'
            register={register('firstName', {
                required: 'Required',
            })}
            type='text'
            errors={errors.firstName?.message as string}
        />
    );
};

const TestForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputTypes>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<FormInputTypes> = (data) => {
        console.log(data.firstName);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder='First Name..'
                type='text'
                register={register('firstName', {
                    required: 'First name is required',
                    pattern: {
                        value: /^([a-zA-Z\s]+)$/,
                        message: 'Invalid input'
                    }
                    
                })}
                errors={errors.firstName?.message}
            />
            <Input
                placeholder='Last Name..'
                type='text'
                register={register('lastName', {
                    required: 'Last name is required',
                })}
                errors={errors.lastName?.message}
            />
            <input
                type='submit'
                value='Submit'
                className='text-white bg-gradient-to-r from-0% from-accent1 to-100% to-accent2 py-3.5 px-5 rounded-[10px] cursor-pointer transition-all ease-in-out active:scale-80'
            />
        </form>
    );
};

describe('Form Input', () => {
    it('Should render the input correctly on screen with right tag and custom classnames', () => {
        render(<TestInput />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('test');
    });

    it('Should have right input name and type', () => {
        render(<TestInput />);

        const input = screen.getByPlaceholderText('First name..');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('name', 'firstName');
        expect(input).toHaveAttribute('type', 'text');
    });

    it('Should display error message if the input value is against the pattern', async () => {
        const user = userEvent.setup();
        render(<TestForm />);

        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });
        const firstNameInput = screen.getByPlaceholderText('First Name..');
        const lastNameInput = screen.getByPlaceholderText('Last Name..');


        await user.type(firstNameInput, '123');
        await user.type(lastNameInput, 'Jaman');
        await user.click(submitBtn);

        const errorMessage = screen.getByText('Invalid input');
        expect(errorMessage).toBeInTheDocument();
    });

    it(
        'should display relevant error message when the input is empty or invalid', async () => {
            const user = userEvent.setup()
            render(<TestForm />);

            const submitBtn = screen.getByRole('button', {name: /submit/i});
            await user.click(submitBtn);

            let errorMessage = screen.getByText(/First name is required/i);
            expect(errorMessage).toBeInTheDocument();

            const firstNameInput = screen.getByPlaceholderText('First Name..');
            await userEvent.type(firstNameInput, 'Hello');
            await userEvent.clear(firstNameInput);

            errorMessage = screen.getByText(/First name is required/i);
            expect(errorMessage).toBeInTheDocument();
        }
    );

    it('should log what is typed out in the first name input', async () => {
        const consoleSpy = vi.spyOn(console, 'log');
        const user = userEvent.setup();
        render(<TestForm />);
        
        const firstName = screen.getByPlaceholderText('First Name..');
        const lastName = screen.getByPlaceholderText('Last Name..');
        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });

        await user.type(firstName, 'Junaid Bin');
        await user.type(lastName, 'Jaman');
        await user.click(submitBtn);

        expect(consoleSpy).toHaveBeenCalledWith('Junaid Bin');
        consoleSpy.mockRestore();
    })
});
