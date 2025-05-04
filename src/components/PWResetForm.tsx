import Input from './Input';
import Paragraph from './Paragraph';
import SecondaryHeading from './SecondaryHeading';
import { useForm, SubmitHandler } from 'react-hook-form';
import Submit from './Submit';

interface InputProps {
  email: string;
}

const PWResetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();
  const onSubmitHandler: SubmitHandler<InputProps> = (data) => {
    console.log(data);
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
          label="Submit"
          classes="mt-10"
        />
      </form>
    </div>
  );
};

export default PWResetForm;
