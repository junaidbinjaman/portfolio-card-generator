import SmallText from '../components/SmallText';
import PWResetContainer from '../components/PWResetContainer';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useRoutes } from '../contexts/RoutesProvider';
import { useEffect, useState } from 'react';

const PasswordReset = () => {
  const { privacyPolicy } = useRoutes();
  const [slugs, setSlugs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/slugs`);
        const data = await response.json();
        setSlugs(data);
      } catch (error) {
        console.error('Failed to load your data', error);
      }
    })();
  }, []);

  console.log(slugs);

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

      <h1>{privacyPolicy}</h1>
    </div>
  );
};

export default PasswordReset;
