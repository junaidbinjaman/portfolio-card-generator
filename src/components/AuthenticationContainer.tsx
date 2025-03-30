import { useState } from 'react';
import { Link } from 'react-router';
import Paragraph from './Paragraph';
import Logo from './Logo';
import LoginForm from './LoginForm';
import SmallText from './SmallText';
import Button from './Button';
import ButtonOutlined from './ButtonOutlined';
import SignupForm from './SignupForm';
import LogoSrc from '/portfolio-card-generator-logo.png';
import * as motion from 'motion/react-client';

const AuthenticationContainer = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [displaySignup, setDisplaySignup] = useState<boolean>(false);

  const handleDisplayLogin = () => {
    setDisplayLogin(true);
    setDisplaySignup(false);
  };

  const handleDisplaySignup = () => {
    setDisplaySignup(true);
    setDisplayLogin(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: .3 } }}
      className="p-[3.12rem] bg-white h-[38.75rem] rounded-[10px] shadow-primary"
    >
      <section className="flex justify-center mb-10">
        <Logo
          src={LogoSrc}
          width={167}
          height="auto"
        />
      </section>

      <section>
        <motion.div
          layout
          style={{ display: displayLogin ? 'flex' : 'none' }}
          className="flex justify-center items-center gap-5 mb-15"
        >
          <Button
            classes="text-white px-[2.4rem] py-[14px]"
            onClick={handleDisplayLogin}
          >
            Log In
          </Button>
          <ButtonOutlined
            classes="px-[2.18rem]"
            onClick={handleDisplaySignup}
          >
            Sign Up
          </ButtonOutlined>
        </motion.div>

        <motion.div
          layout
          style={{ display: displaySignup ? 'flex' : 'none' }}
          className="flex justify-center items-center gap-5 mb-15"
        >
          <ButtonOutlined
            classes="px-[2.18rem]"
            onClick={handleDisplayLogin}
          >
            Login
          </ButtonOutlined>
          <Button
            classes="text-white px-[2.4rem] py-[14px]"
            onClick={handleDisplaySignup}
          >
            Sign Up
          </Button>
        </motion.div>
      </section>

      <Paragraph classes="text-subheading mb-[1.25rem] font-medium text-transparent bg-gradient-to-r from-accent1 to-accent2 bg-clip-text">
        Insert your email and password
      </Paragraph>

      {displayLogin && (
        <motion.section
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          id="login-section"
        >
          <LoginForm />
          <SmallText classes="mt-10">
            Lost your password?{' '}
            <Link
              className="decoration-1 underline cursor-pointer transition ease-in-out duration-100 active:opacity-50"
              to="/password-reset"
            >
              Click here to reset.
            </Link>
          </SmallText>
        </motion.section>
      )}

      {displaySignup && (
        <motion.section
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          id="signup-section"
        >
          <SignupForm />
        </motion.section>
      )}
    </motion.div>
  );
};

export default AuthenticationContainer;
