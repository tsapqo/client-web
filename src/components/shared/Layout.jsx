import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(83vh-1px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
