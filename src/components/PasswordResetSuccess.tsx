import Button from './Button';
import Paragraph from './Paragraph';
import { FaCheck } from "react-icons/fa6";


function PasswordResetSuccess() {
  return (
    <>
    <div className='flex justify-center items-center w-[12.5rem] h-[12.5rem] rounded-full bg-gradient-to-b from-accent1 to-accent2'>
        <FaCheck className="text-9xl text-white" />
    </div>

      <Paragraph classes='text-text text-center mt-5'>
        An email is sent with a password reset. <br />
        Please.Please check your inbox. Do not forget to checkout the spam box in case it’s not in inbox.
      </Paragraph>
      <Button classes=''>Go Back to Login Page</Button>
    </>
  );
}

export default PasswordResetSuccess;
