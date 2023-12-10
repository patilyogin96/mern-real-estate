import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signOutSucess } from "../../redux/user/userSlice";

const Header = ({}) => {
  const { loading, error, currentUser } = useSelector((state) => state?.user);
  console.log("APPP", currentUser);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const handleUserClick = (url) => {
    if (url === "logout") {
      dispatch(signOutSucess());
    }
    setIsOpen(false);
  };

  const SucessLoginIn = ({ user }) => {
    return (
      <div className="relative">
        <button
          className="bg-slate-600 hover:bg-slate-500 shadow-sm  text-white px-2 py-1 rounded-[5px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {user}
        </button>
        {isOpen && (
          <div className="bg-white absolute p-2">
            {dropDown.map((item, index) => (
              <div
                onClick={() => handleUserClick(item?.url)}
                className="hover:bg-slate-400 hover:text-white"
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
          <Link to="/">Home Bricks</Link>
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
              {!currentUser ? (
                <Link to="sign-in ">Sign in</Link>
              ) : (
                <SucessLoginIn user={currentUser?.full_name} />
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
