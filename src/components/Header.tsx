import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
import PrimaryHeading from './PrimaryHeading';
import LogoSrc from '/portfolio-card-generator-logo.png';
import { useLocation } from 'react-router';

const Header = () => {
  const [title, setTitle] = useState('Undefined');
  const location = useLocation();

  useEffect(() => {
    setTitle(document.title);
  }, [location]);

  return (
    <header
      id="header"
      className="shadow-secondary py-5 bg-white"
    >
      <div className="flex justify-between items-center max-w-5xl mx-auto px-5">
        <Logo
          src={LogoSrc}
          width={167}
        />
        <PrimaryHeading classes="text-3xl font-bold text-transparent bg-linear-to-r from-accent1 to-accent2 bg-clip-text leading-relaxed">
          {title}
        </PrimaryHeading>
        <div className="flex gap-[1.875rem] items-center justify-center">
          <Button classes="text-white">Generate Card</Button>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
