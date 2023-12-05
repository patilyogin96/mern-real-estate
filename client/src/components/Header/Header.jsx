import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3 ">
        <div>
          <Link to="/">Yogin Estate</Link>
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg p-2 focus:outline-none w-72"
          />
          <span className="absolute right-2 ">
            <FaSearch />
          </span>
        </div>
        <div>
          <ul className="hidden  md:flex justify-between gap-4 ">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="sign-in ">Sign in</Link>
            </li>
          </ul>
          <div className=" md:hidden">
            <GiHamburgerMenu className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
