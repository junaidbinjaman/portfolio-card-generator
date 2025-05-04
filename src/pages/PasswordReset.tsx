import React, { useState } from 'react';
import SmallText from '../components/SmallText';
import PWResetContainer from '../components/PWResetContainer';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useSlug } from '../contexts/SlugContext';
import PasswordResetSuccess from '../components/PasswordResetSuccess';

const PasswordReset = () => {
  const termsAndConditionsPageSlug = useSlug('Terms & conditions');
  const privacyPolicyPageSlug = useSlug('Privacy Policy');
  const [resetRequestSent, setRequestResetSent] = useState<boolean>(true);

  return (
    <>
      <title>Password Reset</title>
      <div className="flex flex-col justify-center items-center gap-15 w-screen h-screen">
        {resetRequestSent ? <PasswordResetSuccess /> : <PWResetContainer />}

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

export default PasswordReset;
