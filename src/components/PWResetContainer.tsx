import Button from './Button';
import Logo from './Logo';
import LogoSrc from '/portfolio-card-generator-logo.png';
import { FaArrowLeft } from 'react-icons/fa6';

const PWResetContainer = () => {
  return (
    <div className="p-[3.125rem] shadow-primary bg-white rounded-[10px]">
      <Logo
        src={LogoSrc}
        width={167}
      />
      <Button classes="text-white flex justify-center items-center">{<FaArrowLeft />} Go Back to Login</Button>
    </div>
  );
};

export default PWResetContainer;
