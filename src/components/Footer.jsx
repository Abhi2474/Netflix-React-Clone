import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className=" h-full text-xl py-10 flex flex-col gap-4 opacity-80 justify-center items-center my-10 border-t-8 border-[#232323]">
        Developed by Abhishek Gauttam
        <div className="flex justify-between w-[10%] text-2xl">
          <a href="https://github.com/Abhi2474" target="_blank">
            <BsGithub className="hover:scale-150 transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-gauttam-2b9645254/"
            target="_blank"
          >
            <BsLinkedin className="hover:scale-150 transition-all" />
          </a>
          <a href="https://twitter.com/ABHIG073" target="_blank">
            <BsTwitter className="hover:scale-150 transition-all" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <IoMail className="text-2xl" /> &#x2002;
          <a
            href="mailto:amangautam2474@gmail.com"
            className="hover:no-underline underline"
          >
            amangautam2474@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
