import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [ifLogIn, setIfLogIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleUserClick = () => {
    setIsOpen(false);
  };

  const SucessLoginIn = () => {
    return (
      <div className="relative">
        <button
          className="bg-slate-600 hover:bg-slate-500 shadow-sm  text-white px-2 py-1 rounded-[5px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Yogin Patil
        </button>
        {isOpen && (
          <div className="bg-white absolute p-2">
            {dropDown.map((item, index) => (
              <div
                onClick={handleUserClick}
                className="hover:bg-slate-400 "
                key={index}
              >
                {item?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
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
              {!ifLogIn ? (
                <Link to="sign-in ">Sign in</Link>
              ) : (
                <SucessLoginIn />
              )}
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

const dropDown = [
  {
    title: "Profile",
    url: "profile",
  },
  {
    title: "Logout",
    url: "logout",
  },
];
