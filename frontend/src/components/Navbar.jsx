import React from "react";

const Navbar = ({
   header,
   firstButtonProps,
   firstButtonAction,
   secondButtonProps,
   secondButtonAction,
}) => {
   return (
      <nav className="navbar">
         <div className="nav-header">{header}</div>
         <div>
            {firstButtonProps.name && (
               <button
                  id={firstButtonProps.id}
                  type={firstButtonProps.type}
                  className={`button save-button ${firstButtonProps.class}`}
                  onClick={firstButtonAction}
               >
                  {firstButtonProps.name}
               </button>
            )}
            {secondButtonProps.name && (
               <button
                  id={secondButtonProps.id}
                  type={secondButtonProps.type}
                  className={`button button-danger ${secondButtonProps.class}`}
                  onClick={secondButtonAction}
               >
                  {secondButtonProps.name}
               </button>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
