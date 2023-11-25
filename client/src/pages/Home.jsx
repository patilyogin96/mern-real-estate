import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import prop1 from "../assets/realEstateassets/prop1.jpg";
import prop2 from "../assets/realEstateassets/prop2.jpg";
import prop3 from "../assets/realEstateassets/prop3.jpg";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem/CardItem";

const Home = () => {
  return (
    <div>
      <div className="px-2 py-28 flex flex-col gap-2 max-w-6xl m-auto">
        <h1 className="text-slate-700 lg:text-6xl text-3xl font-bold ">
          Find a home you will love with ease
        </h1>
        <div className="text-gray-500  text-lg   ">
          We will help you find your home fast, easy and comfortable.
          <br />
          Our expert support is available 24*7
        </div>

        <Link className="text-blue-700 text-lg hover:underline" to="/search">
          Lets Start now...
        </Link>
      </div>

      <Swiper navigation={true}>
        <SwiperSlide>
          <div
            className="h-[500px]"
            style={{
              background: `url(${prop1}) center no-repeat `,
              backgroundSize: "cover",
            }}
          ></div>
          {/* <img src={prop1} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[500px]"
            style={{
              background: `url(${prop1}) center no-repeat `,
              backgroundSize: "cover",
            }}
          ></div>
          {/* <img src={prop1} /> */}
        </SwiperSlide>
      </Swiper>
      <div className="max-w-6xl mx-auto  py-20 px-2">
        <h1 className="font-semibold text-2xl md:text-4xl">Recent Offers</h1>
        <div className="flex flex-col gap-4 md:flex-row flex-wrap py-4">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default Home;
