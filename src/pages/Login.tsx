import AuthenticationContainer from '../components/AuthenticationContainer';
import { motion } from 'motion/react';

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <AuthenticationContainer />
      <motion.div
        className="bg-red-500 cursor-pointer p-5 rounded-xl text-white"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.08, ease: 'easeInOut' },
        }}
        whileTap={{ scale: 0.8 }}
      >
        <h1>Hello, World</h1>
      </motion.div>
    </div>
  );
};

export default Login;
