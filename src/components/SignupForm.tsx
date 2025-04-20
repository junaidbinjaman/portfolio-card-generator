import Input from './Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import Submit from './Submit';

interface InputTypes {
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[27rem] mb-10">
        <Input
          type="text"
          placeholder="Email.."
          register={register('email', {
            required: 'Email cannot be empty',
          })}
          errors={errors.email?.message}
        />
        <div className="mt-[1.25rem]"></div>
        <Input
          type="password"
          placeholder="Password.."
          register={register('password', {
            required: 'Password cannot be empty',
          })}
          errors={errors.password?.message}
        />
      </div>

      <Submit label="Sign Up" />
    </form>
  );
};

export default SignupForm;
