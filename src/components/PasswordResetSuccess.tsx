import { Link } from 'react-router';
import { useSlug } from '../contexts/SlugContext';
import Button from './Button';
import Paragraph from './Paragraph';
import { FaCheck } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';

function PasswordResetSuccess() {
  const loginPageSlug = useSlug('Login');

  return (
    <>
      <div className="flex justify-center items-center w-[12.5rem] h-[12.5rem] rounded-full bg-gradient-to-b from-accent1 to-accent2">
        <FaCheck className="text-9xl text-white" />
      </div>

      <Paragraph classes="text-text text-center mt-5">
        An email is sent with a password reset. <br />
        Please.Please check your inbox. Do not forget to checkout the spam box in case it’s not in inbox.
      </Paragraph>
      <Link to={`/${loginPageSlug}`}>
        <Button classes="text-white py-1 px-[1.25rem]">
          <div className="flex items-center gap-2">
            <FaArrowLeft />
            Back to login
          </div>
        </Button>
      </Link>
    </>
  );
}

export default PasswordResetSuccess;
