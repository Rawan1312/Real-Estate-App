// import React from "react";
// import Footer from "./Footer";

// import Navbarlayout from "./Navbarlayout";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <header>
//         <Navbarlayout />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import Footer from "./Footer";
import Navbarlayout from "./Navbarlayout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbarlayout />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
