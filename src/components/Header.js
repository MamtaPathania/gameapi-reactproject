import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ category }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-teal-500 lg:text-white text-black relative">
      <div className="flex items-end justify-between uppercase">
        <Link to='/' >
        <img
          className="lg:h-[60px] md:h-[50px] h-[45px] p-1 ml-6"
          src={logo}
          alt="logo"
        />
        </Link>

        {/* Hamburger Icon (visible on mobile screens) */}
        <div className="lg:hidden ml-auto mr-4">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Links (visible on larger screens) */}
        <div className="hidden lg:flex lg:ml-4 lg:mr-5 gap-10">
          {category.map((e) => (
            <Link
              to={`/category/${e.cat_name}`}
              key={e.cat_name}
              className="font-serif hover:text-black ml-4"
            >
              {e.cat_name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (visible on mobile screens) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative left-0 right-5 bg-white p-4 mt-12">
          <ul>
            {category.map((e) => (
              <li key={e.cat_name} className="mb-2">
                <Link
                  to={`/category/${e.cat_name}`}
                  onClick={toggleMobileMenu}
                  className="font-serif hover:text-black"
                >
                  {e.cat_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;




// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import logo from "../../src/assets/images/logo.png";

// const Header = ({ category }) => {
//   return (
//     <div className="bg-teal-400 text-white flex items-end grid grid-cols-9 uppercase">
//       <img className="h-[60px] p-1 ml-6" src={logo} alt="logo"></img>

//       {category.map((e) => (
//         // Wrap category names with Link components
//         <Link
//           to={`/category/${e.cat_name}`} // Use the category name as the link path
//           key={e.cat_name}
//           className='flex justify-center font-serif hover:text-black'
//         >
//           {e.cat_name}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Header;
