import Button from './Button';
import Logo from './Logo';
import PWResetForm from './PWResetForm';
import LogoSrc from '/portfolio-card-generator-logo.png';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';
import * as motion from 'motion/react-client';

const PWResetContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="p-[3.125rem] shadow-primary bg-white rounded-[10px]"
    >
      <Logo
        src={LogoSrc}
        width={167}
      />

      <Link to="/">
        <Button classes="text-white flex justify-center items-center gap-[0.4375rem] !py-[0.625rem] mt-15 mb-10">
          {<FaArrowLeft />} Go Back to Login
        </Button>
      </Link>

      <PWResetForm />
    </motion.div>
  );
};

export default PWResetContainer;
