import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
import PrimaryHeading from './PrimaryHeading';
import { useLocation } from 'react-router';
import { useLogoSrc } from '../contexts/LogoSrcContext';

const Header = () => {
  const [title, setTitle] = useState('Undefined');
  const location = useLocation();
  const {logoSrc, alt} = useLogoSrc();

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
          src={logoSrc}
          width={167}
          alt={alt}
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
