import { Link } from 'react-router';
import PrimaryHeading from '../components/PrimaryHeading';

const PrivacyPolicy = () => {
  return (
    <>
    <title>Privacy Policy</title>
    <Link to='/terms-and-conditions'>Terms and Conditions</Link>
      <PrimaryHeading level={1}>Privacy policy</PrimaryHeading>
    </>
  );
};

export default PrivacyPolicy;
