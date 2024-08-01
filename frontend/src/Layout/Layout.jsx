import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
   return (
      <div className="layout">
         <div className="layout-outlet">
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
