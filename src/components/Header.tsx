import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
import PrimaryHeading from './PrimaryHeading';
import LogoSrc from '/portfolio-card-generator-logo.png';

const Header = () => {
  return (
    <header id='header' className='flex gap-[12.4375rem] items-center justify-center shadow-secondary py-5 bg-white'>
      <Logo
        src={LogoSrc}
        width={167}
      />
      <PrimaryHeading classes='text-3xl font-bold text-transparent bg-linear-to-r from-accent1 to-accent2 bg-clip-text leading-relaxed'>Dashboard</PrimaryHeading>
      <div className='flex gap-[1.875rem] items-center justify-center'>
        <Button classes='text-white'>Generate Card</Button>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
