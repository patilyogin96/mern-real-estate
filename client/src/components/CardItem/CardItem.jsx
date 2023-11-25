import React from "react";
import { Link } from "react-router-dom";
import cardProp1 from "../../assets/realEstateassets/prop2.jpg";
import { MdLocationOn } from "react-icons/md";
const CardItem = ({ title }) => {
  return (
    <div className="bg-white rounded-md w-full sm:w-[320px]">
      <Link to="/" className="">
        <img
          src={cardProp1}
          alt="image"
          className="rounded-t-md h-[320px] sm:h-[220px] w-full  object-cover"
        />
        <div className="flex flex-col gap-2 p-3 w-full ">
          <h1 className="text-slate-500 font-semibold text-lg">Title</h1>
          <div className="text-slate-400 flex items-center">
            {" "}
            <span className="text-green-600">
              <MdLocationOn />
            </span>{" "}
            <span>address</span>
          </div>
          <div className="text-slate-400">Description</div>
          <div className="text-slate-500 font-semibold ">Price</div>
          <div className="text-slate-600 font-semibold ">
            <span>{`2 beds`}</span>
            <span>{`4 baths`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
