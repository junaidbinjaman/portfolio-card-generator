import {UseFormRegisterReturn} from 'react-hook-form';

type inputTypes = 'text' | 'textarea' | 'checkbox' | 'upload' | 'submit';

interface InputProps {
    placeholder: string;
    classes?: string;
    register: UseFormRegisterReturn;
    type: inputTypes;
    errors: string | undefined;
}

const Input = ({
    type,
    classes = '',
    placeholder,
    register,
    errors,
}: InputProps) => {
    return (
        <>
            <div className='relative block p-[1px]'>
                <input
                    type={type}
                    className={`w-full text-paragraph outline-0 py-3 px-3 text-text bg-white rounded-[10px] transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:placeholder:opacity-0 ${classes}`}
                    placeholder={placeholder}
                    {...register}
                />
                <div className='absolute inset-0 bg-gradient-to-r from-accent1 to-accent2 -z-10 rounded-[10px]'></div>
            </div>
            {errors && <p className='text-red-500'>{errors}</p>}
        </>
    );
};

export default Input;
