import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (<section className="w-screen h-screen">
    <Header />
    <Outlet />
    <Footer />
    </section>)
}

export default Layout;