import AuthenticationContainer from '../components/AuthenticationContainer';
import { motion } from 'motion/react';
import SmallText from '../components/SmallText';

const Login = () => {
  return (
    <div className="flex flex-col gap-15 justify-center items-center w-screen h-screen">
      <AuthenticationContainer />
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

export default Login;
