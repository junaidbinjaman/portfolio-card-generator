import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

type InputTypes = 'text' | 'textarea' | 'checkbox' | 'upload' | 'submit';

interface InputProps {
  placeholder: string;
  classes?: string;
  register: UseFormRegisterReturn;
  type: string;
  errors: string | undefined;
}

function assertIsValidInputType(type: string): asserts type is InputTypes {
  const validTypes: InputTypes[] = [
    'text',
    'textarea',
    'checkbox',
    'upload',
    'submit',
  ];

  if (!validTypes.includes(type as InputTypes)) {
    throw new Error(
      `Invalid input type: ${type}. Expected one of ${validTypes.join(', ')}`,
    );
  }
}

const Input = ({
  type,
  classes = '',
  placeholder,
  register,
  errors,
}: InputProps) => {
  assertIsValidInputType(type);

  return (
    <>
      <div className="relative block p-[1px]">
        {type === 'textarea' ? (
          <textarea
            className={clsx(
              'w-full text-paragraph outline-0 py-3 px-3 text-text bg-white rounded-[10px] transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:placeholder:opacity-0',
              classes,
            )}
            placeholder={placeholder}
            {...register}
            aria-describedby={errors ? errors : undefined}
          />
        ) : (
          <input
            type={type}
            className={clsx(
              'w-full text-paragraph outline-0 py-3 px-3 text-text bg-white rounded-[10px] transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:placeholder:opacity-0',
              classes,
            )}
            placeholder={placeholder}
            {...register}
            aria-describedby={errors ? errors : undefined}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-accent1 to-accent2 -z-10 rounded-[10px]"></div>
      </div>
      {errors && <p className="text-red-500">{errors}</p>}
    </>
  );
};

export default Input;
