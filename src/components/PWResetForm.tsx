import Input from './Input';
import Paragraph from './Paragraph';
import SecondaryHeading from './SecondaryHeading';
import { useForm, SubmitHandler } from 'react-hook-form';
import Submit from './Submit';
import { useContext, useState } from 'react';
import { PWResetStatusContext } from '../pages/PasswordReset';

interface InputProps {
  email: string;
}

const PWResetForm = () => {
  const context = useContext(PWResetStatusContext);
  const [loading, setLoading] = useState<boolean>(false);

  if (!context) {
    throw new Error('PWResetStatusContext is not provided');
  }

  // @ts-expect-error the first element is a boolean.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resetRequestSent, setRequestResetSent] = context;


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmitHandler: SubmitHandler<InputProps> = (data: {email: string}) => {
    setLoading(true);
    
    (async () => {
      const controller = new AbortController;
      const signal = controller.signal;
      const url = `${import.meta.env.VITE_API_URL}/auth/password-reset-request`;
      setLoading(true);

      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 5000);
      
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: data.email
          }),
          signal: signal
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }
        const result = await response.json();
        console.log(result);
        setRequestResetSent(true);
      } catch(error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('Fetch request aborted due to timeout');
          } else {
            console.error('Error fetching slugs:', error.message);
          }
        } else {
          console.error('Unknown error:', error);
        }
        setRequestResetSent(false);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }

    })()

  };

  return (
    <div className="flex flex-col gap-5">
      <SecondaryHeading>Reset your password</SecondaryHeading>
      <Paragraph classes="text-text-secondary">
        Lost your password? Please enter your username or email address. <br />
        You will receive a link to create a new password via email.
      </Paragraph>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mt-5"
      >
        <Input
          type="text"
          placeholder="Email.."
          register={register('email', {
            required: 'Email is required',
          })}
          errors={errors.email?.message}
        />
        <Submit
          label={loading ? 'Loading...' : 'Send reset Link'}
          disabled={loading}
          classes="mt-10"
        />
      </form>
    </div>
  );
};

export default PWResetForm;
