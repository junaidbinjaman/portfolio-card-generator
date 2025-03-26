import { Link } from 'react-router';
import Paragraph from '../components/Paragraph';
import PrimaryHeading from '../components/PrimaryHeading';

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mt-8">
      <div>
        <title>Terms & conditions</title>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <PrimaryHeading level={1} classes='text-text'>Terms and Conditions</PrimaryHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam eaque consectetur animi veniam
          delectus sed! Amet debitis, ad inventore porro, sit eos eum et tempore officia odit placeat exercitationem
          itaque cum a aut nobis ipsum similique omnis nihil. Officiis vel minima sunt dolore error rerum aliquam illo,
          saepe ipsum doloremque. Quo deleniti ab fugit modi placeat inventore quasi vel dignissimos sint hic provident
          molestias asperiores alias quisquam expedita nulla maiores, enim, magni deserunt quod facilis praesentium
          corrupti error? Unde iure similique excepturi saepe. Veritatis a ipsum delectus, facilis ducimus, amet
          assumenda aut id beatae illo ullam quod praesentium nulla!
        </Paragraph>
      </div>
    </section>
  );
};

export default TermsAndConditions;
