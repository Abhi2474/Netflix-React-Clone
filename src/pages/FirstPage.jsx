import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-screen w-screen font-semibold">
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <img
          className="h-full w-full object-cover  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="md:text-5xl md:font-extrabold text-3xl text-center">
            Unlimited movies, TV shows and more
          </h1>
          <h4 className="md:text-3xl md:my-6 my-4 text-xl">
            Watch anywhere. Cancel anytime
          </h4>
          <h5 className="md:text-2xl text-center md:my-0 my-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div className=" flex  items-center justify-between md:w-[45%] my-6  w-[85%]">
            <input
              type="email"
              placeholder="Email Address"
              className="md:py-4 md:px-4  bg-gray-900/60 border border-white/70 rounded-sm font-semibold text-lg w-[65%] p-3 mr-3"
            />
            <Link
              to={"/signin"}
              className="bg-[#C11119] hover:bg-[#C11119]/90 md:p-4 w-[35%] rounded-sm flex items-center justify-center font-bold md:text-2xl text-md px-2 py-4 "
            >
              Get Started
              <MdChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
