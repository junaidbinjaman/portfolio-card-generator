import Paragraph from '../components/Paragraph';
import PrimaryHeading from '../components/PrimaryHeading';
import { Link } from 'react-router';

const TermsAndConditions = () => {
  return (
    <>
    <title>Terms & conditions</title>
      <PrimaryHeading level={1}>Terms and Conditions</PrimaryHeading>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam eaque consectetur animi veniam delectus
        sed! Amet debitis, ad inventore porro, sit eos eum et tempore officia odit placeat exercitationem itaque cum a
        aut nobis ipsum similique omnis nihil. Officiis vel minima sunt dolore error rerum aliquam illo, saepe ipsum
        doloremque. Quo deleniti ab fugit modi placeat inventore quasi vel dignissimos sint hic provident molestias
        asperiores alias quisquam expedita nulla maiores, enim, magni deserunt quod facilis praesentium corrupti error?
        Unde iure similique excepturi saepe. Veritatis a ipsum delectus, facilis ducimus, amet assumenda aut id beatae
        illo ullam quod praesentium nulla!
      </Paragraph>
    </>
  );
};

export default TermsAndConditions;
