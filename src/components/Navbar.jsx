import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import AuthenticationContext from "../firebase/Context";

const Navbar = () => {
  const { user, logout } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className={`flex justify-between ${
        user ? "" : "md:px-40"
      } items-center absolute w-full px-4 font-semibold md:mt-6 mt-4`}
    >
      <Link
        to={user ? "/home" : "/"}
        className="text-[#C11119] font-extrabold text-3xl md:text-5xl font-mono z-10 w-[300px] "
      >
        <img
          className="w-1/2 "
          // src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          src="public/netflix-img.png"
          alt=""
        />
      </Link>
      <div className="z-50">
        {!user?.displayName ? (
          <>
            <Link
              className="bg-[#C11119] hover:bg-[#C11119]/90 rounded md:px-4 md:py-2  py-1 px-2 text-sm md:text-md"
              to={"/signin"}
            >
              Sign In
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <Link
              to={"/account"}
              className="flex items-center justify-between bg-white/50 py-1 px-2 text-[#C11119] rounded-sm md:text-lg text-sm"
            >
              <h1>
                {user?.displayName
                  ? user.displayName.toUpperCase().split(" ")[0]
                  : "none"}
              </h1>

              <FaUserAlt className="md:text-3xl text-[#C11119]/80 mx-1 text-xl" />
            </Link>

            <button
              onClick={handleLogout}
              className="bg-[#C11119] hover:bg-[#C11119]/90 rounded-sm ml-3 py-1 px-2 md:w-20 md:text-lg text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
