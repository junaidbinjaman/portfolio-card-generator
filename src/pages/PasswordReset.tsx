
import SmallText from '../components/SmallText';
import PWResetContainer from '../components/PWResetContainer';
import { motion } from 'motion/react';

const PasswordReset = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-15 w-screen h-screen'>
      <PWResetContainer />

      <ul className="flex gap-10">
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <SmallText classes="underline cursor-pointer">Privacy Policy</SmallText>
        </motion.li>
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <SmallText classes="underline cursor-pointer">Terms & Conditions</SmallText>
        </motion.li>
      </ul>
    </div>
  );
};

export default PasswordReset;
