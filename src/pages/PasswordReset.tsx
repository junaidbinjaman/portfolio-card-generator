import SmallText from '../components/SmallText';
import PWResetContainer from '../components/PWResetContainer';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useSlug } from '../contexts/SlugContext';

const PasswordReset = () => {
  const Slug = useSlug('Terms & conditions');

  console.log(Slug);

  return (
    <div className="flex flex-col justify-center items-center gap-15 w-screen h-screen">
      <PWResetContainer />

      <ul className="flex gap-10">
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <Link to="/privacy-policy">
            <SmallText classes="underline cursor-pointer">Privacy Policy</SmallText>
          </Link>
        </motion.li>
        <motion.li whileTap={{ opacity: 0.4, transition: { duration: 0.2 } }}>
          <Link to="/terms-and-conditions">
            <SmallText classes="underline cursor-pointer">Terms & Conditions</SmallText>
          </Link>
        </motion.li>
      </ul>

    </div>
  );
};

export default PasswordReset;
