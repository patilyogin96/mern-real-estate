import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151C22] shadow-md ">
      <div className="text-white mx-auto px-2 py-8 flex flex-col justify-start gap-6 items-center lg:max-w-6xl lg:flex-row lg:items-start lg:justify-between">
        <div className="text-center">
          <h1 className="font-semibold text-2xl lg:text-start ">
            Yogin's Estate
          </h1>
          <p className="pt-3 text-lg max-w-lg lg:text-start">
            "Welcome to Yogin's Estate, where your dream home awaits! Discover
            exceptional real estate services for buying, selling, and renting.
            Your perfect property journey begins here."
          </p>
        </div>
        <div className="">
          <div className="text-center">
            <h1 className="font-semibold text-xl ">Company</h1>
            <div>
              <ul className="gap-1">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Career with Us</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-xl">Help & Support</h1>
            <div>
              <ul>
                <li>User Guidelines</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
