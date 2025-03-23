import { Outlet } from "react-router";


const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
};

export default Header;
