import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <section>
      <Header />
      <div className="flex items-center flex-col mb-10">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
