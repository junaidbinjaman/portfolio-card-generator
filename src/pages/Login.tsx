import AuthenticationContainer from '../components/AuthenticationContainer';
import { motion } from 'motion/react';
import SmallText from '../components/SmallText';
import { useSlug } from '../contexts/SlugContext';
import { Link } from 'react-router';

const Login = () => {
  const privacyPolicyPageSlug = useSlug('Privacy Policy');
  const termsAndConditionsPageSlug = useSlug('Terms & conditions');

  return (
    <>
    <title>Login</title>
    <div className="flex flex-col gap-15 justify-center items-center w-screen h-screen">
      <AuthenticationContainer />
      <ul className="flex gap-10">
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <Link to={`/${privacyPolicyPageSlug}`}>
            <SmallText classes="underline cursor-pointer">Privacy Policy</SmallText>
          </Link>
        </motion.li>
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <Link to={`/${termsAndConditionsPageSlug}`}>
            <SmallText classes="underline cursor-pointer">Terms & Conditions</SmallText>
          </Link>
        </motion.li>
      </ul>
    </div>
    </>
  );
};

export default Login;
