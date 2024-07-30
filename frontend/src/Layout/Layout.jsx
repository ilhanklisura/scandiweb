import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer/Footer";

const Layout = () => {
   return (
      <div className="layout">
         <div className="layout-outlet">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Layout;
