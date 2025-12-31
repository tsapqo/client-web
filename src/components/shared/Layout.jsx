// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(83vh-1px)]">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };
// export default Layout;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
