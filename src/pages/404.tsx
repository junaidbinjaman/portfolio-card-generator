import { memo } from 'react';
import PrimaryHeading from '../components/PrimaryHeading';
import SecondaryHeading from '../components/SecondaryHeading';

const NotFound404 = memo(() => {
  return (
    <>
    <title>404 - Page Not Found</title>
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <SecondaryHeading>404</SecondaryHeading>
      <PrimaryHeading classes="uppercase">Page not found</PrimaryHeading>
    </div>
    </>
  );
});

export default NotFound404;
